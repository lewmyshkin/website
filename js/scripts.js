//twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
//twitter

//google map
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.509067, lng: 13.423294},
    zoom: 8
  });
}
//google map

$(document).ready(function(){
  //smooth scrolling
  var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });
  //smooth scrolling

  //stellar
  $.stellar();
  //stellar

  //jquery for tooltips
  $(function () {
    $('#tooltip').tooltip();
  });
  //jquery for tooltips

  //text area
  $("#message-box").on("keyup", function() {
    var charCount = $("#message-box").val().length;
    if(charCount>50) {
      $("#charcount").html(charCount).css("color", "red");
    } else {
      $("#charcount").html(charCount).css("color", "black");
    };
  });
  //text area

  //button modification
  $("button").on("click", function() {
    var comment = $("#message-box").val();
    if(comment == "") {
      $("#message-box").css("border", "3px solid red");
    } else {
      $("#visible-comment").html(comment).css("color", "white");
      $("#message-box").hide();
    };
    return false;
  });
  //button modification

  //work section
  for (var i = 0; i < works.length; ++i) {
    $("#work").append("\
      <div class='row'>\
        <div class='col-xs-12 col-sm-6 col-md-6'>\
          <a href='" + works[i].url + "' target='_blank' class='work-img'>\
            <img class='img-responsive' src='" + works[i].pic + "'>\
            <span class='info'><p class='proj-title'>Title:</p>" + works[i].title + "</span>\
          </a>\
        </div>\
        <div class='col-xs-12 col-sm-6 col-md-6'>\
          <h3>" + works[i].title + "</h3>\
          <p>" + works[i].description + "</p>\
          <a href='" + works[i].url + "' target='_blank'>\
            <button type='button' class='btn btn-default'>See here &raquo;</button>\
          </a>\
        </div>\
      </div>\
    ");
    /*Title hover effect
    var images = $("#work .col-md-3 img");
    if (i%2 === 0) {
      $(images[i]).css("border", "1px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "1px solid salmon");
    };
    $(".work-img").mouseenter(function(){
      $(".info", this).show();
    }).mouseleave(function(){
      $(".info", this).hide();
    });
    */
  };
  //work section ends here

}); //document ready ends here
