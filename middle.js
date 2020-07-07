TweenLite.defaultEase = Linear.easeNone;
var controllerr = new ScrollMagic.Controller();
$(".section").each(function(i) {
  var target = $(this).find(".box");
  var tl = new TimelineMax();
  
  tl.from(target, 1, { opacity:0 });
  tl.to(target, 1, { opacity:0 }, 0.75);
  
  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.2,
    duration: '150%'
  })
    .setPin(this)
    .setTween(tl)
    .addTo(controllerr);
});