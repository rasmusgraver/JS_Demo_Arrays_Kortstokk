// Global variabel som holder styr på hvilken section vi er i 
let currentSection = null

let cards = ["1_of_clubs", "3_of_hearts", "12_of_spades"]
cards.unshift("7_of_diamonds")
cards.unshift("2_of_clubs")
cards.unshift("1_of_spades")
cards.unshift("13_of_diamonds")

addSection("blue")
addCards(cards)

function sammenliknKort(kortA, kortB) {
    tallA = parseInt(kortA) // Henter ut tallverdien av kort a
    tallB = parseInt(kortB) // Henter ut tallverdien av kort b
    // Vil at Ess teller som høyeste kort:
    if (tallA == 1) {
        tallA = 14
    }
    if (tallB == 1) {
        tallB = 14
    }
    return tallA - tallB
}


cards.sort(sammenliknKort)

addSection("pink")
addCards(cards)

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


