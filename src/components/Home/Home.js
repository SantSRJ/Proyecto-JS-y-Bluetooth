import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ListaCanciones from '../ListaCanciones/ListaCanciones';
import styles from './Home.module.css';
import BluetoothButton from '../Bluetooth/Bluetooth';
import NavBar from '../NavBar/NavBar';

function Home() {
  const { isAuthenticated, logout, user } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  if (!isAuthenticated) {
    return (
      <div>
        <h2>
          No has iniciado sesión
        </h2>
        <NavBar />
      </div>
    )
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <h2 className={styles.title} >Bienvenido, {user.name}</h2>
        <button className={styles.buttonHome} onClick={() => handleLogout({ logoutParams: { returnTo: window.location.origin } })}>
          Logout
        </button>
        <button className={styles.buttonHome} onClick={() => handleLogout({ logoutParams: { returnTo: window.history.back() } })}>
          Go back
        </button>
        <BluetoothButton />
        <ListaCanciones />

      </div>
    </div>
  );
}

export default Home;