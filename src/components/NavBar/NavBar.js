import React from "react";
import styles from "./NavBar.module.css";
import LogoutButton from "../Logout/Logout";
import Profile from "../Profile/Profile";
import LoginButton from "../Login/Login";
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className={styles.NavBar}>
      {isAuthenticated ? (
        <>
          <LogoutButton />
          <Profile />
          {/* Redirigir al usuario al Home */}
          <Link to="/home" className={styles.buttonHome}>Home</Link>
        </> 
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default NavBar;