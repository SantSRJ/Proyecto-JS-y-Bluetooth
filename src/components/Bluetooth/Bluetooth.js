import React from "react";
import styles from './Bluetooth.module.css';
import { BsBluetooth } from "react-icons/bs";

const BluetoothButton = () => {
    const connectToDevice = async () => {
        try {
            const device = await navigator.bluetooth.requestDevice({
                filters: [
                    { services: ['battery_service'] },
                    { services: ['headphones_service_uuid'] }
                ]
            });
        console.log(device.name);

        const server = await device.gatt.connect();

        // Obtener el servicio deseado por su UUID
        const service = await server.getPrimaryService('headphones_service_uuid');

        // Obtener la característica deseada por su UUID
        const characteristic = await service.getCharacteristic('headphones_characteristic_uuid');

        // Leer el valor de la característica
        const value = await characteristic.readValue();

        // Convertir el valor en una cadena
        const valueString = new TextDecoder().decode(value);

        console.log(valueString);

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