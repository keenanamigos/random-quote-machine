const expect = require("chai").expect;
const quoteFilePath = "../dist/quote";

// Sanity check
describe("Mocha", () => {
    it("should run our test using npm", () => {
        expect(true).to.be.ok;
    });
});

describe("getRandomInteger", () => {
    const getRandomInteger = require(quoteFilePath).getRandomInteger;
    const Quote = require(quoteFilePath).Quote;

    it("should return an integer between 0 and the length of the given array", () => {
        const arrayOfQuotes = [
            new Quote({quote: "Some Quote 1", author: "Some Author 1"}),
            new Quote({quote: "Some Quote 2", author: "Some Author 2"}),
            new Quote({quote: "Some Quote 3", author: "Some Author 3"})
        ];

        let arrayOfIntegers = [];

        for (let i = 0; i < arrayOfQuotes.length; i++) {
            arrayOfIntegers.push(i);
        }

        expect(arrayOfIntegers).to.include(getRandomInteger(arrayOfQuotes));
    });
});

describe("getRandomQuote", () => {
    const getRandomQuote = require(quoteFilePath).getRandomQuote;
    const getRandomInteger = require(quoteFilePath).getRandomInteger;
    const Quote = require(quoteFilePath).Quote;

    it("should return an instance of the Quote class based on a random array index", () => {
        const arrayOfQuotes = [
            new Quote({author: "Some Author 1", quote: "Some Quote 1"}),
            new Quote({quote: "Some Quote 2", author: "Some Author 2"}),
            new Quote({quote: "Some Quote 3", author: "Some Author 3"})
        ];

        expect(getRandomQuote(arrayOfQuotes)).to.be.an.instanceof(Quote);
    });
});