const mtn = document.querySelector(".mtn");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const tagline = document.querySelector(".tagline");

const tl = new TimelineMax();

tl.fromTo(mtn, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(
    mtn,
    1.25,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.25,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.25"
  );
