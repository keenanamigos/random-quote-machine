"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quote = /** @class */ (function () {
    function Quote(args) {
        (this.quote = args.quote, this.author = args.author);
    }
    Quote.create = function (object) {
        if (object.hasOwnProperty("quote")) {
            return new Quote(object);
        }
        else {
            throw new Error("Missing the REQUIRED property 'quote': " + object);
        }
    };
    return Quote;
}());
exports.Quote = Quote;
exports.quotesAndAuthors = [
    Quote.create({ quote: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown Jr." }),
    Quote.create({ quote: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.", author: "Maya Angelou" }),
    Quote.create({ quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean" }),
    Quote.create({ quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }),
    Quote.create({ quote: "We must let go of the life we have planned, so as to accept the one that is waiting for us.", author: "Joseph Campbell" }),
    Quote.create({ quote: "Put your heart, your mind, and soul even into your smallest acts. This is the secret of success.", author: "Swami Sivananda" }),
    Quote.create({ author: "Audrey Hepburn", quote: "Nothing is impossible, the word itself says \'i'm possible\'!" }),
    Quote.create({ quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" }),
    Quote.create({ quote: "A hero is someone who has given his or her life to something bigger than oneself.", author: "Joseph Campbell" }),
    Quote.create({ author: "Maya Angelou", quote: "Try to be a rainbow in someone's cloud." }),
    Quote.create({ quote: "In the day, do the day's work." })
];
function getRandomInteger(array) {
    var length = array.length;
    var min = 0;
    return Math.floor(Math.random() * (length - min)) + min;
}
function getRandomQuote(array) {
    var index = getRandomInteger(array);
    return array[index];
}
exports.getRandomQuote = getRandomQuote;
