import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className={styles.Profile}>
        <div className={styles.userProfile}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div className={styles.imgContainer}>
          <img src={user.picture} alt={user.name} className={styles.imgProfile}/>
        </div>
      </div>
    )
  );
};

export default Profile;
