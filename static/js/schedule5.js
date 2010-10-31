jQuery(function() {
  window.scrollTo(0, 1);

  jQuery('nav a').click(function(event) {
    event.preventDefault();
    var offset = jQuery(this.hash).offset().top;
    jQuery(document.body).animate({scrollTop: offset},
      { duration: 400, easing: 'swing'}
    );
  });

  jQuery('.more-info-button.on').click(function(event) {
    jQuery('#more-info-container')
      .empty()
      .append(jQuery('<div class="close-me" onclick=""></div>'))
      .append(jQuery(this).siblings('.more-info').html())
      .addClass('active');
  });

  jQuery('#more-info-container .close-me').live('click', function(event) {
    var moreInfoButton = jQuery('#more-info-container');
    moreInfoButton.addClass('closing');
    moreInfoButton.one('webkitTransitionEnd', function(event) {
      moreInfoButton.removeClass('active closing');
    }, false);
  });
});