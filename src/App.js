import React, { useState } from "react";
import "./App.css";

// Array of quotes and authors
const quotes = [
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" }
];

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0); // State for the current quote index

  // Change the quote when the button is clicked
  const changeQuote = () => {
    const nextQuoteIndex = (quoteIndex + 1) % quotes.length; // Loop through quotes
    setQuoteIndex(nextQuoteIndex);
  };

  return (
    <div className="App dark">
      <div className="quote-container">
        <p className="quote-text">"{quotes[quoteIndex].text}"</p>
        <p className="author-text">- {quotes[quoteIndex].author}</p>
        <button onClick={changeQuote} className="get-quote-btn">Get Wisdom</button>
      </div>
    </div>
  );
}

export default App;