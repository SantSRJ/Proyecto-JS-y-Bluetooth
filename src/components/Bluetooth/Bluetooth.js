import React from "react";
import styles from './Bluetooth.module.css';
import { BsBluetooth } from "react-icons/bs";

const BluetoothButton = () => {
  const connectToDevice = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: ['battery_service'] }]
      });

      console.log(device.name);

      const server = await device.gatt.connect();

      // Realiza acciones adicionales con el servidor GATT

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