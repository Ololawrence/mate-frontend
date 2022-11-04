import  {Container,Form,H1, Para,LogoWrapper, Input, Wrapper, Left, Right, RoundLogo, Btn, Img} from '../signup/signup.style';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <Container>
        
       
   <Wrapper>
        <Left>
          <LogoWrapper pos="none">
              <RoundLogo>Mate</RoundLogo> 
        {/* <LogoCover /> */}
            </LogoWrapper>
            <H1>Welcome Back</H1>
            <Para  mg ="auto"> please enter your details</Para>
        <Form>
         
            <Input type="text" placeholder="username"/>
            <Input type="password" placeholder="Password"/>
            <Btn bg ="#5816c2">Login</Btn>

            <Btn  bg = "black"><Img src ="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"></Img>Signin with Google</Btn>
        </Form>

        <Para mg="30px">Don't have an account <Link className='link' to="/create">Create</Link></Para>

        </Left>
          <Right>
            <LogoWrapper pos="flex">
               <RoundLogo>Mate</RoundLogo> 
        {/* <LogoCover /> */}
            </LogoWrapper>
          </Right>
  </Wrapper>
     
    </Container>
  )
}

export default Signin