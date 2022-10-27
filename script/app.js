let tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
  })
  tl.set('#Shadow', {
    transformOrigin: '50% 100%',
  })
  .fromTo('#Robot',{
    y: 2.5,
  },{
    y: -2.5,
  })
  .to('#Shadow',{
    scale: 0.75,
  },
    '<',
  )

  
//Play/Pause Button
const playPause = () => {
    //pauzeer het gsap element als event listener wordt aangeroepen
    document.querySelector('.js-pausebtn').addEventListener('click', () => {
        tl.pause();
    });

    //start het gsap element als event listener wordt aangeroepen
    document.querySelector('.js-playbtn').addEventListener('click', () => {
        tl.resume();
    });
}

// Met .timescale() kan je de speed beïnvloeden. timescale(2) 
//is bijvoorbeeld dubbel zo snel of timescale(0.5) is 2 keer zo traag.

//animation speed
const robotHoverButtons = () =>{

    const btnFast = document.querySelector('.js-fast');
    btnFast.onclick = () => tl.timeScale(2)

    const btnNormal = document.querySelector('.js-normal');
    btnNormal.onclick = () => tl.timeScale(1)
  

    const btnSlow = document.querySelector('.js-slow');
    btnSlow.onclick = () => tl.timeScale(0.5)

}


document.addEventListener("DOMContentLoaded", () =>{
   robotHoverButtons();
   playPause();
   
})






  