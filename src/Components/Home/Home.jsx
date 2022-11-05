import { Container,H1, Nav, Logo,Section, SecLeft, SecRight, Wrapper,Img, Create, Left, Right, FindMatch, Para, Btn } from './Home.style';
import BoltIcon from '@mui/icons-material/Bolt';
import Card from '../Card/Card.jsx';
import banner from '../../assests/banner1.png';
import feature from '../../assests/feature.jpg';
import Footer from '../Footer/Foter';

import {Link} from 'react-router-dom';

const Home = () => {
  return (
  <Container>

    <Nav>
      <Logo>Mate</Logo>

      <Create> <Link style = {{color:"whitesmoke", textDecoration:"none"}} to="/create">create Account</Link></Create>
    </Nav>
    <Wrapper>
    <Left>
      <FindMatch><BoltIcon style = {{paddingRight:"10px", paddingLeft:"5px"}} size = "small" color ="purple"/> you can find your match now</FindMatch>

      <H1>it's never too late to find a match</H1>
      <Para>its never too late  to find a match and fall in love<br /> again. find your soul mate now!</Para>
      <Btn><Link style = {{color:"white" , textDecoration:"none"}} to="/create">match now!</Link></Btn>
    </Left>
    <Right>
         <Img  src ={banner}/>
    </Right>
    </Wrapper>

    <Section>
     <SecRight>

<Img src ={feature}/>
      </SecRight>



      <SecLeft >
<Card  title = "8k + users " para = "our 8k users are always happy" />
<Card  title = "perfect match" para = "find a match accounding to the desire criteria"/>

      </SecLeft>
 
    </Section>

    <Footer />
  </Container>
  )
}

export default Home