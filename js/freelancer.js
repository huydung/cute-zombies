/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


  $(document).ready(function() {
    console.log("Attaching modal event listeners");

    // Handle modal show event to update the URL with the modal's ID
    $('.modal').on('show.bs.modal', function (event) {

      var modalId = $(this).attr('id');
      var newUrl = window.location.pathname + '#' + modalId;
      history.pushState(null, '', newUrl);
      //console.log("Modal shown: " + modalId);
    });
  
    // Handle modal hide event to remove the modal's ID from the URL
    $('.modal').on('hidden.bs.modal', function (event) {
      history.pushState(null, '', window.location.pathname);
      //console.log("Modal hidden");
    });
  
    // Check if there's a hash in the URL when the page loads, and show the relevant modal
    var hash = window.location.hash;
    if (hash) {
      $(hash).modal('show');
    }
  });
  
  


