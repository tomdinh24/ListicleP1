

const displaybackground = () => {

    const background = document.getElementById("background-display");
    
    const image = document.createElement("div");
    image.className = "background-image";

    background.appendChild(image);
}

displaybackground();