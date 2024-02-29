// Start-array:
let cards = ["1_of_clubs", "3_of_hearts", "12_of_spades"]

// Legger til kort på starten av array:
cards.unshift("7_of_diamonds")
cards.unshift("2_of_clubs")
// Legger til kort på slutten av array:
cards.push("1_of_spades")
cards.push("13_of_diamonds")
cards.push("5_of_hearts")

// Fjern et kort fra starten:
cards.shift()
// Fjern et kort fra slutten:
cards.pop()

// Viser kortene i en blå section:
addSection("blue")
addCards(cards)

// Sorter kortene, og legg til i rosa section:
cards.sort(sammenliknKortEtterTall)
addSection("pink")
addCards(cards)
