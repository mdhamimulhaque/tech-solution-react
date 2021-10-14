import React from 'react';
import CardWhyChooseUs from './CardWhyChooseUs/CardWhyChooseUs';
import WhyChooseUsData from "./WhyChooseUsData"

const WhyChooseUs = () => {
    return (
        <section className="whyChoseUs py-4" style={{background:"#43BAFF"}}>
            <div className="container mt-5 mb-5" >
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3"></div>
                    <div className="col-md-6 text-center text-white">
                    <small>// Why Choose Us</small>
                    <h2>Design the Concept of Your Business Idea Now</h2>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3"></div>
                </div>
                {/*==================== card ===================*/}
            <div className="row mt-3">
                {
                  WhyChooseUsData.map((CardData,index)=>{
                      return(
                          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3 mt-4">
                              <CardWhyChooseUs CardData={CardData}></CardWhyChooseUs>
                          </div>
                      )
                  })  
                }
                
            </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;