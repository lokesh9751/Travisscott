function followcursor(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#followcursor").style.transform = (`translate(${dets.clientX}px,${dets.clientY}px)`);
    })
}

followcursor();

var rotate = 0;
var diffrot = 0;

document.querySelectorAll(".elements").forEach(function(elements){
    elements.addEventListener("mousemove",function(details){

        diffrot = details.clientX - rotate;
        rotate = details.clientX;

        let img = document.querySelector(".img");
        let imgWidth = img.offsetWidth;
        let imgHeight = img.offsetHeight;

        let diff = console.log(details.clientY - elements.getBoundingClientRect().top);

        gsap.to(elements.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff - imgHeight / 2,
            left: details.clientX - imgWidth / 2,
            rotate: gsap.utils.clamp(-20,20,diffrot * .5),
        });
    });
});

document.querySelectorAll(".elements").forEach(function(elements){
    elements.addEventListener("mouseleave",function(details){

        gsap.to(elements.querySelector("img"),{
            opacity: 0,
            ease: Power3,
        });
    });
});
