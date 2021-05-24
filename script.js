// $(document).ready(function () {    
// $.ajax({
//     url: "https://api.vultr.com/v2/regions",
//     type: 'GET',
//     dataType: "jsonp",
//     // contentType: "application/json; charset=utf-8",
//     crossDomain: true,
//     data: {
//         "per_page" : 100,
//         "cursor" : "next"
//     }
//     }).then(function(response) {
//         console.log(response);
    

//  });
// })

// $.ajax({
//     type: 'GET',
//     url: 'https://api.vultr.com/v2/regions',
//     data: {
//         "per_page" : 100,
//         "cursor" : "next"
//     },
//     async: false,
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     dataType: 'jsonp',
//     success: function (data) {
//       console.log(data);
//     }
//   });


//Animation for footer number

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("animation");
  animateValue(obj, 0, 40000000, 1000);


  //Animation for divs on scroll
  var $animation_elements = $('.animation-element');
  var $window = $(window);
  
  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }
  
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');


//   onclick hide/show locations

$(".location-na").click(function() {
    $(".na-container").slideToggle(1000);
})

$(".location-eur").click(function() {
    $(".eur-container").toggle();
})

$(".location-asia").click(function() {
    $(".asia-container").toggle();
})

$(".location-aus").click(function() {
    $(".aus-container").toggle();
})