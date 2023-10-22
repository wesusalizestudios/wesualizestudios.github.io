import React from 'react'
import AboutBannerImg from '../../../Images/about-banner.webp';
import './AboutBanner.css';

const AboutBanner = () => {
  return (
    <React.Fragment>
        <div className='about-container'>
            {/* <img className='w-100' src={AboutBannerImg} alt="AboutBanner" /> */}
            <h2 className='aboutbanner-text'>ABOUT US</h2>
        </div>
    </React.Fragment>
  )
}

export default AboutBanner