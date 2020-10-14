import React from "react";
import MealCategory from "./MealChoiceCategory";
import { Title } from "../styles/MealWrapperStyle";

function MealWrapper({ data, title }) {
  return (
    <>
      <Title>
        <h1>{title}</h1>
      </Title>

      {data.map((category) => (
        <MealCategory category={category} />
      ))}
    </>
  );
}

export default MealWrapper;
