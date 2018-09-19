/*   Project           : AM Menu (Full App Style Mega Menu)
 *   Plugin Name       : am-menu.js
 *   Plugin Version    : 1.0
 *   Last change       : 19/09/2018
 *   Framework css	     : Core Framework 3.0
 *   Framework js      : jQuery v3.3.1 min.js 
 *   Author            : Asif Mughal
 *   Official URL      : www.codehim.com
 *   License           : MIT License
 *   Copyright (c) 2018 - Asif Mughal
 */
/*   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */

(function($){
      $.fn.amMenu = function(options) {
      var set = $.extend({
       	      theme: 'default-theme',
               textShadow: false,
               dimOverLayer: true,
               glassEffect: false,
               fixed: true,
  		   }, options);

        return this.each(function() {
     var megaMenu = $(".am-container");
     var sBox = $(".search-container");
     var search_trigger = $(".s-wrapper");

//AM Menu Customization
   $(".am-header, .am-container").addClass(set.theme);

   if (set.dimOverLayer == true){
//to create background dim overlayer effect
   var dimmy =  document.createElement("div");
      $(dimmy).css({
        'width' : '100%',
        'height' : '100vh',
        'background' : 'rgba(0, 0, 0, 0.6)',
        'zIndex' : '2', 
        'position' : 'fixed',
        'top' : '0', 
        'left' : '0',
        'display' : 'none',
       }).appendTo("body").addClass("dim");
    }
// FIXED MENU BAR ON TOP
   if (set.fixed == true){
     $(".am-header").addClass("sticky");
   } 
   else{
     $(".am-header").removeClass("sticky");
   }
// SETTING FOR TEXT SHADOW
   if (set.textShadow == true){
     $(".am-header *, .am-container *").css({
      'textShadow' : '1px 0.6px rgba(0, 0, 0, 0.6)',
   });
 }
// GALSS LIKE EFFECT ON TOP MENU BAR
    if (set.glassEffect == true){
      $(".am-header").addClass("glass");
    }  
   else{
     $(".am-header").removeClass("glass");
    }

//Colorful Cloud Tags
  var totalTags = $(".cloud-tags li").length; //to find total cloud tags
  var mct = $(".cloud-tags").find("li a");  //select all tags links to make them colorful
  var tagColor = ["#81D8D0", "#5CB3FF", "#95B9C7", "#C11B17", "#3B9C9C" , "#FF7F50", "#FFD801", "#79BAEC", "#F660AB", "#3D3C3A", "#3EA055", "#ff66ff"] // set of colors for cloud tags
      tag = 0; color = 0; //assign colors to tags with loop, unlimited number of tags can be added to the menu
        do {
         if(color > 11) {color = 0;} //Start again array index if it reaches at last
     $(mct).eq(tag).css({'background' : tagColor[color]});       
     tag++,
     color++
    } while( tag <= totalTags)

//Light Box
   var lightBox = document.createElement("div");
   var closeBox = document.createElement("span");
       $(closeBox).html("&times;").addClass("close-light-box");
   var capArea = document.createElement("span"); 
   var galleryPhoto = $(".grid-items li img");

 $(galleryPhoto).bind('click', function(){
   var caption = $(this).attr('alt');
   if ($(this).prop('alt') == false){
      caption = "This image has no caption";
   }
   var singlePhoto = $(this).clone();   $(lightBox).html(singlePhoto).appendTo("body");
    $(lightBox).addClass("light-box").prepend(closeBox);
   var dimmy = $(".dim-overlay");
       $(dimmy).fadeIn("slow");
    $(closeBox).click(function(){
       $(lightBox).remove();
       $(dimmy).fadeOut("fast");
   });

 $(capArea).html(caption).appendTo(lightBox).css({'position' : 'relative',
           'padding' : '10px',
           'bottom' : '42px',
           'fontSize' : '15px',  
           'textAlign' : 'center',
           'background' : 'rgba(0, 0, 0, 0.3)', 
           'color' : 'rgba(255, 255, 255, 1)',
           'display' : 'block'});
    //hide Image caption if mouse enter on it
   $(lightBox).bind('mouseenter', function(){
        $(capArea).fadeOut();
    });
    //show image caption if mouse leave
    $(lightBox).bind('mouseleave', function(){
         $(capArea).fadeIn();
    });

});

//Menu Icon 
    var iconData= "<svg class='ham hamRotate ham1' viewBox='0 0 100 100' width='120'><path class='line top' d='m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315-8.024349,-11.958003-14.89975,-10.85914 -6.875401,1.098863-13.637059,4.171617-13.637059,16.368042 v 40' /><path class='line middle' d='m 30,50 h 40' /><path class='line bottom' d='m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752-4.786586,-27.274118-16.667516,-27.274118-11.88093,0-18.499247,6.994427 -18.435284,17.125656 l 0.252538,40' /></svg>";
   $(".menu-trigger").html(iconData);

   $(".hamRotate").bind('click', function (){
   this.classList.toggle('active');
    $(".am-container").toggleClass("open");
     if ($(sBox).hasClass("searchNow"))
     {
          $(".logo").fadeOut(); 
          $(sBox).removeClass("searchNow");
          $(search_trigger).removeClass("searchopen");
          $(".logo").fadeIn();
     } 

  if ($(".am-container").hasClass("open")){
        $(dimmy).fadeIn("slow");
      }  
  else { $(dimmy).fadeOut("slow"); }
       
});

//Search box functionality
    var searchFormData = '<svg class="search-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" viewBox="0 0 671 111" style="enable-background:new 0 0 671 111;" xml:space="preserve"><path class="border" d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"/><path class="border" d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"/></svg><div class="go-icon"><i class="fa fa-arrow-right"></i></div>';

   $(searchFormData).appendTo(".search-box");

   $("#search").focus(function() {
      $(".search-box").addClass("border-searching");
      $(".search-icon").addClass("si-rotate");
    });
      $("#search").blur(function() {
      $(".search-box").removeClass("border-searching");
      $(".search-icon").removeClass("si-rotate");
        
    });
 $("#search").keyup(function() {
        if($(this).val().length > 0) {
            $(".go-icon").addClass("go-in");
            $(".s-wrapper").fadeOut();
        }
        else {
           $(".go-icon").removeClass("go-in");
           $(".s-wrapper").fadeIn();
        }
    });

      $(".go-icon").click(function(){
      $(".search-form").submit();
    });

// vPage
//Create a virtual page on mobile devices to show sub items of main item
    var vPage = document.createElement("div");
    var vPageContainer = document.createElement("div");
    var closeVpage = document.createElement("span");
    var vHeader = document.createElement("div");

   $(closeVpage).addClass("close-vPage").html("<i class='fa fa-arrow-left'></i>").css({
     'fontSize' : '18px',
      'cursor' : 'pointer', 
      'border' : '0',
      'outline' : '0'
      });

     $(vPage).addClass("virtual-page").css({
      'paddingTop' : ' 50px',
      'overflow' : 'auto'
    }); 
    
    $(vHeader).addClass("virtual-header").css({
      'paddingLeft' : '50px'});
    
 $(vPage).appendTo(megaMenu).css({
    'opacity' : '0',
    'left' : '-100%',});

 $(".has-sub").click(function(){
   var HeadingData = $(this).html();
   var subItems = $(this).find('+.sub-items').clone();

$(vHeader).html(HeadingData).prepend(closeVpage) ;
var vPageContainerData = $(vPageContainer).html(vHeader).append(subItems);

$(vPage).animate({
     'left' : '0%',
    'opacity' : '1',
}, 500).html(vPageContainer);
     $("body, .am-container").addClass("jam");  //stop body contents to scroll
  //to destroy the virtual page 
 // slide left and then remove
$(closeVpage).bind('click', function(){
     $(vPage).animate({
     'left' : '-100%',
     'opacity' : '0',
},500, function(){
     $(vPage).empty(); $(vHeader).empty();
     $("body, .am-container").removeClass("jam"); });

});
/* End Virtual Page */

// Drop Downs
$(".dropdown").click(function(){
   $(this).toggleClass("down");
   var todrop = $(this).find('+ .dropdown-items');
   var n = $(this).find('+ .dropdown-items li').length;
   var totalDrops = n*41;
$(todrop).animate({
'height' : totalDrops
}, 300);
   if( $(todrop).height() == totalDrops){
    $(todrop).animate({
      'height' : '0',
   }, 200);
}
     

}); // end (dropdown)


}); //end (has-sub click function)

// Search Icon
var sTriger = $(".search-trigger");

$(sTriger).click(function(){
    $(search_trigger).toggleClass("searchopen");
    $(sBox).toggleClass("searchNow");
    if ($(sBox).hasClass("searchNow"))
     {
      $(".logo").fadeOut(); //hide logo when search box appears
     } 
      else{ $(".logo").fadeIn(); } //show logo when search box disappeared
   
});
        });
      };
    
    })(jQuery);
