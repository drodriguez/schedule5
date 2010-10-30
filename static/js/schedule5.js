jQuery(function() {
  window.scrollTo(0, 1);
  jQuery('nav a').click(function(event) {
    event.preventDefault();
    var offset = jQuery(this.hash).offset().top;
    jQuery(document.body).animate({scrollTop: offset},
      { duration: 400, easing: 'swing'}
    );
  });
});