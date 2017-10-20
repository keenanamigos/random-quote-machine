export class Quote {
    public quote: string;
    public author: string;

    public constructor(args: {quote: string, author?: string}) {
        ({
            quote: this.quote,
            author: this.author
        } = args);
    }
 }

const quotesAndAuthors = [
    
    new Quote({quote: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown Jr."}),
    new Quote({quote: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.", author: "Maya Angelou"}),
    new Quote({quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean"}),
    new Quote({quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"}),
    new Quote({quote: "We must let go of the life we have planned, so as to accept the one that is waiting for us.", author: "Joseph Campbell"}),
    new Quote({quote: "Put your heart, your mind, and soul even into your smallest acts. This is the secret of success.", author: "Swami Sivananda"}),
    new Quote({author: "Audrey Hepburn", quote: "Nothing is impossible, the word itself says \'i'm possible\'!"}),
    new Quote({quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller"}),
    new Quote({quote: "A hero is someone who has given his or her life to something bigger than oneself.", author: "Joseph Campbell"}),
    new Quote({author: "Maya Angelou", quote: "Try to be a rainbow in someone's cloud."}),
    new Quote({quote: "In the day, do the day's work."})
];

export function getRandomInteger(array: Array<Quote>): number {
    const length = array.length;
    const min = 0;

    return Math.floor(Math.random() * (length - min)) + min;
}

export function getRandomQuote(array: Array<Quote>): Quote {
    const index = getRandomInteger(array);
    return array[index];
}

export function setQuoteObjectHTML(): void {
    let quoteParagraph = document.getElementById("quote");
    let quoteAuthor = document.getElementById("author");

    const quote = getRandomQuote(quotesAndAuthors);
    
    quoteParagraph.innerHTML = `"${quote.quote}" `;

    if (quote.author === undefined) {
        quote.author = "Unattributed";
    }
    
    quoteAuthor.innerHTML = `- ${quote.author}`;
}

// Set initial Quote
setQuoteObjectHTML();

const newQuoteButton = document.getElementById("newQuote");
newQuoteButton.onclick = () => {
    setQuoteObjectHTML();
}