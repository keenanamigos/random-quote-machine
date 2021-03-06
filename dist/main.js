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
var quote_1 = __webpack_require__(1);
function setQuoteObjectHTML() {
    var quoteParagraph = document.getElementById("quote");
    var quoteAuthor = document.getElementById("author");
    var quote = quote_1.getRandomQuote(quote_1.quotesAndAuthors);
    quoteParagraph.innerHTML = "\"" + quote.quote + "\" ";
    if (quote.author === undefined) {
        quote.author = "Unattributed";
    }
    quoteAuthor.innerHTML = "- " + quote.author;
    setTweet(quoteParagraph.innerHTML, quoteAuthor.innerHTML);
}
function setTweet(quote, author) {
    var tweet = document.getElementsByTagName("a")[0];
    var encodedURI = encodeURIComponent(quote + author);
    tweet.href = "https://twitter.com/intent/tweet?&text=" + encodedURI;
}
// Set initial Quote
setQuoteObjectHTML();
var newQuoteButton = document.getElementById("newQuote");
newQuoteButton.onclick = function () {
    setQuoteObjectHTML();
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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
exports.getRandomInteger = getRandomInteger;
function getRandomQuote(array) {
    var index = getRandomInteger(array);
    return array[index];
}
exports.getRandomQuote = getRandomQuote;


/***/ })
/******/ ]);