import React from 'react';
import "./SearchSummery.css";
import SearchIcon from '@mui/icons-material/Search';
import BorderAllIcon from '@mui/icons-material/BorderAll';

const SearchSummery = () => {
    return (
        <div>
            <SearchIcon className="search-icon"></SearchIcon>
            <BorderAllIcon></BorderAllIcon>
        </div>
    );
};

export default SearchSummery;