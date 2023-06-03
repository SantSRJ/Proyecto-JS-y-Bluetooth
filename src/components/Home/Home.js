import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ListaCanciones from '../ListaCanciones/ListaCanciones';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import BluetoothButton from '../Bluetooth/Bluetooth';

function Home() {
  const { isAuthenticated, logout, user } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  if (!isAuthenticated) {
    return <div>No has iniciado sesión</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <h2 className={styles.title} >Bienvenido, {user.name}</h2>
        <button className={styles.buttonHome} onClick={handleLogout}>Cerrar sesión</button>
        <Link to="/" className={styles.buttonHome}>Back</Link>
        <BluetoothButton />
        <ListaCanciones />

      </div>
    </div>
  );
}

export default Home;