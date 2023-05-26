  var splide = new Splide( '.splide' );
  var bar    = splide.root.querySelector( '.my-carousel-progress-bar' );
  

  // Updates the bar width whenever the carousel moves:
  splide.on( 'mounted move', function () {
    var end  = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min( ( splide.index + 1 ) / end, 1 );
    bar.style.width = String( 100 * rate ) + '%';
  } );
  
  splide.mount();
  
const tl = gsap.timeline({default:{Easings:"expo.out"}})

tl.to('nav div',{clipPath:"polygon(0 0, 100% 0%, 100% 100%, 0 100%)",ease: "power4.out", duration:.6})
  .to('.sidenav-item',{x:0, opacity:1, duration:.5, stagger:{each:.1}},"-=.5")
  .to('.splide',{opacity:1,scaleX:1, duration:.4})
  .to('.project-list',{opacity:1, y:0})
  .to('#project',{})
  .to('.personal_info',{opacity: 1,y: 0, stagger:{each:.2, from: 'end'}}, "-=.5")



let flagExecutetion = false;
function open_modal(){
  tl.to('body',{overflow:"hidden", duration: .2})
  .to('.profile_modal',{opacity: 1,scaleX: 1})
  .to('.close-btn',{ y:0, opacity: 1, duration: .2})

  return flagExecutetion = true;
}

function close_modal(){
  tl.to('.close-btn',{ y:0, opacity: 0})

  .to('.profile_modal',{scaleX: 0 , opacity: 0},'-=.2')
  .to('body',{overflow:"auto"})
  return flagExecutetion = false;
}

let profile_content 

$('#profile_btn').on('click',function(){
//   $('.profile_modal').removeClass('inactive').addClass('active')
open_modal()
profile_content =  tl.to('.main-content', {opacity: 1, x: 0 , duration: .5},'+=.2')
                  .to('.sub-content',{opacity: 1 , y:0 , stagger: {each: .5 }, duration: .5})

})
$('.close-btn').on('click',function(){
  // $(this).parent().parent().removeClass('active').addClass('inactive')

  tl.to('.sub-content',{opacity: 0, y:20 , duration: .3, stagger:{ each: .2} })
  close_modal()

})
