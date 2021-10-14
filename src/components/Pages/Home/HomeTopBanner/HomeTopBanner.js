import React from 'react';
import "./HeaderTopBanner.css";
import TopBanner from "../../../../images/topcover.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HomeTopBanner = () => {
    const homeTopBanner = {
        width: "100%",
        height: "500px",
        backgroundImage: `url(${TopBanner})`,
        backgroundSize: "cover",
    }
    return (
        <div>
            <div className="top-banner" style={homeTopBanner}></div>
            <div className="dark-shape ">
                        <div className="content-banner-box">
                            <div className='banner-small'>
                                <small>// Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam.</small>
                            </div>
                            <h1>SOFTWARE IT </h1>
                            <h1>OUTSOURCING</h1>
                            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in aliquam et quo dolore molestias id molestiae harum dicta tempora.</small></p>
                            <button className="btn bannerBtn">
                                Learn More 
                                <ArrowForwardIosIcon fontSize="20"></ArrowForwardIosIcon>
                            </button>
                        </div>
                    </div>
            {/* <div className="container-fluide">
                <div className="row text-white">
                    <div className="top-banner" style={homeTopBanner}>
                    </div>
                    <div className="dark-shape ">
                        <div className="content-box">
                            <p className="header-top-p">// Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam.</p>
                            <h1>SOFTWARE IT </h1>
                            <h1>OUTSOURCING</h1>
                            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in aliquam et quo dolore molestias id molestiae harum dicta tempora.</small></p>
                            <button className="btn bannerBtn">Learn More</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default HomeTopBanner;