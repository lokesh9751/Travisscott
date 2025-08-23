function followcursor(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#followcursor").style.transform = (`translate(${dets.clientX}px,${dets.clientY}px)`);
    })
}

followcursor(); 