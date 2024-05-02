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
    i = 0
    for (const cardName of cards) {
        const img = document.createElement("img")
        img.src = "kortstokk/" + cardName + ".png"
        currentSection.appendChild(img)
        i++
        if (i%13 == 0) { // Legg til linjeskift for hvert 13. element
            const br = document.createElement("br")
            currentSection.appendChild(br)
        }
    }
}
