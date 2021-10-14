import React from 'react';
import "./HomeSecondBanner.css";
import banner2 from "../../../../images/banner2.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const HomeSecondBanner = () => {
    const SecondBannerHome = {
        width: "100%",
        height: "350px",
        backgroundImage: `url(${banner2})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return (
        <div className="container-fluide my-5">
            <div className="row">
                <div className="col-md-12 " >
                    <div className="banner2nd" style={SecondBannerHome}></div>
                    <div className="secondBanner-bg-box text-center" >
                          <div className="banner2-small">
                          <small>// We Carry More Than Just Good Coding Skills</small>
                          </div>
                          <h1>Let's Build Your Website!</h1>
                          <button className="btn">
                              Contact Us 
                              <ArrowForwardIosIcon fontSize="20"></ArrowForwardIosIcon>
                          </button>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSecondBanner;