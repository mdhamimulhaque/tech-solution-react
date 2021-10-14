import React from 'react';
import "./TopHeader.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const TopHeader = () => {
  return (
    <>
    <div className="main-box">
      <div className="container ">
        <div className="row header-top">
          <div className="col-md-6">
            <div className="top-icon">
                 <FacebookIcon fontSize="18" className="icon"></FacebookIcon>
                 <TwitterIcon fontSize="18" className="icon"></TwitterIcon>
                 <LinkedInIcon fontSize="18" className="icon"></LinkedInIcon>
                 <InstagramIcon fontSize="18" className="icon"></InstagramIcon>
                 <YouTubeIcon fontSize="18" className="icon"></YouTubeIcon>
                 
            </div>
          </div>
          <div className="col-md-6">
            <div className="top-contact">
                 <PhoneIcon fontSize="18"></PhoneIcon>
                 <span className="top-header-contact">+324 34543 343</span>
                 <EmailIcon fontSize="18"></EmailIcon>
                 <span className="top-header-contact">abc@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TopHeader;