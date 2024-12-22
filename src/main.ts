import { Shape } from "./definitions";
import { Card, Market, Pile, Player } from "./entities";

class Game {
  private players: Player[];
  private cards: Card[] = [];
  private market: Market = new Market([]);
  private pile: Pile = new Pile([]);

  // Constants
  private shapes: Shape[] = [
    "Circle",
    "Triangle",
    "Cross",
    "Square",
    "Star",
    "Whot",
  ];

  private CandT = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14];

  private CandS = [1, 2, 3, 5, 7, 10, 11, 13, 14];

  private stars = [1, 2, 3, 4, 5, 7, 8];

  constructor(players: Player[]) {
    this.players = players;
  }

  generateCards() {
    for (const shape of this.shapes) {
      switch (shape) {
        case "Circle":
          for (let i = 1; i <= 14; i++) {
            if (!this.CandT.includes(i)) {
              continue;
            }
            this.cards.push(new Card(`${i}-circle`, "Circle", "Market", i));
          }
          break;
        case "Triangle":
          for (let i = 1; i <= 14; i++) {
            if (!this.CandT.includes(i)) {
              continue;
            }
            this.cards.push(new Card(`${i}-tri`, "Triangle", "Market", i));
          }
          break;
        case "Cross":
          for (let i = 1; i <= 14; i++) {
            if (!this.CandS.includes(i)) {
              continue;
            }
            this.cards.push(new Card(`${i}-cross`, "Cross", "Market", i));
          }
          break;
        case "Square":
          for (let i = 1; i <= 14; i++) {
            if (!this.CandS.includes(i)) {
              continue;
            }
            this.cards.push(new Card(`${i}-square`, "Square", "Market", i));
          }
          break;
        case "Star":
          for (let i = 1; i <= 14; i++) {
            if (!this.stars.includes(i)) {
              continue;
            }
            this.cards.push(new Card(`${i}-star`, "Star", "Market", i));
          }
          break;
        default:
          for (let i = 1; i <= 5; i++) {
            this.cards.push(new Card(`${i}-whot`, "Whot", "Market", 20));
          }
      }
    }

    console.log(this.cards.length);
  }

  giveCards() {
    var lastGiven = 0;

    for (let i = 0; i < 7; i++) {
      // GIve to player 1
      const firstGive = this.cards[lastGiven];
      this.players[0].hand.push(firstGive);
      this.cards.splice(lastGiven, 1);
      lastGiven++;

      // Give to player 2
      const secondGive = this.cards[lastGiven];
      this.players[1].hand.push(secondGive);
      this.cards.splice(lastGiven, 1);
      lastGiven++;
    }
  }

  shuffleCards(cards: Card[]) {
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

  placeCallCard() {
    const topCard = this.cards.length - 1;
    this.cards[topCard].location = "Pile";
    this.pile.cards.push(this.cards[topCard]);
    this.cards.splice(topCard, 1);
  }

  stash() {
    const marketCards = this.cards.map((card) => {
      card.location = "Market";
      return card;
    });

    this.cards = [];

    this.market.cards = [...marketCards];
  }

  gameloop() {}

  initializeGame() {
    // Generate the available cards
    this.generateCards();

    // Shuffle cards
    this.cards = this.shuffleCards(this.cards);

    // Give cards to players
    this.giveCards();

    // Place one in pile
    this.placeCallCard();

    // Stash the rest to market
    this.stash();

    // Start the game loop
    // this.gameloop()
  }
}

const players = [new Player(1, "umar", []), new Player(2, "zo", [])];
const game = new Game(players);

game.initializeGame();
