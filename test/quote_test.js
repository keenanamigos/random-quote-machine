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
            Quote.create({quote: "Some Quote 1", author: "Some Author 1"}),
            Quote.create({quote: "Some Quote 2", author: "Some Author 2"}),
            Quote.create({quote: "Some Quote 3", author: "Some Author 3"})
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
            Quote.create({author: "Some Author 1", quote: "Some Quote 1"}),
            Quote.create({quote: "Some Quote 2", author: "Some Author 2"}),
            Quote.create({quote: "Some Quote 3", author: "Some Author 3"})
        ];

        expect(getRandomQuote(arrayOfQuotes)).to.be.an.instanceof(Quote);
    });
});

describe("create", () => {
    const Quote = require(quoteFilePath).Quote;

    it("should return an instance of the Quote class", () => {
        const object = {
            author: "Some person",
            quote: "Some profound quote"
        };

        expect(Quote.create(object)).to.be.an.instanceof(Quote);
    });

    it("should throw an error if the given object does not contain the quote property", () => {
        const object = {
            author: "Some person",
        };

        expect(Quote.create.bind(Quote.create, object)).to.throw(Error, "Missing the REQUIRED property 'quote': " + object);
    });
});