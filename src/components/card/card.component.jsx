import React from 'react'

import './card.styles.css'

export const Card = ({ monster }) => (
  <div className="card-container">
    <img alt="monster" src={`https://flathash.com/${monster.id}`} width="180" height="180" />
    <h1>{monster.name}</h1>
    <p>{monster.email}</p>
  </div>
);
