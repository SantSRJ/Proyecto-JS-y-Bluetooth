import React from "react";
import styles from './Bluetooth.module.css';
import { BsBluetooth } from "react-icons/bs";

const BluetoothButton = () => {
  const connectToDevice = async () => {
    try {
        navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
        .then(device => {
          // Human-readable name of the device.
          console.log(device.name);
        
          // Attempts to connect to remote GATT Server.
          return device.gatt.connect();
        })
        .then(server => { /* … */ })
    } catch (error) {
      console.error("Error al conectar con el dispositivo Bluetooth:", error);
    }
  };

  return (
    <button 
        className={styles.bluebutton} 
        onClick={connectToDevice}>
        <span className={styles.icon}>
            <BsBluetooth />
        </span>
    </button>
  );
};

export default BluetoothButton;