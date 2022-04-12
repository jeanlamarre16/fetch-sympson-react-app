import React from 'react';
//import './QuoteCard.css';

const QuoteCard = ({ quote, character, image }) => {
  return (
    <figure className="QuoteCard">
      <img src={image} alt= {`{image de ${character} }`} />
      <blockquote>
        <p>{quote}</p>
      </blockquote>

      <figcaption>
        <cite>{character}</cite>
      </figcaption>
    </figure>
  );
}

export default QuoteCard;