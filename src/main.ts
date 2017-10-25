import { Quote } from "./quote";
import { getRandomQuote } from "./quote";
import { quotesAndAuthors } from "./quote";

function setQuoteObjectHTML(): void {
    let quoteParagraph: HTMLElement = document.getElementById("quote");
    let quoteAuthor: HTMLElement = document.getElementById("author");

    const quote: Quote = getRandomQuote(quotesAndAuthors);
    
    quoteParagraph.innerHTML = `"${quote.quote}" `;

    if (quote.author === undefined) {
        quote.author = "Unattributed";
    }
    
    quoteAuthor.innerHTML = `- ${quote.author}`;
    setTweet(quoteParagraph.innerHTML, quoteAuthor.innerHTML);
}

function setTweet(quote: string, author: string): void {
    let tweet: HTMLAnchorElement = document.getElementsByTagName("a")[0];
    tweet.href=`https://twitter.com/intent/tweet?&text=${encodeURIComponent(quote + author)}`;
}

// Set initial Quote
setQuoteObjectHTML();

const newQuoteButton: HTMLElement = document.getElementById("newQuote");
newQuoteButton.onclick = () => {
    setQuoteObjectHTML();
}