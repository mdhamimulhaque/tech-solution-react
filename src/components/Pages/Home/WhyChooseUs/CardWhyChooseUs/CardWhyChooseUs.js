import React from 'react';
import "./CardWhyChooseUs.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const CardWhyChooseUs = ({ CardData }) => {

    return (
            <div className="card whyChoose" >
                <div className="card-body">
                    <h5 className="card-title">{CardData.title}</h5>
                    <p className="card-text">{CardData.description}</p>
                    <Link> <small >{CardData.btn} <ArrowForwardIosIcon fontSize='10'></ArrowForwardIosIcon></small>
                    </Link>
                </div>
            </div>
    );
};

export default CardWhyChooseUs;