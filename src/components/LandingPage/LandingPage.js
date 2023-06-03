import React from 'react';
import styles from './LandingPage.module.css';
import NavBar from '../NavBar/NavBar';

const Landing = () => {

    return (
        <div className={styles.landing}>
            <NavBar />
            <h1>Bienvenido a Sharetooth!</h1>
            <h3>Para acceder al contenido debes loguearte con alguna de las opciones disponibles.</h3>
        </div>
    );
};

export default Landing;