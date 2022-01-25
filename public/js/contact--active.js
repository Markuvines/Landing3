export const contactActive = () => {
  $('.contact').hover(function(){
    $(this).toggleClass('contact--active')
  })
}