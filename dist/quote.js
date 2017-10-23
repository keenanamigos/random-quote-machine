/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Quote = /** @class */ (function () {
    function Quote(args) {
        (this.quote = args.quote, this.author = args.author);
    }
    return Quote;
}());
exports.Quote = Quote;
var quotesAndAuthors = [
    createNewQuote({ quote: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown Jr." }),
    createNewQuote({ quote: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.", author: "Maya Angelou" }),
    createNewQuote({ quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean" }),
    createNewQuote({ quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }),
    createNewQuote({ quote: "We must let go of the life we have planned, so as to accept the one that is waiting for us.", author: "Joseph Campbell" }),
    createNewQuote({ quote: "Put your heart, your mind, and soul even into your smallest acts. This is the secret of success.", author: "Swami Sivananda" }),
    createNewQuote({ author: "Audrey Hepburn", quote: "Nothing is impossible, the word itself says \'i'm possible\'!" }),
    createNewQuote({ quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" }),
    createNewQuote({ quote: "A hero is someone who has given his or her life to something bigger than oneself.", author: "Joseph Campbell" }),
    createNewQuote({ author: "Maya Angelou", quote: "Try to be a rainbow in someone's cloud." }),
    createNewQuote({ quote: "In the day, do the day's work." })
];
function createNewQuote(object) {
    if (object.hasOwnProperty("quote")) {
        return new Quote(object);
    }
    else {
        throw new Error("Missing the REQUIRED property 'quote': " + object);
    }
}
exports.createNewQuote = createNewQuote;
function getRandomInteger(array) {
    var length = array.length;
    var min = 0;
    return Math.floor(Math.random() * (length - min)) + min;
}
exports.getRandomInteger = getRandomInteger;
function getRandomQuote(array) {
    var index = getRandomInteger(array);
    return array[index];
}
exports.getRandomQuote = getRandomQuote;
function setQuoteObjectHTML() {
    var quoteParagraph = document.getElementById("quote");
    var quoteAuthor = document.getElementById("author");
    var quote = getRandomQuote(quotesAndAuthors);
    quoteParagraph.innerHTML = "\"" + quote.quote + "\" ";
    if (quote.author === undefined) {
        quote.author = "Unattributed";
    }
    quoteAuthor.innerHTML = "- " + quote.author;
    setTweet(quoteParagraph.innerHTML, quoteAuthor.innerHTML);
}
exports.setQuoteObjectHTML = setQuoteObjectHTML;
function setTweet(quote, author) {
    var tweet = document.getElementById("tweetBtn");
    // Ignore TypeScript error
    tweet.href = "https://twitter.com/intent/tweet?&text=" + encodeURIComponent(quote + author);
}
exports.setTweet = setTweet;
// Set initial Quote
setQuoteObjectHTML();
var newQuoteButton = document.getElementById("newQuote");
newQuoteButton.onclick = function () {
    setQuoteObjectHTML();
};


/***/ })
/******/ ]);