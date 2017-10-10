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
function getRandomQuote(array) {
    var index = getRandomInteger(array);
    return array[index];
}
exports.getRandomQuote = getRandomQuote;
// On button click, pass in quotesAndAuthors to getRandomQuote() function
function setQuoteObjectHTML() {
    var quoteParagraph = document.getElementById("quote");
    var quoteAuthor = document.getElementById("author");
    var quote = getRandomQuote(quotesAndAuthors);
    quoteParagraph.innerHTML = "\"" + quote.quote + "\" ";
    quoteAuthor.innerHTML = "- " + quote.author;
}
exports.setQuoteObjectHTML = setQuoteObjectHTML;
// Set initial Quote
setQuoteObjectHTML();
var newQuoteButton = document.getElementById("newQuote");
newQuoteButton.onclick = function () {
    setQuoteObjectHTML();
};


/***/ })
/******/ ]);