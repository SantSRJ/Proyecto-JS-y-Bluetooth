import React from "react"
import './App.css';
import Switch from "./components/Switch/Switch";
import { BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <main>
        <Switch />
      </main>
    </BrowserRouter>
  );
}

export default App;
