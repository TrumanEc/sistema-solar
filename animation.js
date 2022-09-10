gsap.to(".planeta", 20, {
  rotation: 360,
  ease: Linear.easeNone,
  repeat: -1,
});

gsap.from(".preguntas", {
  duration: 2,
  y: -100,
  opacity: 0,
});

gsap.from(".t1", {
  duration: 2,
  ease: "back.inOut(1.7)",
  x: -200,
  opacity: 0,
});
// gsap.registerEffect({
//   name: "fade", //defaults get applied to the "config" object passed to the effect below
//   effect: (targets, config) => {
//     return TweenMax.to(targets, 60, {
//       rotation: 360,
//       ease: Linear.easeNone,
//       repeat: -1,
//     });
//   },
// });

// const planeta = document.querySelector(".planeta");
// document.querySelectorAll(".planeta").forEach(function (box) {
//   box.addEventListener("mouseenter", function () {
//     gsap.effects.fade(this);
//   });
// });
