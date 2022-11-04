import style from "styled-components";
import { device } from "../mediaQuery";

export const Container = style.div`
height:100vh;
width:100vw;
`;

export const Img = style.img`
padding-right:10px;
`;


export const Wrapper = style.div`
display:flex;
 @media ${device.mobileL} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction:row;
  }
`;

export const Left = style.div`
flex:1;
width:80%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
margin-top:100px;
 @media ${device.mobileS} {
   margin-top:30px;
  }
   @media ${device.mobileL} {
   align-content:center;
   width:100%;
  }
 @media ${device.mobileM} {
  }

@media ${device.laptop} {
 padding-top:70px;
}
`;
export const Right = style.div`
flex:1;
height:100vh;
background:whitesmoke;
display:flex;
align-items:center;
 @media ${device.mobileL} {
   display:none;
   align-content:center;
  }
 @media ${device.mobileM} {
   display:none;
  }
 @media ${device.mobileS} {
   display:none;
  }

     @media ${device.tablet} {
   display:none;
  }
   @media ${device.laptop} {
   display:flex;
   
  }
   @media ${device.laptopL} {
   display:block;
  }
   @media ${device.desktop} {
   display:block;
  }
`;

export const Btn = style.button`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center; 
margin-top:10px;
background: ${props => props.bg === "#5816c2" ? "#5816c2" : "black"};
width:73%;
color:white;
border:none;
cursor:pointer;
padding:12px 10px;
border-radius:5px;
font-size:13px;
font-family:Arial, Helvetica, sans-serif;
`;
export const RoundLogo = style.div`
display:flex;
justify-content:center;
align-items:center;
color:whitesmoke;
font-weight:500;
background:#5816c2;
width:100px;
height:100px;
border-radius:100%;

box-shadow: 0 4px 8px 0 #5816c2, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media ${device.mobileS} {
    margin-top:30px;
   width:70px;
   height:70px
 }
 @media ${device.mobileM} {
     margin-top:30px;
    width:70px;
    height:70px
  }
 @media ${device.mobileL} {
    margin-top:30px;
  width:70px;
  height:70px;
  }

  @media ${device.laptop} {
position:absolute;
    right: 200px;
    top: 230px;
    width:100px;
height:100px;
  }

`;
export const LogoWrapper = style.div`
height:100%;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

@media ${device.laptop} {
align-items:center;
flex-direction:column;
justify-content:center;
  display: ${(props) => (props.pos === "flex" ? "flex" : "none")}
}
`;
export const LogoCover = style.div`
position: absolute;
width: 40%;
 background:whitesmoke;
opacity: 0.7;
height: 10%;
top: 49%;
@media ${device.mobileS} {
top:23%;
width:100%;
background:white;
 }
 @media ${device.mobileM} {
   top:23%;
 width:100%;
 background:white;
  }

  @media ${device.mobileL} {
    top: 17%;
  }
 @media ${device.tablet} {
top: 17%;
  }
 @media ${device.laptop} {
background:whitesmoke;
width: 40%;
top: 49%;
  }
 
`;
export const Input = style.input`
width:70%;
padding:11px 7px;
margin-top:10px;
border-radius:3px;
border:0.5px solid grey;
color:grey;
outline:none;
border-color:lightgrey;

`;
export const Form = style.form`
width:80%;
display:flex;
flex-direction:column;
align-items:center;
 @media ${device.mobileL} {
align-content:center;
   align-content:center;
  }
 @media ${device.mobileM} {
align-content:center;
  }
 @media ${device.mobileS} {
align-content:center;
  }

`;
export const H1 = style.h1`
text-align:center;
font-size:25px;

`;
export const Para = style.p`
text-align:center;
font-size:12px;
width:70%;
font-family:Arial, Helvetica, sans-serif;

 > .link {
    font-weight:500;
    text-decoration:none;
    color:#5816c2;

     &:hover {
      color: red;
    }
}
`;
