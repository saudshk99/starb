import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect,useState } from "react";
import Cookies from "js-cookie";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";
import AuthContext from '../../context/AuthContext';


function CheckLoggedIn(){


  let token=sessionStorage.getItem('Token')

  if (!token || token===null){
    return false
  }else{
    return true
  }

  
  
}



const Navbar = () => {
  
  let navigate=useNavigate()
  
  const {user}=useContext(AuthContext)

  
  
 useEffect(() => {
  if (!user||user===null){
    navigate('/login');
  }


 },[])


  
  const { dispatch } = useContext(DarkModeContext);


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">99</div>
          </div>
          <div className="item">
            <AccountCircleIcon className="icon"/>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
