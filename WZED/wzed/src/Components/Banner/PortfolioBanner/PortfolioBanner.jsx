import React from 'react'
import PortfolioImg from '../../../Images/portfolio-banner.webp';
import './PortfolioBanner.css';

const PortfolioBanner = () => {
  return (
    <React.Fragment>
        <div className="portfolio-container">
            <h2 className='portfoliobanner-text'>PORTFOLIO</h2>
            <p className='portfoliobanner-sub-text'>Check out our recent projects !</p>
            <div className="boxes row">
              <div className="box-1">
              </div>
              <div className="box-2">
              </div>
              <div className="box-3">
              </div>
              <div className="box-4">
              </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default PortfolioBanner