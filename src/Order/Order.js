import React from 'react'
import './Order.scss';
import musicicon from './assets/icon-music.svg';


function Order() {
  const paragraph = `You can now listen to millions of
  songs, audiobooks, and podcasts on
  any device anywhere you like!`;
  const foottext = 'Cancel Order';
  const cost =59.99;
  return (
    <>
      <div className='card'>
        <div className='hero'></div>
        <p className='title'>Order Summary</p>
        <p className='subtitle'>{paragraph}</p>
        <div className='plan'>
          <img src={musicicon} alt='icon music' />
          <p><span className='period'>Annual Plan</span><br/>
          <span className='cost'>$ {cost}/year</span></p>
          <a href="francistocino.com">Change</a>
        </div>
        <button className='button'>Proceed to Payment</button>
        <a className='foot' href="francistocino.com">{foottext}</a>
      </div>
    </>
  )
}

export default Order