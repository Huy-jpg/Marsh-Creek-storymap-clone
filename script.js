gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({defaults:{duration: .5, opacity: 0}})

tl.from('.big-txt', {y: 100});
tl.from('.description', {y: 100}, '-=.3');
tl.from('.credit', {y: 100}, '-=.3');

gsap.from('.location', {
  scrollTrigger:{
    trigger: '.location',
    start: '-300px bottom'
  },
  yPercent: 100,
  opacity: 0, 
  duration: .8,
});

gsap.from('.overall', {
  scrollTrigger:{
    trigger: '.overall',
    start: '-300px bottom',
  },
  yPercent: 100,
  opacity: 0, 
  duration: .8,
});

gsap.from('.contribute-info', {
  scrollTrigger:{
    trigger: '.contribute-info',
    start: '100px bottom',
  },
  yPercent: 100,
  opacity: 0
});

gsap.from('.water-flow-info', {
  scrollTrigger:{
    trigger: '.water-flow-info',
    start: 'center bottom',
    
  },
  yPercent: 100,
  opacity: 0
});

gsap.from('.water-image', {
  scrollTrigger:{
    trigger: '.water-image',
    start: '-300px bottom',
  },
  yPercent: 100,
  opacity: 0,
  duration: .8
});

gsap.from('.info', {
  scrollTrigger:{
    trigger: '.info',
    start: '-100px bottom',
  },
  yPercent: 100,
  opacity: 0,
  duration: .8
});

gsap.from('.cycle-info', {
  scrollTrigger:{
    trigger: '.cycle-info',
    start: 'top bottom',
  },
  yPercent: 100,
  opacity: 0,
  duration: .8
});

gsap.from('.cycle', {
  scrollTrigger:{
    trigger: '.cycle',
    start: '-50px bottom',
  },
  yPercent: 100,
  opacity: 0,
  duration: .8
});

gsap.from('.non-point-container', {
  scrollTrigger:{
    trigger: '.non-point-container',
    start: '-300px bottom',
  },
  yPercent: 100,
  opacity: 0,
  duration: .8
});

gsap.from('.non-point-info', {
  scrollTrigger:{
    trigger: '.non-point-info',
    start: 'top bottom',
  },
  yPercent: 100,
  opacity: 0,
  duration: .8
});

gsap.from('.point-source-container', {
  scrollTrigger:{
    trigger: '.point-source-container',
    start: '-450px bottom',
  },
  yPercent: 100,
  opacity: 0,
  duration: .8
});

gsap.from('.point-source-info', {
  scrollTrigger:{
    trigger: '.point-source-info',
    start: 'top bottom',
  },
  yPercent: 100,
  opacity: 0,
  duration: .8
});

gsap.from('.sediment-container', {
  scrollTrigger:{
    trigger: '.sediment-container',
    start: '-200px bottom',
  },
  yPercent: 100,
  opacity: 0,
  duration: .8
});

gsap.from('.sediment-info', {
  scrollTrigger:{
    trigger: '.sediment-info',
    start: 'top bottom',
  },
  yPercent: 100,
  opacity: 0,
  duration: .8
});

gsap.from('.physical-model-container', {
  scrollTrigger:{
    trigger: '.physical-model-container',
    start: '-280px bottom',
  },
  yPercent: 100,
  opacity: 0,
  duration: .8
});

gsap.from('.physical-model-info', {
  scrollTrigger:{
    trigger: '.physical-model-info',
    start: 'top bottom',
  },
  yPercent: 100,
  opacity: 0,
  duration: .8
});