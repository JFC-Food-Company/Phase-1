import React, { useState } from "react";
import "../App.css";
import ketoChoice from "../menus/ketoChoice";
import ketoChoiceBreakfast from "../menus/ketoChoiceBreakfast";
import MenuMaker from "./MenuMaker";


const KetoMenu = () => {
    const [breakfastMenuItems] = useState(ketoChoiceBreakfast)
    const [lunchMenuItems] = useState(ketoChoice)
  return (
    <div>
      <h1>Keto Menu Page</h1>
      <h2>Breakfast</h2>
      <div className='menu-flex'>{breakfastMenuItems.map(item => (<MenuMaker item={item}/>))}</div>
      <h2>Lunch/Dinner</h2>
      <div className='menu-flex'>{lunchMenuItems.map(item => (<MenuMaker item={item}/>))}</div>
    </div>
  );
}

export default KetoMenu;
