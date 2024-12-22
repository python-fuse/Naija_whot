"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("./entities");
class Game {
    constructor(players, market, pile, cards) {
        // Constants
        this.shapes = [
            "Circle",
            "Triangle",
            "Cross",
            "Square",
            "Star",
            "Whot",
        ];
        this.CandT = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14];
        this.CandS = [1, 2, 3, 5, 7, 10, 11, 13, 14];
        this.stars = [1, 2, 3, 4, 5, 7, 8];
        this.players = players;
        this.cards = cards;
        this.market = market;
        this.pile = pile;
    }
    generateCards() {
        for (const shape of this.shapes) {
            switch (shape) {
                case "Circle":
                    for (let i = 1; i <= 14; i++) {
                        if (!this.CandT.includes(i)) {
                            continue;
                        }
                        this.cards.push(new entities_1.Card(`${i}-circle`, "Circle", "market", i));
                    }
                    break;
                case "Triangle":
                    for (let i = 1; i <= 14; i++) {
                        if (!this.CandT.includes(i)) {
                            continue;
                        }
                        this.cards.push(new entities_1.Card(`${i}-tri`, "Triangle", "market", i));
                    }
                    break;
                case "Cross":
                    for (let i = 1; i <= 14; i++) {
                        if (!this.CandS.includes(i)) {
                            continue;
                        }
                        this.cards.push(new entities_1.Card(`${i}-cross`, "Cross", "market", i));
                    }
                    break;
                case "Square":
                    for (let i = 1; i <= 14; i++) {
                        if (!this.CandS.includes(i)) {
                            continue;
                        }
                        this.cards.push(new entities_1.Card(`${i}-square`, "Square", "market", i));
                    }
                    break;
                case "Star":
                    for (let i = 1; i <= 14; i++) {
                        if (!this.stars.includes(i)) {
                            continue;
                        }
                        this.cards.push(new entities_1.Card(`${i}-star`, "Star", "market", i));
                    }
                    break;
                default:
                    for (let i = 1; i <= 5; i++) {
                        this.cards.push(new entities_1.Card(`${i}-whot`, "Whot", "market", 20));
                    }
            }
        }
    }
    giveCards() {
        var lastGiven = 0;
        for (let i = 0; i < 7; i++) {
            this.players[0].hand.push(this.cards[lastGiven]);
            this.cards.splice(lastGiven, 1);
            lastGiven++;
            this.players[1].hand.push(this.cards[lastGiven]);
            this.cards.splice(lastGiven, 1);
            lastGiven++;
        }
    }
    shuffleCards(cards) {
        // start at full length and keep removing shuffled cards
        for (let i = cards.length; i > 0; i--) {
            // get a random index between the current and the next
            const randomIndex = Math.floor(Math.random() * i + 1);
            // swap the two cards
            [cards[i], [cards[randomIndex]]] = [cards[randomIndex], [cards[i]]];
        }
        //   return the shuffled cards
        return cards;
    }
    initializeGame() {
        // Generate the available cards
        this.generateCards();
        // Shuffle cards
        this.shuffleCards;
        // Give cards to players
        this.giveCards();
        // Place one in pile
        // Stash the rest to market
        // Wait for players to play
    }
}
//# sourceMappingURL=main.js.map