import React from 'react'
import HomeBanner from './HomeBanner/HomeBanner'
import AboutBanner from './AboutBanner/AboutBanner'
import PortfolioBanner from './PortfolioBanner/PortfolioBanner'
import PortfolioBottomBanner from './PortfolioBanner/PortfolioBottomBanner'
import OurClientsBanner from './OurClientsBanner/OurClientsBanner'
import OurClientsBottomBanner from './OurClientsBanner/OurClientsBottomBanner'

const Banner = () => {
  return (
    <React.Fragment>
        <HomeBanner />
        <AboutBanner />
        <PortfolioBanner />
        <PortfolioBottomBanner />
        <OurClientsBanner />
        <OurClientsBottomBanner />
    </React.Fragment>
  )
}

export default Banner