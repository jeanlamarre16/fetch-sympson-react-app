import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import QuoteCard from './components/QuoteCard';



function App() {
  let quotation={};

  const getQuotation = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then (reponse => {
        setQuote(reponse.data[0]);
        console.log('ma reponse = ' + reponse.data[0]);
        return reponse.data[0]
      })
  };

  quotation = getQuotation;
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