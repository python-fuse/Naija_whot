import { ABILITY, CARDLOCATION, Shape } from "./definitions";

class Player {
  id: number;
  name: string;
  hand: Card[];
  private canPlay: boolean = false;
  turn: boolean = false;

  constructor(id: number, name: string, hand: Card[]) {
    (this.id = id), (this.name = name), (this.hand = hand);
  }

  play() {}
  draw() {}
}

class Card {
  id: string;
  shape: Shape;
  value: number;
  location: CARDLOCATION = "Market";
  specialAbility: ABILITY = "NONE";

  constructor(id: string, shape: Shape, location: CARDLOCATION, value: number) {
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

class Market {
  cards: Card[] = [];
  constructor(cards: Card[]) {
    this.cards = cards;
  }
}
class Pile {
  cards: Card[] = [];
  constructor(cards: Card[]) {
    this.cards = cards;
  }
}

export { Player, Card, Market, Pile };
