import React from 'react';
import { useState } from 'react';
import cancion1 from '../../assets/canciones/REM  - Shiny Happy People.mp3';
import cancion2 from '../../assets/canciones/Robert Plant - 29 Palms.mp3';
import cancion3 from '../../assets/canciones/Roy Orbison - You Got It.mp3';
import styles from './ListaCanciones.module.css'

function ListaCanciones() {
  const [canciones, setCanciones] = useState([
    { archivo: cancion1 },
    { archivo: cancion2 },
    { archivo: cancion3 }
  ]);

  return (
    <div className={styles.songsListContainer}>
      <div className={styles.songsListContent}>
        <h2>Lista de canciones</h2>
        <ul>
          {canciones.map((cancion, index) => (
            <li key={index}>
              {cancion.titulo}
              <audio controls>
                <source src={cancion.archivo} type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
              </audio>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListaCanciones;