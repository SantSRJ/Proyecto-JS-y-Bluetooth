import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Logout.module.css";

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();

  const handleLogout = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    } else {
      window.history.back();
    }
  };

  return (
    <button className={styles.logoutbutton} onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;