import './App.css';
import { useState } from 'react';
import Form from './Form';
import CardList from './CardList';
import RandomActivity from './RandomActivity';
function App() {
  const [cards, setCards] = useState([])
  let addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }
  return (
    <div className='App'>
      < br />
      <RandomActivity />
      < br />
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} /> 
    </div>
  );
}

export default App;
