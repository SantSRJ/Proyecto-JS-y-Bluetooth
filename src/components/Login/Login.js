import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Login.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
  <div >
  <button className={styles.buttonLogin} onClick={() => loginWithRedirect()}>Log In</button>
  </div>
  )
};

export default LoginButton;