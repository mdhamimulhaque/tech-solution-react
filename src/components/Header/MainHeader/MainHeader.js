import React, { useState } from 'react';
import './MainHeader.css';
import headerData from "./MainHeaderData";
import logo from "../../../images/logo.svg"
import SearchSummery from './SearchSummery/SearchSummery';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';




const MainHeader = () => {
    const [clicked,setClicked] = useState(false);
    const handleNavbar = () =>{
        setClicked(!clicked)
    }
    return (
        <>
         <div className="main-header">
           <div className="container">
               <div className="row main-header">
                   <div className="col-12 col-sm-12 col-md-3">
                       <div className="logo">
                          <img src={logo} alt="" />
                       </div>

                       <div className="nav-icon" onClick={handleNavbar}>
                           {
                               clicked ?  <ClearIcon></ClearIcon> : <MenuIcon></MenuIcon> 
                           }
                       </div>
                   </div>
                   <div className={clicked ? "col-12 col-sm-12 col-md-6 navbar-items active" : "col-12 col-sm-12 col-md-6 navbar-items "}>
                       <nav>
                           <ul>
                               {
                                   headerData.map((item ,index) =>{
                                       return(
                                           <li key="index" className={item.cName}>
                                               <Link to={item.path}>{item.name}</Link>
                                           </li>
                                       )
                                   })
                               }
                           </ul>
                       </nav>
                     </div>
                   <div className=" col-md-3">
                       <div className="search">
                         <SearchSummery></SearchSummery>
                       </div>
                   </div>
               </div>
           </div>
        </div>
        </>
    );
};

export default MainHeader;