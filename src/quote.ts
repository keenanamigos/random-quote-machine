export class Quote {
    public quote: string;
    public author: string;

    public constructor(args: {quote: string, author?: string}) {
        ({
            quote: this.quote,
            author: this.author
        } = args);
    }

    public static create(object: {quote: string, author?: string}): Quote {
        if (object.hasOwnProperty("quote")) {
            return new Quote(object);
        } else {
            throw new Error(`Missing the REQUIRED property 'quote': ${object}`);
        }
    }
}

export let quotesAndAuthors: Quote[] = [
    Quote.create({quote: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown Jr."}),
    Quote.create({quote: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.", author: "Maya Angelou"}),
    Quote.create({quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean"}),
    Quote.create({quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"}),
    Quote.create({quote: "We must let go of the life we have planned, so as to accept the one that is waiting for us.", author: "Joseph Campbell"}),
    Quote.create({quote: "Put your heart, your mind, and soul even into your smallest acts. This is the secret of success.", author: "Swami Sivananda"}),
    Quote.create({author: "Audrey Hepburn", quote: "Nothing is impossible, the word itself says \'i'm possible\'!"}),
    Quote.create({quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller"}),
    Quote.create({quote: "A hero is someone who has given his or her life to something bigger than oneself.", author: "Joseph Campbell"}),
    Quote.create({author: "Maya Angelou", quote: "Try to be a rainbow in someone's cloud."}),
    Quote.create({quote: "In the day, do the day's work."})
];

export function getRandomInteger(array: Quote[]): number {
    const length: number = array.length;
    const min = 0;

    return Math.floor(Math.random() * (length - min)) + min;
}

export function getRandomQuote(array: Quote[]): Quote {
    const index: number = getRandomInteger(array);
    return array[index];
}