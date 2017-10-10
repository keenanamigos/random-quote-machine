"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quote = /** @class */ (function () {
    function Quote(quote, author) {
        this.quote = quote;
        this.author = author;
    }
    return Quote;
}());
exports.Quote = Quote;
var quotesAndAuthors = [
    new Quote("The best preparation for tomorrow is doing your best today.", "H. Jackson Brown Jr."),
    new Quote("My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.", "Maya Angelou"),
    new Quote("I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", "Jimmy Dean"),
    new Quote("Believe you can and you're halfway there.", "Theodore Roosevelt"),
    new Quote("We must let go of the life we have planned, so as to accept the one that is waiting for us.", "Joseph Campbell"),
    new Quote("Put your heart, your mind, and soul even into your smallest acts. This is the secret of success.", "Swami Sivananda"),
    new Quote("Nothing is impossible, the word itself says \'i'm possible\'!", "Audrey Hepburn"),
    new Quote("The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Helen Keller"),
    new Quote("A hero is someone who has given his or her life to something bigger than oneself.", "Joseph Campbell"),
    new Quote("Try to be a rainbow in someone's cloud.", "Maya Angelou")
];
function getRandomInteger(array) {
    var length = array.length;
    var min = 0;
    return Math.floor(Math.random() * (length - min)) + min;
}
exports.getRandomInteger = getRandomInteger;
