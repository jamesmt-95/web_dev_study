$(document).ready(() => {

})

$('#edit_emp').click(() => {
    // alert('Call');
    //let emp_id = $(this).$('option:selected').attr('custom_attr')
    $emp_id = $('#select_edit').val() //for option value
    $emp_name = $('#select_edit :selected').text() //for name
    //or $emp_name = $('#select_edit option:selected').text() 
    //$emp_name = $('#select_edit').$('option:selected').text() //for name
    $.ajax({
        method: 'POST',
        url: 'http://127.0.0.1:8080/edit/employee',
        data: {
            emp_id: $emp_id,
            emp_name: $emp_name
        },
        success: (response) => {
            console.log(response)
            //$('#main_content').empty()
            //$('#main_content').append(response)
            $('#fetch_editForm').empty()
            $('#fetch_editForm').append(response)
            //$('#submit').prop('disabled', true);
            // $('#fetch_editForm').html(response)
            $('html,body').animate({
                scrollTop: $('#fetch_editForm').offset().top
            }, 1000);
            // .offset() method allows us to retrieve the current position of an element

        }
    })
});

/*NOTE:God helped me 
the following #submit button is a part of AJAX response,(it was not initialized when document is created)
if you want to get pre-initialized events, then directly we can use, like $('#edit_emp').click(()
but in this case, it is different. So either we have to specify the body or container(div#id or anything which contains event_object)
$('#fetch_editForm').on('click', '#submit', () => {
    alert('OK')
})
or
$('body').on('click', '#submit', () => {
    alert('OK')
})
*/
$('#fetch_editForm').on('click', '#submit', () => {


    /*
    $('.class1, .class2').on('click', some_function);
    to check , if any changes to input case(in my case, value to be edited is already in input field) we can use
    oninput or onchange (4 input field , so use the above method to track any change from multiple event controller
    */
})


$('#fetch_editForm').on('keyup', '#input1, #input2, #input3, #input4', () => {
    //on(input|change|keyup)
    $id = $('#submit').attr('data-id')
    $input1 = $('#input1').val()
    $input2 = $('#input2').val()
    $input3 = $('#input3').val()
    $input4 = $('#input4').val()
    let reg_name = /^([a-zA-Z]{3,15})$/
    let reg_sex = /^([mM]ale)$|^([fF]emale)$/
    let reg_age = /^([2-5][0-9])$/
    let reg_desg = /^([a-zA-Z ]{3,10})+([a-zA-Z]{3,10})$/
    //alert($input1 + '' + $input2 + '' + $input3 + '' + $input4)
    if (($input1.search(reg_name) == -1) || ($input2.search(reg_sex) == -1) || ($input3.search(reg_age) == -1) || ($input4.search(reg_desg) == -1)) {
        $('#submit').prop('disabled', true)
        $('#formstatus').empty()
        $('#formstatus').addClass('text-danger')
        $('#formstatus').append('You have entered an Invalid Data')

    } else {
        //alert('Yes')
        $('#formstatus').empty()
        $('#formstatus').removeClass('text-danger')
        $('#formstatus').addClass('text-success')
        //$('#formstatus').toggleClass('text-danger text-success')
        $('#formstatus').append('Please Save your Changes')
        $('#submit').prop('disabled', false)

    }

})

$('#fetch_editForm').on('click', '#submit', () => {
    /*
    $('.class1, .class2').on('click', some_function);
    to check , if any changes to input case(in my case, value to be edited is already in input field) we can use
    oninput or onchange (4 input field , so use the above method to track any change from multiple event controller
    */
    /* Already defined in abovve, so no need to define again
    $id = $('#submit').attr('data-id')
     $input1 = $('#input1').val()
     $input2 = $('#input2').val()
     $input3 = $('#input3').val()
     $input4 = $('#input4').val()
     */
    $.ajax({
        method: 'POST',
        url: 'http://127.0.0.1:8080/edit/employee/save_change',
        data: {
            user_id: $id,
            g_name: $input1,
            g_sex: $input2,
            g_age: $input3,
            g_desg: $input4
        },

        success: (response) => {
            console.log(response)
            if (response.trim() == '1') {
                location = '/'
                // $('#formstatus').removeClass()
                // $('#formstatus').addClass('text-success font-weight-bold')
                // $('#formstatus').empty()
                // $('#formstatus').append('Data Updated')
            } else {
                $('#formstatus').removeClass()
                $('#formstatus').addClass('text-danger font-weight-bold')
                $('#formstatus').empty()
                $('#formstatus').append('Please try again Later....')
            }
        }
    })
})

$('#fetch_editForm').on('click', '#cnfrm_delete', () => {
    $id = $('#submit').attr('data-id')
    $.ajax({
        method: 'POST',
        url: 'http://127.0.0.1:8080/edit/employee/delete',
        data: {
            user: $id
        },
        success: (response) => {
            console.log(response)
            if (response.trim() == '0') {
                $('#modal_delete_status').empty()
                $('#modal_delete_status').append('Unexpected Error Occured..Try again later')
            } else {
                location = '/'
            }
        }
    })
})