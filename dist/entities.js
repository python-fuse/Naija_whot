"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pile = exports.Market = exports.Card = exports.Player = void 0;
class Player {
    constructor(id, name, hand) {
        this.canPlay = false;
        this.turn = false;
        (this.id = id), (this.name = name), (this.hand = hand);
    }
    play() { }
    draw() { }
}
exports.Player = Player;
class Card {
    constructor(id, shape, location, value) {
        this.specialAbility = "NONE";
        (this.id = id),
            (this.shape = shape),
            (this.location = location),
            (this.value = value),
            (this.specialAbility =
                this.value == 1
                    ? "HOLD_ON"
                    : this.value == 2
                        ? "PICK_TWO"
                        : this.value == 14
                            ? "GEN_MARKET"
                            : this.value == 20
                                ? "WHOT"
                                : this.value == 8
                                    ? "SUSPEND"
                                    : "NONE");
    }
}
exports.Card = Card;
class Market {
    constructor() {
        this.cards = [];
    }
}
exports.Market = Market;
class Pile {
    constructor() {
        this.cards = [];
    }
}
exports.Pile = Pile;
//# sourceMappingURL=entities.js.map