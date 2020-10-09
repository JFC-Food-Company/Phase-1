import React from "react";

function MealCategory({ category }) {
  return (
    <div>
      <h2>{category.title}</h2>
      <h3>{category.name}</h3>
      <h4>{category.description}</h4>
      {category.items.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default MealCategory;
