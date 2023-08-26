Draggable.create(".pin", {
    type: "x,y", // Allows dragging by both x and y axis
    edgeResistance: 1, // Makes the icon harder to drag outside its container
    bounds: "body", // Keeps the icon inside the body of the document
    onRelease: function() { // Event that gets triggered when the dragging stops
        gsap.to(this.target, { // 'this.target' refers to the current dragged icon
            x: 0, // Return to original x position
            y: 0, // Return to original y position
            ease: "elastic.out(1, 0.5)" // Gives the bounce effect
        });
    }
});

function pinStart(){
    let pins = qsa('.pin');
    for(let i=0;i<pins.length;i++){
        pins[i].classList.remove('pin-before')
    }
}

function polaroidStart1(){
    let polaroids = qsa('.polaroid');
    for(let i=0;i<polaroids.length;i++){
        polaroids[i].classList.remove('pbefore');
    }

}

function headerStart(){
    let header = qs('.header');
    header.classList.remove('header-before')
}


document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
        polaroidStart1();
        headerStart();
        setTimeout(() => {
            pinStart();
        }, 800);
    }, 200);
})

function id(name){
    return document.getElementById(name);
}

function qs(name){
    return document.querySelector(name);
}

function qsa(name){
    return document.querySelectorAll(name);
}