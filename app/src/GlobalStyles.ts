import { createGlobalStyle } from "styled-components";
export const SchemeColors = {
  mainPurple: "#635FC7",
  mainPurpleHover: "#A8A4FF",
  black: "#000112",
  darkBg: "#20212C",
  darkGrey: "#2B2C37",
  darkLines: " #3E3F4E",
  mediumGrey: " #828FA3",
  lightLines: "#E4EBFA",
  lightBg: "#F4F7FD",
  red: "#EA5555",
  redHover: "#FF9898",
  white: "#fff",
  mainPurpleWithTransaprency: " rgba(99, 95, 199, 0.75)",
};

const GlobalStyle = createGlobalStyle`


//reset
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    transition:all 0.2s;
}
html{
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    @media (max-width:768px){
    font-size: 12px;}
    @media (min-width:768px){
    font-size: 14px;
    }
    @media (min-width:1000px){
    font-size: 16px;
    }
}
// headers tipografia
h1,h2,h3,h4{
    font-weight: 700;
    line-height:1.25;
}
 h1{
    font-size: 2rem;
}
h2{
    font-size: 1.5rem;
}
h3{
    font-size: 1.25rem;
    
}
h4{
    font-size: 1rem;
    letter-spacing: 2.4px;
    color: ${SchemeColors.mediumGrey}
}

 p{
   
    &.large{
        font-weight: 500;
        font-size: 13px;
        line-height: 23px;
    }
    &.medium{
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
    }
}
button{
    background-color:transparent ;
    border:none;
  color:inherit;
}

`;

export default GlobalStyle;
