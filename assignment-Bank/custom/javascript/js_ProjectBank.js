$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).on('click', '.card-header', function(){
    $(this).find('.customCaret').toggleClass('fa-caret-up fa-caret-down');
    // $(this).toggleClass('fa-caret-up fa-caret-down');
});
// $(document).on('mouseover', '.card-header', function(){
// $(this).css('color', 'red');
// });
// $('#a').hover(function() {
//     $('#b').css('background-color', 'yellow');
//   }, function() {
//     // on mouseout, reset the background colour
//     $('#b').css('background-color', '');
//   });
$('.collapse').on('shown.bs.collapse',function(){
//  var $card = $(this).closest('.card');
//  var $card = $(this).find(':nth-child(1)', '.card');  :nth-child()?  here .closest()  can be used. But i have added .card class to parent div (acc_Deposits.html ln 244), so when using closest() that div will be triggered 
//  .closest() - For each element in the set, get the first element that 
//  matches the selector by testing the element itself and traversing 
//  up through its ancestors in the DOM tree.
/*
The .closest selector -> traverses up the DOM to find the parent that matches the conditions.
the .find selector -> traverses down the DOM where the event occurred, that matches the conditions.
*/
$('html,body').animate({
    scrollTop: $(this).offset().top},1000);
    // .offset() method allows us to retrieve the current position of an element
});
$(document).on('click', '.close', function(){
$(event.target).closest('.collapse').collapse('hide');
// event.target or this or e.target with function(e)  
$('html,body').animate({
    scrollTop: $('body').find('.breadcrumb').offset().top},1000);

});
