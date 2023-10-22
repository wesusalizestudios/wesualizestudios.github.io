import React from 'react'
import PortfolioBottomImg from '../../../Images/portfolio-banner-2.webp';
import './PortfolioBanner.css';

const PortfolioBottomBanner = () => {
  return (
    <React.Fragment>
        <div className='bottom-banner-container d-flex justify-content-center'>
            <div className="bottom-banner row">
                <img className='bottom-banner-img' src={PortfolioBottomImg} alt="Portfolio-Bottom-BannerImg" />
            </div>
        </div>
    </React.Fragment>
  )
}

export default PortfolioBottomBanner