function init(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector(".main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()

var t1=gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      start:"top -50%",
      end:"top -60%",
      scrub:3,

  }
})
t1.from(".page2 h2",{
  opacity:0,
})
var t2=gsap.timeline({
  scrollTrigger:{
      trigger:".page1",
      scroller:".main",
      start:"top 80%",
      end:"top -100%",
      scrub:3,
  }
})
t2.from(".box1:nth-child(2)",{
  x:-10000,
  opacity:0,
})
var t3=gsap.timeline({
  scrollTrigger:{
      trigger:".page1",
      scroller:".main",
      start:"top -110%",
      end:"top -90%",
      scrub:3,
  }
})
t3.from(".box1:nth-child(3)",{
  x:-10000,
  opacity:0,
})
var t4=gsap.timeline({
  scrollTrigger:{
      trigger:".page1",
      scroller:".main",
      start:"top -130%",
      end:"top -90%",
      scrub:3,
  }
})
t4.from(".box1:nth-child(4)",{
  x:-10000,
  opacity:0,
})
var t5=gsap.timeline({
  scrollTrigger:{
      trigger:".page1",
      scroller:".main",
      start:"top -180%",
      end:"top -90%",
      scrub:3,
  }
})
t5.from(".box1:nth-child(5)",{
  x:-10000,
  opacity:0,
})
var t6=gsap.timeline({
  scrollTrigger:{
      trigger:".page1",
      scroller:".main",
      start:"top -220%",
      end:"top -90%",
      scrub:3,
  }
})
t6.from(".box1:nth-child(6)",{
  x:-10000,
  opacity:0,
})



