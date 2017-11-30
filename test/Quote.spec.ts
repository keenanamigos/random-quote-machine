import { expect } from "chai";
import { getRandomInteger, getRandomQuote, Quote } from "../src/quote";

describe("Quote", () => {
    describe("getRandomInteger", () => {
        it("should return an integer between 0 and the length of the given array", () => {
            const arrayOfQuotes: Quote[] = [
                Quote.create({quote: "Some Quote 1", author: "Some Author 1"}),
                Quote.create({quote: "Some Quote 2", author: "Some Author 2"}),
                Quote.create({quote: "Some Quote 3", author: "Some Author 3"})
            ];

            const arrayOfIntegers = [];

            for (let i = 0; i < arrayOfQuotes.length; i++) {
                arrayOfIntegers.push(i);
            }

            expect(arrayOfIntegers).to.include(getRandomInteger(arrayOfQuotes));
        });
    });

    describe("getRandomQuote", () => {
        it("should return an instance of the Quote class based on a random array index", () => {
            const arrayOfQuotes: Quote[] = [
                Quote.create({author: "Some Author 1", quote: "Some Quote 1"}),
                Quote.create({quote: "Some Quote 2", author: "Some Author 2"}),
                Quote.create({quote: "Some Quote 3", author: "Some Author 3"})
            ];

            expect(getRandomQuote(arrayOfQuotes)).to.be.an.instanceof(Quote);
        });
    });

    describe("create", () => {
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
});