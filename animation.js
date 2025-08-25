function heroanimation(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y:'-15',
        opacity: 0,
        duration: 1.5,
        delay: 0.7,
        ease: Expo.easeInOut
    })
    
    tl.from(".boundaryelem", {
        y: '15',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        stagger: .2
    })

    tl.from(".boundary2", {
        y: '15',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut,
        stagger: .2,
        delay: -2
    })
}

heroanimation();