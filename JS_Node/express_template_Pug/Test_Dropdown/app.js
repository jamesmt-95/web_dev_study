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
                response.render('view_dropdown', {
                    data: res
                })

            }

        })
    }
    get_data(con, res)

})


app.listen(port, hostname, () => {
    console.log(`Server Running on Port:${port}`)
})