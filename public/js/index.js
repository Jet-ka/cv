
// let sequence=gsap.timeline()

// Get the image element
const image = document.querySelector('.hone img');

// Define the bounce animation
const bounce = gsap.timeline()
    .to(image, { y: -15, duration: 0.5, ease: "bounce.out" })
    .to(image, { y: 0, duration: 0.5, ease: "bounce.out" });

// Add mouseover and mouseout event listeners
image.addEventListener('mouseover', () => {
    bounce.play();
});

image.addEventListener('mouseout', () => {
    bounce.reverse();
});

var t=gsap.timeline();


t.fromTo (".htwo",{opacity:0,z:"0"},{opacity:1,z:"100", scale:1.5,duration:5,scrollTrigger:{trigger:".head", scrub:true  ,markers:false,start:"top top"}});  //stagger only use with span tag where every element will come one by one

t.fromTo(".about",{opacity:0},{opacity:1,scrollTrigger:{trigger:".head",scrub:true,markers:false,start:"40% top",end:"+=190"}}),

//gsap.fromTo(".skill",{opacity:0},{opacity:1,scrollTrigger:{trigger:".about",scrub:true,markers:false,start:"40% 50%",end:"+=190"}t.fromTo("#shead",{opacity:0},{opacity:1,scrollTrigger:{trigger:".about",scrub:true,markers:false,start:"30% 50%",end:"+=190"}})
t.fromTo(".left",{opacity:0,x:"-200"},{opacity:1,x:"0", scrollTrigger:{trigger:".about",scrub:true,markers:false,start:"45% 50%",end:"+=190"}}),
t.fromTo(".right",{opacity:0,x:"200"},{opacity:1,x:"0", scrollTrigger:{trigger:".about",scrub:true,markers:false,start:"45% 50%",end:"+=190"}}),
t.fromTo(".mid",{opacity:0},{opacity:1,stagger:{from:"start",amount:1}, scrollTrigger:{trigger:".about",scrub:true,markers:false,start:"40% 50%",end:"+=190"}}),

t.fromTo(".jhead",{opacity:0},{opacity:1,scrollTrigger:{trigger:".skill",scrub:true,markers:false,start:"100% 50%",end:"+=190"}}),
    
t.fromTo(".card",{opacity:0},{opacity:1,stagger:{from:"start",amount:1},  scrollTrigger:{trigger:".skill",scrub:true,markers:false,start:"120% 50%",end:"+=190"}}),

t.fromTo(".khead",{opacity:0},{opacity:1,scrollTrigger:{trigger:".project",scrub:true,markers:false,start:"40% 50%",end:"+=190"}}),
//for mobile
t.fromTo(".form",{x:"-200"},{x:"10",  scrollTrigger:{trigger:".project",scrub:true,markers:false,start:"140% 72%",end:"+=120"}}),
// gsap.fromTo(".one",{opacity:0},{opacity:1,stagger:{from:"start",amount:1},  scrollTrigger:{trigger:".project",scrub:true,markers:true,start:"140% 72%",end:"+=120"}})
// gsap.fromTo(".one",{opacity:0},{opacity:1,stagger:{from:"start",amount:1},  scrollTrigger:{trigger:".project",scrub:true,markers:false,start:"140% 72%",end:"+=184"}})
 t.fromTo(".fa",{rotateZ:"0deg",scale:0},{rotateZ:"360deg",scale:1.3 , scrollTrigger:{trigger:"run",scrub:true,markers:false,start:"72% 25%",end:"+=170"}});

//gsap.fromTo(".title",{opacity:0,scale:0},{ opacity:1,scale:1.3, scrollTrigger:{trigger:".pun",scrub:true,markers:true,start:"20% 92%",end:"+=220"}})


// 60 60 180


