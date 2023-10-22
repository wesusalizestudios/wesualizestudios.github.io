import React from 'react'
import PortfolioBottomImg from '../../../Images/portfolio-banner-2.webp';
import './PortfolioBanner.css';

const PortfolioBottomBanner = () => {
  return (
    <React.Fragment>
        <div className='bottom-banner-container'>
            <div className="row w-100" style={{backgroundColor: '#f15946', paddingLeft: '140px', paddingRight: '140px'}}>
                <img className='bottom-banner-img' src={PortfolioBottomImg} alt="Portfolio-Bottom-BannerImg" />
            </div>
        </div>
    </React.Fragment>
  )
}

export default PortfolioBottomBanner