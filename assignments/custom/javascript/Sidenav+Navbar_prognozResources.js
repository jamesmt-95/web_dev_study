// $('document').ready(function(){
//   $("#onloadDivForExtFile").load("extLoadFiles/default.html");
//  // document.getElementById('onloadDivForExtFile').
//  // innerHTML='<object id="getObj" type="text/html" data="extLoadFiles/default.html"></object>';
// // });
// });

$('document').ready(function(){
  $("#onloadDivForExtFile").load("../HTML/prog_home.html");
});

$('body').on('click', '#home', function(){
  $("#onloadDivForExtFile").load("../HTML/prog_home.html");
  $('#img_toHide').show();
});

$('body').on('click', '#courses_Python', function(){
  $('#img_toHide').hide();
  $("#onloadDivForExtFile").load("extLoadFiles/pythonDoc.html");
});

$('body').on('click', '#register', function(){
  $('#img_toHide').hide();
  $("#onloadDivForExtFile").load("extLoadFiles/registration.html");
});
$('body').on('click', '#enquiry', function(){
  $('#img_toHide').hide();
  $("#onloadDivForExtFile").load("extLoadFiles/enquiry.html");
});


