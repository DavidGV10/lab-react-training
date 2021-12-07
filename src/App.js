import React from 'react';
//import logo from './logo.svg';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard';
import './App.css';

//const data = require('./data/berlin.json')
const data2 = [
  {
    lastName: "Doe",
    firstName:"John",
    gender:"male",
    height:178,
    birth:"1992-07-14",
    picture:"https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName:'Delores ',
    firstName:'Obrien',
    gender:'female',
    height:172,
    birth:"1988-05-11",
    picture:"https://randomuser.me/api/portraits/women/44.jpg"
  }
]
const langGreeting =
  {
    de: "Hallo",
    fr: "Bonjour",
    es: "Hola",
    en: "Hello"
  }

const min = 1
const max = 10

const color = [
  {r: 255, g:0, b:0},
  {r:128, g:255, b:0}
]

const creditCards = [
  {
    type : "Visa",
    number:"0123456789018845",
    expirationMonth:3,
    expirationYear:2021,
    bank:"BNP",
    owner:"Maxence Bouret",
    bgColor:"#11aa99",
    color:"white" 
  },
  {
    ype:"Master Card",
    number:"0123456789010995",
    expirationMonth:3,
    expirationYear:2021,
    bank:"N26",
    owner:"Maxence Bouret",
    bgColor:"#eeeeee",
    color:"#222222" 
  },
  {
    type:"Visa",
    number:"0123456789016984",
    expirationMonth:12,
    expirationYear:2019,
    bank:"Name of the Bank",
    owner:"Firstname Lastname",
    bgColor:"#ddbb55",
    color:"white"
  }
]

function App() {
  return (
    <div className="App">
      {data2.map((el)=><IdCard data={el}/>)}
      <Greetings langGreeting={langGreeting} lang="fr">François</Greetings>
      <Random min={min} max={max}/>
      {color.map((el)=> <BoxColor color={el}/>)}
      {creditCards.map((a)=> <CreditCard creditcard={a}/>)}
    </div>
  );
}

export default App;
