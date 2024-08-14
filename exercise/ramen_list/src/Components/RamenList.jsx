import React, {useState} from 'react'
import './RamenList.css'

const ramenTypes = [
  "Shoyu Ramen (Soy Sauce)",
  "Miso Ramen (Fermented Soybean Paste)",
  "Shio Ramen (Salt)",
  "Tonkotsu Ramen (Pork Bone Broth)",
  "Tsukemen (Dipping Ramen)",
  "Kitakata Ramen",
  "Hakodate Ramen",
  "Wakayama Ramen"
];

function RamenList() {
  return (
    <ul>
      {ramenTypes.map((ramen, index) => (
        <li key={index}>{ramen}</li>
      ))}
    </ul>
  )
}

export default RamenList;
