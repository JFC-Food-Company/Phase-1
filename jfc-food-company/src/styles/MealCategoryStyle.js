import Styled from "styled-components";

//divs

export const MainDivWrapper = Styled.div`
display: flex;
flex-direction: column;
margin: 2%;
width: 97%;
padding: 2%;
justify-content: center;
border: .5px lightgrey solid;
border-radius: 25px;
box-shadow: 10px 10px 8px #888888;
`;

export const FlexDiv = Styled.div`
display: flex;
width: 30%;
flex-direction: column;
justify-content: center;
margin-left: 15%;
`;

export const FlexDiv2 = Styled.div`
display: flex;
width: 50%;
height: 60%;
padding: 8% 0;
flex-direction: column;
justify-content:center;
align-content:center;
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

export const Text = Styled.p`
margin: 5% 0;
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
