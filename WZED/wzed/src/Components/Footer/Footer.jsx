import React from 'react'
import './Footer.css';
import FooterImg from '../../Images/footer.webp';

const Footer = () => {
  return (
    <React.Fragment>
        <div className="footer-container">
            <img className='w-100' src={FooterImg} alt="FooterImg" />
            <p className='footer-text'>WESUALIZE STUDIOS LLP 2023 <br />VO 56, KAKKANAD, KOCHI</p>
        </div>
    </React.Fragment>
  )
}

export default Footer