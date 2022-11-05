import  {Container,Form,H1, Para,LogoWrapper, Input, Wrapper, Left, Right, RoundLogo, Btn} from './signup.style.js';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container>
        
       
   <Wrapper>
        <Left>
          <LogoWrapper pos="none">
              <RoundLogo ><Link style = {{color:"white" , textDecoration:"none"}} to="/">Mate</Link></RoundLogo> 
        {/* <LogoCover /> */}
            </LogoWrapper>
            <H1>Create Account</H1>
            <Para  mg ="auto">please input the following details  to an account  on Mate </Para>
        <Form>
            <Input type="text" placeholder="firstname"/>
            <Input type="text" placeholder="Lastname"/>
            <Input type="text" placeholder="username"/>
            <Input type="text" placeholder="sex"/>
            <Input type="text" placeholder="I'm lookiing for a? "/>
            <Input type="password" placeholder="Password"/>
            <Btn  bg ="#5816c2" >Login</Btn>
        </Form>

        <Para mg="30px">Already have account <Link className='link' to="/signin">Sign in</Link></Para>

        </Left>
          <Right>
            <LogoWrapper pos="flex">
               <RoundLogo><Link style = {{color:"white" , textDecoration:"none"}} to="/">Mate</Link></RoundLogo> 
        {/* <LogoCover /> */}
            </LogoWrapper>
          </Right>
  </Wrapper>
     
    </Container>
  )
}

export default SignUp