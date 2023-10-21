import React from 'react'
import './OurClientsBanner.css';
import OurClientsBottomBannerImg from '../../../Images/ourclients-bottom.webp';

const OurClientsBottomBanner = () => {
  return (
    <React.Fragment>
        <div className="ourclients-bottom-banner-container">
            <img className='w-100' src={OurClientsBottomBannerImg} alt="OurClientsBottomBannerImg" />
        </div>
    </React.Fragment>
  )
}

export default OurClientsBottomBanner