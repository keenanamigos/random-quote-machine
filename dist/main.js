"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quote_1 = require("./quote");
var quote_2 = require("./quote");
function setQuoteObjectHTML() {
    var quoteParagraph = document.getElementById("quote");
    var quoteAuthor = document.getElementById("author");
    var quote = quote_1.getRandomQuote(quote_2.quotesAndAuthors);
    quoteParagraph.innerHTML = "\"" + quote.quote + "\" ";
    if (quote.author === undefined) {
        quote.author = "Unattributed";
    }
    quoteAuthor.innerHTML = "- " + quote.author;
    setTweet(quoteParagraph.innerHTML, quoteAuthor.innerHTML);
}
function setTweet(quote, author) {
    var tweet = document.getElementsByTagName("a")[0];
    tweet.href = "https://twitter.com/intent/tweet?&text=" + encodeURIComponent(quote + author);
}
// Set initial Quote
setQuoteObjectHTML();
var newQuoteButton = document.getElementById("newQuote");
newQuoteButton.onclick = function () {
    setQuoteObjectHTML();
};
