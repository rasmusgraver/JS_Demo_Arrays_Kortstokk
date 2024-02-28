// Global variabel som holder styr på hvilken section vi er i 
let currentSection = null


/*
 * Funkskjoner med å legge til sections og cards:
 */
function addSection(borderColor) {
    const section = document.createElement("section")
    section.style.borderColor = borderColor
    document.body.appendChild(section)
    currentSection = section
}

// Legg til kortene i "gjeldende" section
// input parameter: cards - array med navn på kortene
function addCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        cardName = cards[i]
        const img = document.createElement("img")
        img.src = "kortstokk/" + cardName + ".png"
        currentSection.appendChild(img)
    }

}
