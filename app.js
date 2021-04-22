const divm = document.querySelector(".div-m");
const mobileNav = document.querySelector(".mobile-nav");

const tl = new TimelineLite({ paused:true , reversed:true });
tl.to ("img" , 0 , {display:"auto", ease:Power2.easeOut})
.fromTo ('.mobile-nav' , 0.7 ,{
    opacity:0 , 
    y: 40 , 
    position:"absolute",
    height:"0px" , 
    ease: Power2.easeOut
}, {
    opacity:1 , 
    y: 0,
    height: "550px",
    position:"static", 

});

function toggleTween (tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}

divm.addEventListener ('click' , () => {
toggleTween(tl);
});


