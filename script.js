for (let index = 0; index < 9; index++) {
    addLightBulb();    
}

function addLightBulb() {
const bulbContainer = document.getElementById("bulb_section")

const bulbDiv = document.createElement("Div")
bulbDiv.setAttribute("class", "lightbulb_container")
bulbDiv.innerHTML = '<span class= "material-symbols-outlined lightbulb">lightbulb_circle</span>'
bulbContainer.appendChild(bulbDiv)
} 