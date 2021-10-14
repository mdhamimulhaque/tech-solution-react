import React from 'react';
import "./Footer.css";
import logo from '../../images/logo-2.png';
import footerData from "./footerData"
import FooterMenu from './footerMenu/FooterMenu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <footer>
            <div className="container footer">
                <div className="row ">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                {/*================ footer-info ====================*/}
                <div className="row">
                    {
                        footerData.map((data, index) => {
                            return (
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center mt-5 mb-5" key={index}>
                                    <div>{data.icon}</div>
                                    <div className="py-3">{data.text}</div>
                                    <div className={data.cName}>{data.title}</div>
                                </div>
                            )
                        })
                    }
                </div>

                {/*================ footer-menu ====================*/}
                <div className="row text-center ">
                    
                    <FooterMenu></FooterMenu>
                </div>
                {/*================ footer-icon ====================*/}
                <div className="row ">
                <small className="text-primary text-center pb-4">Copyright &copy;Md Hamimul Haque</small>
                    <div className="footer-icon text-center">
                        <FacebookIcon fontSize="18" className="icon"></FacebookIcon>
                        <TwitterIcon fontSize="18" className="icon"></TwitterIcon>
                        <LinkedInIcon fontSize="18" className="icon"></LinkedInIcon>
                        <InstagramIcon fontSize="18" className="icon"></InstagramIcon>
                        <YouTubeIcon fontSize="18" className="icon"></YouTubeIcon>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;