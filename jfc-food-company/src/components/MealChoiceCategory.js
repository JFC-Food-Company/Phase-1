import React from "react";
import {
  MainDivWrapper,
  RowWrapper,
  Title,
  Image,
  FlexDiv,
  FlexDiv2,
  Header3,
  Text,
} from "../styles/MealCategoryStyle";

function MealCategory({ category }) {
  return (
    <MainDivWrapper>
      <Title>
        <Header3>{category.name}</Header3>
      </Title>
      <RowWrapper>
        <FlexDiv>
          <h4>{category.description}</h4>
          {category.items.map((item) => (
            <p>{item}</p>
          ))}
          <p>{category.cookingOptions}</p>
        </FlexDiv>
        <FlexDiv2>
          <Image src={category.image} />
          <Text>{category.imageTitle}</Text>
        </FlexDiv2>
      </RowWrapper>
    </MainDivWrapper>
  );
}

export default MealCategory;
