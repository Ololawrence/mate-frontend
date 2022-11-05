import style from "styled-components";
import banner from "../../assests/banner1.png";

export const Container = style.div`
    width:100vw;
    height:100vh;

`;
export const Nav = style.div`
background-image: linear-gradient(to right, #E6E6FA, #fff);
height:70px;
display:flex;
justify-content:space-between;
padding-right:30px;
padding-left:30px;
align-content:center;
flex-wrap:wrap;
border:none;
`;

export const Wrapper = style.div`
height:450px;
background-image: linear-gradient(to right, #E6E6FA, #ffffff);
display:flex;


`;
export const Logo = style.span`
color:rgb(32, 32, 32);
font-weight:900;
font-family:Arial, Helvetica, sans-serif;
cursor:pointer;
opacity:0.8;
`;

export const Create = style.span`
color:whitesmoke;
background:rgb(32, 32, 32);
width:150px;
height:35px;
border-radius:50px;
display:flex;
align-items:center;
justify-content:center;
opacity:0.8;
`;

export const Left = style.div`
flex:1;
`;
export const Right = style.div`
flex:1;
//   background-image:url(${banner});
//   background-repeat:no-repeat;
//   background-size:cover;
//   backgrond-color: #E6E6FA;
//    background-blend-mode: lighten;
`;

export const FindMatch = style.div`
background:white;
height:30px;
color:rgba(250, 59, 91, 0.842);
width:270px;
margin-left:40px;
border-radius:50px;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin-top:40px;
text-transform:capitalize;
font-size:12px;
font-weight:700;
`;

export const H1 = style.h1`
font-size:50px;
text-transform:capitalize;
text-align:justify;
font-weight:700;
padding-left:30px;
padding-right:30px;

`;

export const Para = style.p`
padding:30px;
color:gray;
margin:0px;
padding-top:0px;
font-weight:500;

`;

export const Btn = style.button`
display:flex;
justify-content:center;
align-items:center;
width:150px;
background:#5816c2;
margin-left:30px;
height:40px;
border:none;
border-radius:50px;
color:white;
font-weight:bold;
text-transform:capitalize;
opacity:0.8;
`;

export const Img = style.img`
width:100%;
height:100%;
  object-fit: cover;
`;


export const Section = style.section`
display:flex;
height:60vh;
margin-top:40px;
`;


export const SecLeft = style.div`
flex:0.7;
display:flex;
flex-direction:column;
justify-content:center;
flex-wrap:wrap;
gap:10px;
`;
export const SecRight = style.div`
flex:1.1;
padding-right:50px;
padding-left:30px;
`;
