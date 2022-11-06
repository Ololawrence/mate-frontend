import style from "styled-components";

export const Container = style.div`
display:flex;
height:auto;
`;
export const SideNav = style.div`
flex:0.5;
background:#2e3650;
position:fixed;
width:220px;
height:100vh;

`;
export const Div = style.div`
display:flex;
gap:10px;
`;

export const Main = style.div`
flex:2;
background-image: linear-gradient(to right, #E6E6FA, #ffffff);
margin-left:220px;  
`;
export const Banner = style.div`
height:15vh;
display:flex;
justify-content:space-between;
padding:20px;
`;

export const Span = style.div`

`;
export const Logo = style.div`
 color: ${({ theme }) => theme.textSoft};
  padding-left: -11px;
  padding-top:20px;
  text-align: center;
  font-weight: 500;
height:50px;
width:100%;
`;

export const Form = style.form`
height:60px;
`;
export const Input = style.input`
padding:10px 15px;
margin-top:10px;
background:white;
line-height: 1.5;
    color: #66799e;
outline:none;
border:1px solid #d1d7e0;
border-radius:10px;
width:230px;
font-weight:400;
margin-bottom:20px;
`;

export const Ul = style.ul`
list-style:none;

`;
export const Li = style.li`
color:white;
padding-bottom:35px;
display:flex;
align-items:center;
gap:10px;
font-size:15px;
`;


export const NotifWrapper = style.div`
display:flex;
gap:10px;

`;



export const Avater = style.div`
height:50px;
width:50px;
border-radius:50px;
background:grey;
`;
export const Wrapper = style.div`
display:flex;

`;
export const Middle = style.div`
flex:2;


`;



export const NiddleWrapper = style.div`
display:grid;
grid-template-columns:repeat(1fr, 2fr);
background:white;
border-radius:5px;
height:auto;
width:90%;
margin:auto;
border-1px solid:grey;

`;
export const H2 = style.h2`
color:#262B40;
padding-top:12px;
padding-left:15px;
`;
export const Btn = style.button``;
export const Label = style.label`
padding-left:10px;
padding-right:10px;
font-weight:500;
text-transform:capitalize;

`;

export const Para = style.p``;

export const RightNav = style.div`
flex:1;
border-radius:5px;
margin-right:20px;
height:auto;
border-1px solid:grey;
height:auto;
margin-right:50px;
`;

export const Profileinfo =style.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:50px;
`;
export const H3 = style.h3`
margin:0;
color:#262B40;
`;
export const Title = style.h4`
margin-top:10px;
color:#262B40;
`;
export const State = style.p`
font-size:13px;
margin:0px;
color:#262B40;
`;

export const Picscontainer = style.div`
display:flex;
flex-direction:column;
gap:50px;
background:white;
height:550px;
`;
export const BgImg = style.img`
width:100%;
position:relative;
`;
export const ProfilePics = style.img`
width:150px;
height:150px;
border-radius:50%;
position:absolute;
right: 120px;
top: 318px
`;

export const Uploadcont = style.div`
margin-top:50px;
background:white;
height:100px;
width:100%;
display:flex;
justify-content:center;
align-items:center;
`;

export const Uploadimages = style.input``;



