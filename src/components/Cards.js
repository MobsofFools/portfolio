import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import TravelExperts from '../img/TravelExperts.PNG'
import Nuggies from '../img/nuggies1.png'
import WFCalc from '../img/wfcalculator.png'
import InvigHTML from '../img/InvigulusHTML.png'

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={TravelExperts}
              text='Travel Experts Android App'
              label='Java/Android'
              path='https://github.com/MobsofFools/TravelExperts'
            />
            <CardItem
              src={WFCalc}
              text='Windows Form Calculator'
              label='C#'
              path='https://github.com/MobsofFools/WindowsFormCalculator'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Nuggies}
              text='Calculates number/boxes of nuggets you are able to buy based on location'
              label='JavaFX'
              path='https://github.com/MobsofFools/NuggetCalculator'
            />
            <CardItem
              src={InvigHTML}
              text='First Threaded Project Prototyping for Invigulus'
              label='HTML/CSS'
              path='https://github.com/MichaelGrier/invigilus_project'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;