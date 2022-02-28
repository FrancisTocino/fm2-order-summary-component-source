import React from 'react'
import './Order.scss';
import musicicon from './assets/icon-music.svg';


function Order() {
  const paragraph = `You can now listen to millions of
  songs, audiobooks, and podcasts on
  any device anywhere you like!`;
  const cost= 
  `Anual Plan
  $59.99/year`;
  const foottext = `Cancel Order`;

  return (
    <>
      <div div className='card'>
        <div className='hero'></div>
        <p className='title'>Order Summary</p>
        <p className='subtitle'>{paragraph}</p>
        <div className='plan'>
          <img src={musicicon} alt='icon music' />
          <p><span className='period'>Annual Plan</span><br/>
          <span className='cost'>$59.99/year</span></p>
          <a href="">Change</a>
        </div>
        <button className='button'>Proceed to Payment</button>
        <a className='foot' href="">{foottext}</a>
      </div>
    </>
  )
}

export default Order