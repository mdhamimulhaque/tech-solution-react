import React from 'react';
import "./FooterMenu.css";
import { Link } from 'react-router-dom';
import footerMenuData from "./FooterMenuData";

const FooterMenu = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <nav>
                        <ul className="footer-ul">
                            {
                                footerMenuData.map((item, index) => {
                                    return (
                                        <li key="index" className={item.cName}>
                                            <Link>{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default FooterMenu;