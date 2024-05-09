import React, { useState, useEffect } from 'react';
import "./Header.css";
import NetflixLogo from "../../assets/images/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import { logout } from '../../FireBase/FireBase';

const Header = () => {
    return (
      <div className="header_outer_container">
        <div className='header_container'>
          <div className="header_left">
            <ul>
              <li><img className='netflix-img' src={NetflixLogo} alt="NetflixLogo" /></li>
              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li> <SearchIcon /> </li>
              <li><NotificationsNoneIcon/></li>
              <li><AccountBoxIcon/></li>
              <li><ArrowDropDownIcon/>
                {/* <p onClick={()=>{logout()}}>Sign out</p> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  

export default Header;
