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
//set project colors
/* --main-purple:#635FC7;
--main-purple-hover:#A8A4FF;
--black:#000112;
--dark-bg:#20212C;
--dark-grey: #2B2C37;
--dark-lines: #3E3F4E;
--medium-grey: #828FA3;
--lines-light: #E4EBFA;
--light-bg:#F4F7FD;
--red:#EA5555;
--red-hover:#FF9898; */

//reset
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    transition:all 0.2s;
}
body{
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    color:${SchemeColors.lightBg};
}
// headers tipografia
h1,h2,h3,h4{
    font-weight: 700;
    color:${SchemeColors.black};
    line-height:1.25;
}
 h1{
    font-size: 24px;
}
h2{
    font-size: 18px;
}
h3{
    font-size: 15px;
}
h4{
    font-size: 12px;
    letter-spacing: 2.4px;
    color: ${SchemeColors.mediumGrey}
}

 p{
    color: ${SchemeColors.darkGrey};
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

`;

export default GlobalStyle;
