$( document ).ready(function() {

  // make sure the browser supports onhashchange
  if ("onhashchange" in window) {
    // on first load, and on each hash change, run the check
    updateClassesByHash(location.hash);
    window.onhashchange = locationHashChanged;
  } else {
    // I do not have support for IE old in this,
    // so I've kind of got nothing here. Welp.
  }

  // every time the hash changes, check the classes
  function locationHashChanged() {
    // console.log(newHash);
    updateClassesByHash(location.hash);
  }

  // check that 
  function updateClassesByHash(newHash) {
    // check and remove old active classes
    var classes = 'menu-item-divided pure-menu-selected',
        $menu = $('#menu');
    $menu.fin('ul li').removeClass(classes);

    // try to match all known 
    if (newHash === '') {
      $menu.find('#nav-item-home').addClass(classes);
    } else if (newHash === '#course-description') {
      $menu.find('#nav-item-description').addClass(classes);
    } else if (newHash === '#work') {
      $menu.find('#nav-item-work').addClass(classes);
    } else if (newHash === '#schedule') {
      $menu.find('#nav-item-schedule').addClass(classes);
    }

  }


});