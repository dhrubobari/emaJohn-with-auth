import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { faSearch, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  const showBtns = Array.from(document.getElementsByClassName("showbtn"));
  showBtns.map((btn) => {
    btn.addEventListener("click", () => {
      console.log("click");
      document.getElementById("sidemenu").classList.toggle("show");
    });
  });

  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
      setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <>
      <section className="nav__side">
        <nav>
          <div className="brand">
            <img src={logo} alt="" />
          </div>
          <div className="searchbar">
            <input type="text" placeholder="search your product"/>
            <button>
              <FontAwesomeIcon icon={faSearch} style={{fontSize: "16px"}} />
            </button>
          </div>
          <div className="links">
            <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
              <span>5</span>
            </div>
            <div className="user" id="profile_dropdown" onClick={toggleProfileDropdown}>
            <FontAwesomeIcon icon={faUserCircle} style={{ color: "#FFF", marginTop: "25px" }} />
            </div>
          </div>
          <div className={isProfileDropdownOpen ? "profilre_dropdown toggle_profile_dropdown" : "profilre_dropdown"}>
            <ul>
              <li>
                <a href="#">{
                    user ?
                    <button type="button" class="btn btn-success" onClick={handleSignOut}>Sign Out</button>
                    :
                    <Link to="/login">Login</Link>
                }</a>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>  
              </li>
            </ul>
          </div>
        </nav> 
        <div className='header'>
            {/* <img src={logo} alt="" /> */}
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
        </div>  
      </section>
    </>
  );
};

export default Header;
