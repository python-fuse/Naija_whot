"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("./entities");
const shapes = [
    "Circle",
    "Triangle",
    "Cross",
    "Square",
    "Star",
    "Whot",
];
const cards = [];
const CandT = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14];
const CandS = [1, 2, 3, 5, 7, 10, 11, 13, 14];
const stars = [1, 2, 3, 4, 5, 7, 8];
for (const shape of shapes) {
    switch (shape) {
        case "Circle":
            for (let i = 1; i <= 14; i++) {
                if (!CandT.includes(i)) {
                    continue;
                }
                cards.push(new entities_1.Card(`${i}-circle`, "Circle", "market", i));
            }
            break;
        case "Triangle":
            for (let i = 1; i <= 14; i++) {
                if (!CandT.includes(i)) {
                    continue;
                }
                cards.push(new entities_1.Card(`${i}-tri`, "Triangle", "market", i));
            }
            break;
        case "Cross":
            for (let i = 1; i <= 14; i++) {
                if (!CandS.includes(i)) {
                    continue;
                }
                cards.push(new entities_1.Card(`${i}-cross`, "Cross", "market", i));
            }
            break;
        case "Square":
            for (let i = 1; i <= 14; i++) {
                if (!CandS.includes(i)) {
                    continue;
                }
                cards.push(new entities_1.Card(`${i}-square`, "Square", "market", i));
            }
            break;
        case "Star":
            for (let i = 1; i <= 14; i++) {
                if (!stars.includes(i)) {
                    continue;
                }
                cards.push(new entities_1.Card(`${i}-star`, "Star", "market", i));
            }
            break;
        default:
            for (let i = 1; i <= 5; i++) {
                cards.push(new entities_1.Card(`${i}-whot`, "Whot", "market", 20));
            }
    }
}
const players = [new entities_1.Player(1, "Umar", []), new entities_1.Player(2, "AI", [])];
var lastGiven = 0;
for (let i = 0; i < 7; i++) {
    players[0].hand.push(cards[lastGiven]);
    cards.splice(lastGiven, 1);
    lastGiven++;
    players[1].hand.push(cards[lastGiven]);
    cards.splice(lastGiven, 1);
    lastGiven++;
}
console.log("Umar's hand: ", players[0].hand);
console.log("AI's hand: ", players[1].hand);
console.log("Remaining cards:", cards.length);
// console.log(players[0].hand === players[1].hand);
// function shuffleCards(cards: Card[]) {
//   // start at full length and keep removing shuffled cards
//   for (let i = cards.length; i > 0; i--) {
//     // get a random index between the current and the next
//     const randomIndex = Math.floor(Math.random() * i + 1);
//     // swap the two cards
//     [cards[i], [cards[randomIndex]]] = [cards[randomIndex], [cards[i]]];
//   }
//   //   return the shuffled cards
//   return cards;
// }
// shuffleCards(cards);
//# sourceMappingURL=test.js.map