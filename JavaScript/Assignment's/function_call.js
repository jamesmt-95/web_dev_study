//program_tv_category
function check_tv() {

  var get_cat= document.getElementById('tv_cat').value;
  txt_upper= get_cat.toUpperCase();
  //category_B
  if ((txt_upper)=='B') {
    var tv_price = prompt("Enter your TV's Price");
    if (tv_price>=5000) {
      //Cat_B_discount_10%
      var dis_price = Math.round(tv_price - (tv_price*10)/100);
      document.getElementById('tv_bill').innerHTML='<hr><u>Price Details</u><br><br> Cost Price ='+tv_price+'<br> Discount = 10% <br> Sales Price ='+dis_price+'<br> ';
    }
    else {
      alert("We are not selling TV's for Less than Rs.5000");
    }

  }
  //category_C
  else if ((txt_upper)=='C'){
    var tv_inch = prompt("Enter your TV's Size in Inch");
    //32_Inch
    if ((tv_inch)==32) {
      //tv_inch_then_cost_price
      var tv_cprice = prompt("Enter your TV's Price");
      if (tv_cprice>=5000) {
        //Cat_B_discount_15%_for_32inch
        var dis_price = Math.round(tv_cprice - (tv_cprice*15)/100);
        document.getElementById('tv_bill').innerHTML='<hr><u>Price Details</u><br><br> Cost Price ='+tv_cprice+'<br> Discount = 10% <br> Sales Price ='+dis_price+'<br> ';
      }
      else {
        alert("We are not selling TV's for Less than Rs.5000");
      }
    }
    //51_Inch
    else if ((tv_inch)==51) {
      var tv_cprice = prompt("Enter your TV's Price");
      if (tv_cprice>=5000) {
        //Cat_B_discount_15%_for_32inch
        var dis_price = Math.round(tv_cprice - (tv_cprice*15)/100);
        document.getElementById('tv_bill').innerHTML='<hr><u>Price Details</u><br><br> Cost Price ='+tv_cprice+'<br> Discount = 10% <br> Sales Price ='+dis_price+'<br> ';
      }
      else {
        alert("We are not selling TV's for Less than Rs.5000");
      }
    }
    else {
      alert("Acceptable inches are 32 or 51");
    }


  }
  else {
    alert("Please check your TV's Cateory. May be it's B or C")
  }

}

//program_fibonacci

function print_fibo(){

  var fib_limit = document.getElementById('fib_limit').value; //getting_default_value_as_100
  //alert(fib_limit);
  if (fib_limit>=3) {
    // var fib_array = [0,0];
    // fib_array[0] = 0; //init_0_to_index[0]
    // fib_array[1] = 1; //init_1_to_index[1]
    var fib_array = [0,1]
    for (var i = 2; i <= fib_limit; i++) {
      fib_array[i] = fib_array[i - 2] + fib_array[i - 1];


    }
    document.getElementById('print_fib').innerHTML='<hr><u>Fibonacci Series upto '+fib_limit+'</u><br>';

    for( x in fib_array){

      document.getElementById('print_fib').innerHTML+=' '+ fib_array[x] +'<br>';
    }
    //using while to print fib_array
    // var j = 0;
    //  while (j < fib_array.length) {
    //    document.getElementById('print_fib').innerHTML+=' '+ fib_array[j] +'<br>';
    //    j++;
    //  }

    //using for loop to print fib_array
    // for (var j = 0; j < fib_array.length; j++) {
    //   document.getElementById('print_fib').innerHTML+=' '+ fib_array[j] +'<br>';
    // }

    //using for in to print fib_array



  }
  else{
    alert("Please Enter a valid Limit");
  }

}


function fnodd_even(){

  var odd = new Array();
  var even = new Array();
  limit = document.getElementById('odev_limit').value;

  if (limit > 4) {
    for (var i = 1; i <= limit; i++) {
      if ((i)%2===0)
      {
        even[i] = i;
      }
      else
      {
        odd[i] = i;
      }

    }
    //alert(even + " || " + odd)
    document.getElementById('odd').innerHTML='<u>ODD Numbers</u> <br>';
    document.getElementById('even').innerHTML='<u>EVEN Numbers </u> <br>';
    for( a in odd){

      document.getElementById('odd').innerHTML+=' '+ odd[a] +'<br>';

    }
    for( b in even){
      document.getElementById('even').innerHTML+=' '+ even[b] +'<br>';
    }
  }
  else {
    alert("Enter a valid Limit");
  }
  // console.log("Even"+even);
  // console.log("Odd" +odd);
}

//student grade
function find_grade(){

  //var name = document.getElementById('std_name').value;
  // var m1 = document.getElementById('mrk_m1').value;
  // var m2 = document.getElementById('mrk_m2').value;
  // var m3 = document.getElementById('mrk_m3').value;
  var m1 = Number(document.getElementById('mrk_m1').value)
  var m2 = Number(document.getElementById('mrk_m2').value)
  var m3 = Number(document.getElementById('mrk_m3').value)

  //operation
  if ((isNaN(m1)) || (isNaN(m2)) || (isNaN(m3)))
  {
    alert("Please Enter Valid Marks for Subjects");
  }
  else{

    if ((m1 >= 10 && m1 <= 100) && (m2 >= 10 && m2<= 100) && (m3 >= 10 && m3 <= 100)){
      var total = m1 + m2 + m3;
      var avg = Math.round(total / 3);
      var gr_score;
      //alert(total+ ' ' +avg);

      switch (true) {
        case (avg > 80):
        gr_score = 'Excellent';
        break;
        case (avg > 70 && avg < 80):
        gr_score = 'Very Good';
        break;
        case (avg > 60 && avg < 70):
        gr_score = 'Good';
        break;
        case (avg < 60):
        gr_score = 'OK';
        break;


        default:
        gr_score = 'Invalid';
      }

      //alert(gr_score);
      document.getElementById('print_grade').innerHTML='<hr><u>Grade Details</u><br><br> Total Marks = '+total+'<br> Average = '+ avg +' <br> Grade Status = '+gr_score+'<br> ';

    }
    else {
      alert("Please check your Marks!!");
    }

    //  document.getElementById('print_grade').innerHTML='<hr><u>Price Details</u><br><br> Cost Price ='+tv_price+'<br> Discount = 10% <br> Sales Price ='+dis_price+'<br> ';

  }
}

function check_elgible(){
  var get_dob = document.getElementById('pr_dob').value;
  split_date= get_dob.split("-");
  //difference date
  var to_date = new Date();
  var curr_date = to_date.getFullYear()+'-'+(to_date.getMonth()+1)+'-'+to_date.getDate();
  split_curr_date = curr_date.split("-");
  //alert(split_curr_date);

  if (split_curr_date[1] < 10) {
    split_curr_date[1] = '0'+split_curr_date[1];
    //alert(split_curr_date[1]);
    // alert("Your DOB "+split_date[0]+'Month'+split_date[1]+'Day'+split_date[2]+'');
    // alert("Current "+split_curr_date[0]+'Month'+split_curr_date[1]+'Day'+split_curr_date[2]+'');
    check_diff();
  }

  else if (split_curr_date[2] < 10) {
    split_curr_date[2] = '0'+split_curr_date[2];
    check_diff();
  }
  else {
    check_diff();
  }

  function check_diff(){
    var result =  split_curr_date[0]-split_date[0];
    if (result > 18) {
      document.getElementById('print_vote_status').innerHTML+='<hr><u>Election Portal</u><br><font style="color:green;"> You Are Elgible to Vote</font>';
    }
    else {
      document.getElementById('print_vote_status').innerHTML+='<hr><u>Election Portal</u><br> <font style="color:red;"> You Are Not Elgible to Vote</font>';
    }

    // alert(result);
    // alert("Your DOB "+split_date[0]+': Month '+split_date[1]+': Day '+split_date[2]+'');
    // alert("Current Date "+split_curr_date[0]+ ': Month' +split_curr_date[1]+': Day '+split_curr_date[2]+'');

  }

}


function check_vowel(){

  var char_val = document.getElementById('get_char').value;
  if ((char_val.length == 0) || (char_val.indexOf(' ') !== -1) || (!(isNaN(char_val))) ||(char_val.length >1)) {
    alert("Enter a valid single character!!");

  }
  else{
    var_upper = char_val.toUpperCase();
    //alert(var_upper);
    vowel_array = ['A','E','I','O','U'];
    if (vowel_array.includes(var_upper)) {
    
      //alert("contains");
      document.getElementById('print_char_status').innerHTML+='<hr><u>Hi User,</u><br> <font style="color:green;"> The given character " '+char_val+' " is a Vowel</font>';
    }
    else{
      document.getElementById('print_char_status').innerHTML+='<hr><u>Hi User,</u><br> <font style="color:red;"> The given character " '+char_val+' " is a Constant</font>';
    }
  }
}


//leap_year
function check_leapyear(){
  var year = document.getElementById('get_year').value;
  if ((year.length == 4) && (!(isNaN(year))) && (year.indexOf(' ') == -1))
  {
    var result = leapYear(year);
    if (result == true) {
      //alert("Leap Year");
      document.getElementById('print_leap').innerHTML+='<hr><u>Hi User,</u><br> <font style="color:green;"> The given year " '+year+' ", is a Leap Year</font>';
    }
    else {
      document.getElementById('print_leap').innerHTML+='<hr><u>Hi User,</u><br> <font style="color:red;"> The given year " '+year+' ", is Not a Leap Year</font>';
    }
  }
  else{
    alert("Please Enter a valid Year");
  }

  function leapYear(get_year)
  {
    return (((get_year % 4 == 0) && (get_year % 100 != 0)) || (get_year % 400 == 0))
  }
}

function find_sum(){
  var n1 = document.getElementById('add_1').value;
  var n2 = document.getElementById('add_2').value;

  if ((!(isNaN(n1))) && (!(isNaN(n2))) && (n1.indexOf(' ') == -1) && (n2.indexOf(' ') == -1))
  {
//alert("test");
var sum = Number(n1)+Number(n2);
document.getElementById('print_sum').innerHTML+='<hr><font style="color:green;"> '+n1+' + '+n2+' = '+sum+'</font>';
  }
  else{
    alert("Please Enter Valid Numbers");
  }
}


//positive or not
function chk_post(){
  var number = document.getElementById('num_get').value;


  if ((number.length >0 ) && (!(isNaN(number))) && (number.indexOf(' ') == -1))
  {
//alert("test");

if (number == 0) {
  document.getElementById('print_posneg').innerHTML+='<hr><font style="color:red;"> Oops!! That is nothing... a ZERO</font><br>';
}
else if (number > 0) {
  document.getElementById('print_posneg').innerHTML+='<hr><font style="color:green;"> Not Bad! That is +ve</font><br>';
}
  else{
      document.getElementById('print_posneg').innerHTML+='<hr><font style="color:red;">!!!! That is -ve</font><br>';
  }
}
}
