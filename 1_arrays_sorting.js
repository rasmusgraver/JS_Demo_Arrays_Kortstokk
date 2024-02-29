/*
 * Sorterings-funksjoner:
 */

// Globalt tilgjengelig
const suits = ["hearts", "spades", "diamonds", "clubs"]

// Skal sammenligne strenger som ser slik ut:
//    "1_of_clubs"
//    "12_of_spades"
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

// Skal sammenligne strenger som ser slik ut:
//    "1_of_clubs"
//    "12_of_spades"
function sammenliknKortEtterTallOgType(kortA, kortB) {
    const suiteA = getSuiteValue(kortA)
    const suiteB = getSuiteValue(kortB)
    return suiteA * 100 - suiteB * 100 + sammenliknKortEtterTall(kortA, kortB)
}

function getSuiteValue(string) {
    const suit = string.split("_")[2]
    return suits.indexOf(suit)
}

// Returnerer tilfeldig tall mellom -0.5 og +0.5
// dette gjør at kortene blir helt tilfeldig blandet
function sammenliknKortRandom(kortA, kortB) {
    return Math.random() - 0.5
}
