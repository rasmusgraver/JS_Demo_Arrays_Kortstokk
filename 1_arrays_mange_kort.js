// Fyller på med alle kortene som finnes
let cards = []

for (let s = 0; s < 4; s++) {
    for (let i = 1; i < 14; i++) {
        cards.push(i + "_of_" + suits[s])
    }
}

// Blander kortene tilfeldig og viser i en section:
cards.sort(sammenliknKortRandom)
addSection("blue")
addCards(cards)

// Sorter kortene og viser i en section:
cards.sort(sammenliknKortEtterTallOgType)
addSection("red")
addCards(cards)
