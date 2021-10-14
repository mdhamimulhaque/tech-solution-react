import React from 'react';
import './TechnologyIndex.css';
import TecnologyIndexData from './TecnologyIndexData';

const TecnologyIndex = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-2"></div>
                <div className="col-12 col-sm-12 col-md-8 text-center">
                    <small className="mb-3" style={{color:"#43BAFF"}}>// Tecnology Index</small>
                    <h2>We Deliver Solution with the Goal of Trusting Relationships</h2>
                </div>
                <div className="col-12 col-sm-12 col-md-2"></div>
                {
                    TecnologyIndexData.map((data,index)=>{
                        return(
                            <div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-4 text-center" key={index}>
                                <div className="indexBox">
                                    <div className="indexIcon">
                                       {data.icon}
                                    </div>
                                    <small>{data.name}</small>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TecnologyIndex;