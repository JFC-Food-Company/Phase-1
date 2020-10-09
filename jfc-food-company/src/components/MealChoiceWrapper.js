import React from "react";
import MealCategory from "./MealChoiceCategory";

function MealWrapper({ data, title }) {
  return (
    <div>
      <h1>{title}</h1>
      {data.map((category) => (
        <MealCategory category={category} />
      ))}
    </div>
  );
}

export default MealWrapper;
