import style from "styled-components";

export const Container = style.div`
margin:0px;
width:100%;
height:70vh;
`;

export const H3 = style.h3`
text-align:center;
margin-bottom:30px;
color:grey;
font-size:14px;
box-sizing:border-box;

`;
export const Wrapper = style.div`

display:flex;
align-items:center;
justify-content:center;
padding-top:10%;

`;

export const Div = style.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
export const Label = style.label`
padding-right:10px;

`;
export const Form = style.form`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


`;
export const Input = style.input`
padding:12px 30px;
width:40%;
font-weight:bold;
font-family:Roboto:500;
color:grey;
outline:none;
border:1px solid;
border-color:lightgrey;
`;
export const Btn = style.button`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center; 
margin-top:10px;
margin-left:40px;
background: ${(props) => (props.bg === "#5816c2" ? "#5816c2" : "black")};
width:40%;
color:white;
border:none;
cursor:pointer;
padding:12px 10px;
border-radius:5px;
font-size:13px;
font-family:Arial, Helvetica, sans-serif;
`;
