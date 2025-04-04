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
  // State for managing dark theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle dark theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Get a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className={`App ${isDarkTheme ? "dark" : ""}`}>
      <header className="App-header">
        <h1>Wisdom of the Day</h1>
        <p className="quote-text">"{randomQuote.text}"</p>
        <p className="author">- {randomQuote.author}</p>
        <button onClick={toggleTheme}>
          Switch to {isDarkTheme ? "Light" : "Dark"} Theme
        </button>
      </header>
    </div>
  );
}

export default App;
