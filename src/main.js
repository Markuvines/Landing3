import {featureActive} from './js/feature--active.js';
import {contactActive} from './js/contact--active.js';

$(document).ready(function(){
   featureActive();
   $('.contacts__body').height(($('.contacts__body').height())+60)
   contactActive();
   $('.footerList__listTitle').on('click', function(){
     // $(this).next().toggleClass('footerList__list--active')
     if (window.matchMedia("(max-width: 768px)").matches) {
      /* the viewport is at least 400 pixels wide, write code specific for that */
      $(this).next().animate({
         height: 'toggle',
      })
    }
      // $(this).next().animate({
      //    height: 'toggle',
      // })
   })
})

// if (window.matchMedia("(max-width: 768px)").matches) {
//    /* the viewport is at least 400 pixels wide, write code specific for that */
//  } else {
//    /* the viewport is less than 400 pixels wide, write code specific for that */
//  }