const hostname = '127.0.0.1'
const port = 8080
let express = require('express')
let app = express()
let con = require('./db_export').conn_exp()

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use(express.static('./public'))
/*
app.use('/img',express.static(path.join(__dirname, 'public/images'))); img folder inside images 
app.use('/js',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/css',express.static(path.join(__dirname, 'public/stylesheets')));
*/

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')


con.connect((err) => {
    if (err) console.log(`Error While connecting to Database!! ${err}`)
    else {
        console.log(`Connected to Database`)
        //config_table()
    }
})
app.get('/', (req, res) => {

    get_data = (connection, response) => {
        let query3 = 'SELECT product.prd_id, product.prd_name, brand_details.br_name, category.cat_name, product.unit_cost, product.in_stock, product.status from product INNER JOIN category on product.cat_id = category.cat_id INNER join brand_details on product.brand_id=brand_details.brand_id'
        connection.query(query3, (err, res) => {
            if (err) console.log(`Error! While Fetching Data ${err}`)
            else {
                //console.log(JSON.stringify(res))
                response.render('product_view', {
                    data: res
                })

            }

        })
    }
    get_data(con, res)

})


app.get('/view_cart', (err, res) => {

    get_editData = (connection, response) => {
        let query4 = 'SELECT product.prd_id, brand_details.br_name, product.prd_name, product.unit_cost, product.in_stock, product.status, cart_details.cart_id, cart_details.date from product INNER join brand_details on product.brand_id = brand_details.brand_id INNER join cart_details on product.prd_id=cart_details.prd_id'
        connection.query(query4, (err, res) => {
            if (err) console.log(`Error! While Fetching Data ${err}`)
            else {
                console.log(res)
                // response.render('view_cart', {
                //     data: res
                // })

                if (res.length > 0) {
                    response.render('view_cart', {
                        data: res,
                        status: "Products in your Cart"
                    })
                } else {

                    response.render('view_cart', {
                        data: res,
                        status: "No Products Found"
                    })
                }
                console.log(JSON.stringify(res))


            }
        })
    }
    get_editData(con, res)

})
app.post('/add_to_cart', (req, res) => {
    //console.log(JSON.stringify(req.body))
    let pr_id = req.body['product']
    to_cart = (con, res) => {
        let query5 = "INSERT INTO `cart_details`(`prd_id`, `status`) VALUES ('" + pr_id + "',1)"
        //let data = [pr_id, 1]
        con.query(query5, (err, result) => {
            if (err) console.log(`Error!! While Adding to Cart ${err}`)
            else {
                console.log(`${result.affectedRows} Product Added to Cart `)
                res.send('1')
            }
        })

    }
    to_cart(con, res, () => {}) //to_cart(con, res)

})

app.post('/update_badge', (req, res) => {
    //let context = req.body['context']
    check_cart = (con, res) => {
        let query6 = 'SELECT COUNT(*) as Total from cart_details' //* or column
        con.query(query6, (err, result) => {
            if (err) console.log(`Error!! Updating Badge ${err}`)
            else {
                console.log(`${JSON.stringify(result)} Badge to be updated `)
                let tot = result[0].Total
                res.send(JSON.stringify(tot))
                // console.log(result[0].Total)
            }
        })
    }
    check_cart(con, res)

})

app.listen(port, hostname, () => {
    console.log(`Server Running on Port:${port}`)
})