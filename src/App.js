import './App.css';

import { useState } from "react";

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Small progress is still progress. Keep going.", author: "Unknown" },
  { text: "Hard work beats talent when talent doesn’t work hard.", author: "Unknown" },
  { text: "Discipline is choosing between what you want now and what you want most.", author: "Unknown" },
  { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { text: "If everything seems under control, you’re not going fast enough.", author: "Mario Andretti" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Why is Monday so far from Friday, but Friday so close to Monday?", author: "Unknown" },
  { text: "I love deadlines. I like the whooshing sound they make as they fly by.", author: "Douglas Adams" },
  { text: "Teamwork makes the dream work, except in meetings.", author: "Unknown" },
  { text: "Emails are like boomerangs. If you throw one out, expect it back.", author: "Unknown" },
  { text: "Meetings: where minutes are kept and hours are lost.", author: "Unknown" },
  { text: "We all have the same 24 hours. Some just spend them in meetings.", author: "Unknown" },
  { text: "Behind every successful team, there’s an empty coffee pot.", author: "Unknown" },
  { text: "Office air conditioning: Either Antarctica or the Sahara—no in-between.", author: "Unknown" },
  { text: "Nothing ruins a Friday more than realizing it’s only Thursday.", author: "Unknown" },
  { text: "Your network is your net worth.", author: "Porter Gale" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "If you fail to plan, you are planning to fail.", author: "Benjamin Franklin" },
  { text: "Done is better than perfect.", author: "Sheryl Sandberg" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" }
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh", 
      backgroundColor: "#f4f4f4", 
      padding: "20px", 
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ 
        backgroundColor: "#fff", 
        borderRadius: "16px", 
        padding: "30px", 
        width: "100%", 
        maxWidth: "600px", 
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)", 
        textAlign: "center"
      }}>
        <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>{quote.text}</p>
        <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "#666" }}>— {quote.author}</p>
      </div>
      <button 
        onClick={getNewQuote}
        style={{
          marginTop: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer"
        }}
      >
        Give me wisdom!
      </button>
    </div>
  );
}

export default App;
