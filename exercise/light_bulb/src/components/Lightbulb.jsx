import React, {useState} from 'react';
import lightbulbOn from '../assets/images/lightbulb_on.jpg'
import lightbulbOff from '../assets/images/lightbulb_off.jpg'
import './Lightbulb.css'

function Lightbulb(){
  const [isOn, SetIsOn] = useState(false);

  const toggleLightbulb = () => {
    SetIsOn(!isOn);
  }

  return (
    <div>
      <img
      className = "light-bulb"
      src={isOn ? lightbulbOn : lightbulbOff}
      alt="Lightbulb"
      onClick={toggleLightbulb}
      />
    </div>
  )
}

export default Lightbulb
