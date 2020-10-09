import React, { useState } from "react";
import chefsChoice from "../menus/chefsChoice";
import chefsChoiceBreakfast from "../menus/chefsChoiceBreakfast";
import MenuMaker from "./MenuMaker";

function ChefsChoiceMenu() {
    const [breakfastMenuItems] = useState(chefsChoiceBreakfast)
    const [lunchMenuItems] = useState(chefsChoice)
  return (
    <div>
      <h1>Chef's Choice Page</h1>
      <h2>Breakfast</h2>
      <div className='menu-flex'>{breakfastMenuItems.map(item => (<MenuMaker item={item}/>))}</div>
      <h2>Lunch/Dinner</h2>
      <div className='menu-flex'>{lunchMenuItems.map(item => (<MenuMaker item={item}/>))}</div>
      <div className='menu-flex'>{lunchMenuItems.map(item => (<MenuMaker item={item}/>))}</div>
    </div>
  );
}

export default ChefsChoiceMenu;


