import React from 'react';
import HomeClintData from './HomeClintData';
import "./HomeClint.css"


const HomeClint = () => {
    return (
        <>
          <div className="container" >
              <div className="row py-5">
                  {
                      HomeClintData.map((clint,index)=>{
                          return(
                            <div key={index} className="col-6 col-sm-6 col-md-2 my-2">
                               <div className={clint.cName}>
                                 <img style={{width:"105px"}} src={clint.image} alt="" />
                               </div>
                            </div>
                          )
                      })
                  }
              </div>
          </div>  
        </>
    );
};

export default HomeClint;