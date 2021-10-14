import React from 'react';
import "./AboutCompany.css";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import VerifiedIcon from '@mui/icons-material/Verified';
import image2 from '../../../../images/2.jpg';


const AboutCompany = () => {
    return (
        <section>
            <div className="container mb-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <small style={{color:"#43BAFF"}}>// About Company</small>
                        <h2>Your Partner for Software Innovation</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eos, eveniet dolorem modi architecto aliquam illo exercitationem facere officiis vitae saepe, tempora rem numquam porro, deserunt animi dignissimos reprehenderit molestias?</p>
                    
                    <div className="about-company-icon">
                        <div className="icon-1 my-3">
                           <VerifiedIcon sx={{ fontSize: 35}} className="about-Company-icon"></VerifiedIcon>
                           <h6 className="mt-4">Experience</h6>
                           <small>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="icon-2 my-3">
                           <ManageAccountsIcon sx={{ fontSize: 35 }} className="about-Company-icon"></ManageAccountsIcon>
                           <h6 className="mt-4">Quick Support</h6>
                           <small>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</small>
                        </div>
                    </div>
                </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 m-0 p-0">
                        <div className="about-company-img">
                            <img src={image2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;