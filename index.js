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

function polaroidStart(){
    let p1 = id("polaroid1");
    let p2 = id("polaroid2");
    let p3 = id("polaroid3");
    let p4 = id("polaroid4");
    p1.classList.remove("p1before")
    p2.classList.remove("p2before")
    p3.classList.remove("p3before")
    p4.classList.remove("p4before")

}

document.addEventListener('DOMContentLoaded', ()=>{
    polaroidStart();
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