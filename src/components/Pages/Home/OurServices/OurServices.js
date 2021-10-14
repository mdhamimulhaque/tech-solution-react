import React from 'react';
import OurServiceData from "./OurServiceData";
const OurServices = () => {
    return (

        <div className="container mt-5 mb-5">
            <div className="row">
                {
                    OurServiceData.map((data, index) => {
                        return (
                            <div className="col-12 colsm-12 col-md-6 col-lg-4 ">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <div className="our-service-icon text-center mt-4" style={{color:'#43BAFF'}}>
                                            {data.icon}
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h6 className="card-title">{data.title}</h6>
                                            <small className="card-text">{data.description}</small>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default OurServices;