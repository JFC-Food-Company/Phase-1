import Styled from "styled-components";

//divs

export const MainDivWrapper = Styled.div`
display: flex;
flex-direction: column;
margin: 2%;
width: 97%;
padding: 2%;
justify-content: center;
border: 1px red solid;
border-radius: 25px;
box-shadow: 10px 10px 8px #888888;
`;

export const FlexDiv = Styled.div`
display: flex;
width: 30%;
flex-direction: column;
justify-content: flex-end;
margin-left: 15%;


`;

export const FlexDiv2 = Styled.div`
display: flex;
width: 50%;
flex-direction: column;
justify-content: flex-end;
align-items: center;
`;

export const RowWrapper = Styled.div`
display: flex;
flex-direction: row;
margin: 2% 0;
width:100%;
justify-content: center;
`;

export const Title = Styled.div`
display:flex;
width: 100%;
margin: 2% 0;
font-family: 'Hind Siliguri', sans-serif;
justify-content:center;
`;

export const Image = Styled.img`
display:flex;
width: 55%;
border-radius: 15px 50px 30px;
box-shadow: 10px 10px 8px #888888;
`;

//text

export const Header3 = Styled.h3`
font-family: 'Hind Siliguri', sans-serif;
`;
