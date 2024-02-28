// Global variabel som holder styr på hvilken section vi er i 
let currentSection = null

let cards = ["1_of_clubs", "3_of_hearts", "12_of_spades"]
// Legger til kort på starten av array:
cards.unshift("7_of_diamonds")
cards.unshift("2_of_clubs")
// Legger til kort på slutten av array:
cards.push("1_of_spades")
cards.push("13_of_diamonds")
cards.push("5_of_hearts")

// Viser kortene i en blå section:
addSection("blue")
addCards(cards)

// Sorter kortene, og legg til i rosa section:
cards.sort(sammenliknKortEtterTall)
addSection("pink")
addCards(cards)



/*
 * Sorterings-funksjoner:
 */
function sammenliknKortEtterTall(kortA, kortB) {
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
