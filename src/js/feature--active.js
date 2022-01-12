export const featureActive = () => {
  $('.feature').hover(function(){
    $(this).toggleClass('feature--active')
  })
}