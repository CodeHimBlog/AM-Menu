/*  Project: AM Menu. (Full App Style Mega Menu)
 *   Author: Asif Mughal
 *   URL: www.codehim.com
 *   License: MIT License
 *   Copyright (c) 2018 - Asif Mughal
 */
/* FILE : demo-only.js */
$(document).ready(function(){
   var topBar = $(".am-header");
 $(".set-sticky").click(function() {
  $(this).toggleClass("to-active");
  $(topBar).toggleClass("sticky");
if($(".am-header").hasClass("sticky")){
        var fixedvalue = "true,";
        var topBarHeight = $(".am-header").height();
     $("main").css({
        'marginTop' : topBarHeight
    });

}
   else{
     var fixedvalue = "false,";
    $("main").css({
        'marginTop' : 'auto' 
    });
   }
   var newcode = "fixed:"+fixedvalue
   $(".fixed-code").html(PR.prettyPrintOne(newcode));

 });
//change glass effect
 $(".set-glass").click(function() {
  $(this).toggleClass("to-active");
  $(".am-header").toggleClass("glass");
    
if($(".am-header").hasClass("glass")){
        var glassvalue = "true,";
 }
   else{   var glassvalue = "false,"; }
   var newcode = "glassEffect:"+glassvalue
   $(".glass-code").html(PR.prettyPrintOne(newcode));

 });
// dim overly
$(".set-overlayer").click(function() {
  $(this).toggleClass("to-active");
 var dimmy =  $(".dim");
  
if($(this).hasClass("to-active")){
        var dimvalue = 'true,';
 }

   else{   var dimvalue = "false,";}
   if (dimvalue == "false,"){
        $(dimmy).css({
        'position' : 'absolute',
        'top' : '-100%', 
        'left' : '-100%',
           });
     $(".mesg").fadeOut();
    }
        else{
    $(".mesg").html("Overlyer Turned On Toggle the Menu").fadeIn();  
   $(dimmy).css({
        'position' : 'fixed',
        'top' : '0', 
        'left' : '0',
       }).fadeIn();
}
   var newcode = "dimOverLayer:"+dimvalue
   $(".dim-code").html(PR.prettyPrintOne(newcode));
 });
 /* Change the color */
 $(".theme-tray span").click(function() {
  var skin = $(this).attr("class");
  $(".am-header").attr('class', skin).addClass("am-header sticky");
  $(".am-container").attr('class', skin).addClass("am-container");
  $(".set-glass").removeClass("to-active");
  $(".set-sticky").addClass("to-active");
    var newcode = "theme:"+"\'"+skin+"\',"
    
   $(".theme-code").html(PR.prettyPrintOne(newcode));
         
});

$(".ok").click(function(){
     $(".mesg, .dim").fadeOut();
      
});
}); //jQuery
