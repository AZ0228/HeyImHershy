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