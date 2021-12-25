const quotes = [
    {
    quote: "Adversity frequently give one on opportunity to discover one's abilities.",
    author: " -Horace-",
},
{
    quote: "Keep your friends close, but your enemies closer.",
    author: " -God Father-",
},
{
    quote: "To conquer fear is the beginning of wisdom",
    author: " -Bertrand Russell-",
},
{
    quote: "Dream as if you’ll live forever, Live as if you’ll die today.",
    author: " -James Dean-",
},
{
    quote: "Life is a like Baccarat.",
    author: " -Casino-",
},
{
    quote: "For what it’s worth, It’s never too late.",
    author: " -Benjamin Button-",
},
{
    quote: "There’s always a choice, just never had the guts to make right one.",
    author: " -Sing2-",
},
{
    quote: "As soon as you trust yourself, you will know how to live",
    author: " -Goethe-",
},
{
    quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    author: " -Herry Potter-",
},
{
    quote: "Why do we fall? So that we can learn to pick ourselves up.",
    author: " -Batman Begins-",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote. quote;
author.innerText = todaysQuote. author;