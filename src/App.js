import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import QuoteCard from './components/QuoteCard';

const quotation = {
  quote: "I'm sleeping in the bath tub.", 
  character: "Marge Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
}

function App() {

  const getQuotation = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then (reponse => {
        setQuote(reponse.data[0]);
      })
  };

  const [quote, setQuote] = useState(quotation);

  return (
    <div className="App">
      <h1>Quotation</h1>
      <QuoteCard {...quote} />
      <button onClick={getQuotation} > Get quotation </button>
    </div>
  );
}

export default App;