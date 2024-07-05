import React from "react";
import ScrollAnimation from "./components/ScrollAnimation";
import headset01 from './assets/images/Headset01.jpg';
import headset02 from './assets/images/Headset02.jpg';
import headset03 from './assets/images/Headset03.jpg';
import modem02 from './assets/images/Modem02.jpg';
import modem04 from './assets/images/Modem04.jpg';
import joystick01 from './assets/images/Joystick01.jpg';
import joystick02 from './assets/images/Joystick02.jpg';
import joystick03 from './assets/images/Joystick03.jpg';
import camera01 from './assets/images/Camera01.jpg';
import camera02 from './assets/images/Camera02.jpg';
import camera03 from './assets/images/Camera03.jpg';
import watch01 from './assets/images/Watch01.jpg';
import watch02 from './assets/images/Watch02.jpg';
import watch03 from './assets/images/Watch03.jpg';

import './assets/css/style.css'



function App() {
  return (
    <>

      <ScrollAnimation
        data={[
          { id: 1, name: "SENZER SG500 Surround Sound Pro Gaming Headset", price: 1100, image: headset02 },
          { id: 2, name: "Apple Watch Series 9 [GPS 45mm] Smartwatch", price: 1900, image: watch02 },
          { id: 4, name: "8Bitdo Pro 2 Wired Controller for Xbox, Hall Effect Joysticks", price: 1300, image: joystick03 },
          { id: 5, name: "Security Cameras Wireless Outdoor", price: 1550, image: camera03 },
          { id: 6, name: "TP-Link AC1200 WiFi Router", price: 1750, image: modem04 },
          { id: 7, name: "Razer BlackShark V2 X Gaming Headset", price: 1250, image: headset03 },
          { id: 8, name: "Gaming Headset for PC, PS4, PS5, Xbox", price: 1650, image: headset01 },
          { id: 9, name: "Kodak AZ401RD Point & Shoot Digital Camera", price: 1100, image: camera02 },
          { id: 10, name: "Hwagol Smart Watch (Answer/Make Call)", price: 1900, image: watch01 },
          { id: 11, name: "Canon EOS Rebel T7 DSLR Camera", price: 1220, image: camera01 },
          { id: 12, name: "NETGEAR Orbi WiFi 6 Cable Modem Router", price: 800, image: modem02 },
          { id: 14, name: "Puning Wired Gaming Controller, PC Controller Joystick", price: 1700, image: joystick02 },
          { id: 15, name: "Apple Watch Ultra 2 [GPS + Cellular 49mm] Smartwatch", price: 1900, image: watch03 },
          { id: 16, name: "Forty4 Wireless Gaming Controller", price: 1350, image: joystick01 },
        ]}
      />

    </>
  );
}

export default App;
