import style from "styled-components";
import { device } from "../mediaQuery";

export const Container = style.div`
 height:100px;
scroll:hidden;
padding-left:90px;

 @media ${device.mobileS} {
  padding-right:20px;
padding-left:20px;
  }
 @media ${device.mobileM} {
  padding-right:20px;
padding-left:20px;
  }
 @media ${device.mobileL} {
padding-left:70px;
  }
`;
export const H3 = style.h3`
text-align:center;
padding-top:5px;
font-weight:bold;
text-transform:capitalize;

`;
export const Wrapper = style.div`


`;
export const Para = style.p`
color:gray;
text-align:center;
text-transfor:capitalize;
`;
