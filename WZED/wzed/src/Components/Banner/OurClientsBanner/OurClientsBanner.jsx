import React from 'react'
import OurClientsImg from '../../../Images/portfolio-banner.webp';
import './OurClientsBanner.css';

const OurClientsBanner = () => {
  return (
    <React.Fragment>
        <div className="ourclients-container">
            <img className="ourclients-img w-100" src={OurClientsImg} alt="OurClientsBanner" />
            <h2 className='ourclientsbanner-text'>OUR CLIENTS</h2>
        </div>
    </React.Fragment>
  )
}

export default OurClientsBanner