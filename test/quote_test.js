const expect = require("chai").expect;

// Sanity check
describe("Mocha", () => {
    it("should run our test using npm", () => {
        expect(true).to.be.ok;
    });
});

describe("getRandomInteger", () => {
    const getRandomInteger = require("../dist/quote").getRandomInteger;

    it("should return an integer between 0 and the length of the given array", () => {
        const arrayOfQuotes = [
            {
                quote: "Some Quote 1",
                author: "Some Author 1"
            },
            {
                quote: "Some Quote 2",
                author: "Some Author 2"
            },
            {
                quote: "Some Quote 3",
                author: "Some Author 3"
            }
        ];

        let arrayOfIntegers = [];

        for (let i = 0; i < arrayOfQuotes.length; i++) {
            arrayOfIntegers.push(i);
        }

        expect(arrayOfIntegers).to.include(getRandomInteger(arrayOfQuotes));
    });
});