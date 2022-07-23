update_badge = () => {
    $.ajax({
        method: 'POST',
        url: 'http://127.0.0.1:8080/update_badge',
        data: {
            context: 'check_cart'
        },
        success: (response) => {
            console.log(response)
            $value = response.trim()
            $('#cart_badge').empty()
            $('#cart_badge').append($value)
        }
    })
} 

$(document).ready(() => {

    update_badge()

})


/*
Jquery supports Unique ID only for elements...but in this case n no.of buttons with same class also data-id
to fetch all data-id , each loop with in that click event [ let $this = $(element) element which trigggers click ]
*/
$('.submit_prd').each((index, element) => {
    let $this = $(element)
    $this.on("click", () => {
        $prd_id = $this.attr('data-id');
        // alert($prd_id)

        $.ajax({
            method: 'POST',
            url: 'http://127.0.0.1:8080/add_to_cart',
            data: {
                product: $prd_id,
            },
            success: (response) => {
                console.log(response)
                if (response.trim() == '1') {
                    
                    location = '/view_cart'
                    update_badge()
                } else {
                    alert('Please try again Later..')
                }
            }
        })

    });
});