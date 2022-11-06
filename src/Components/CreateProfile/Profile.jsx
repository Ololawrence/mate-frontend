import React from 'react'
     
import {Container,Logo,Label,Div,
Banner,Middle,H2,NiddleWrapper,NotifWrapper, Main,SideNav,Avater, Ul,Span, Li, Wrapper,
 Form,Input,
  InputBtn,
   Para,
    RightNav,
    BgImg,
    Picscontainer,
    ProfilePics,
    Profileinfo,H3,Title,State, Uploadcont, Uploadimages,

} from './profile.style.js';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import BlockIcon from '@mui/icons-material/Block';
import LightModeIcon from '@mui/icons-material/LightMode';
import MessageIcon from '@mui/icons-material/Message';
import ReportIcon from '@mui/icons-material/Report';

import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import banner from '../../assests/banner.png';
import banner1 from '../../assests/banner1.png';

const profile = () => {
  return (
<Container>
        <SideNav>
        <Logo>
            MateMatch
        </Logo>

            <Ul>

                <Li> <ExploreIcon fontSize="small" />Overview</Li>
                <Li><MessageIcon fontSize="smaill"/>messages</Li>
                <Li><NotificationsIcon fontSize ="small"/>Notifications</Li>
                <Li><BlockIcon fontSize ="small" />blocked users</Li>
                <Li><ReportIcon fontSize ="small" />reported users</Li>
                <Li><SettingsIcon fontSize ="small"/>Settings</Li>
                <Li><LightModeIcon fontSize ="small"/>light theme</Li>
            </Ul>

        </SideNav>

        <Main>
        <Banner>
            
                <Div>
                    <Form>
                         <Input placeholder='search' type="text" />
                    </Form>
                   
                    <SearchIcon/>
                </Div>
                
                <NotifWrapper>
                    <NotificationsIcon style={{paddingTop:"10px"}} />
                    <Avater src="" alt="user avater" />
                    <Para>Boniew green</Para>
                </NotifWrapper>
       
        </Banner>
        <Wrapper>
        <Middle>
            <NiddleWrapper>
                <H2>Please complete your profile</H2>

        <div style ={{width:"70px", display:"flex", gap:"50px",paddingLeft:"30px", }} >
            <div>
                <Label>firstname</Label>
                <Input placeholder='enter your first nname' />
            </div>
            <div>        
                
                <Label>firstname</Label>
                <Input placeholder='enter your first nname' />
                    
             </div> 

        </div> 

        <div style ={{width:"70px", display:"flex", gap:"50px",paddingLeft:"30px", }} >
            <div>
                <Label>firstname</Label>
                <Input placeholder='enter your first nname' />
            </div>
            <div>        
                
                <Label>firstname</Label>
                <Input placeholder='enter your first nname' />
                    
             </div> 

        </div> 

        <div style ={{width:"70px", display:"flex", gap:"50px",paddingLeft:"30px", }} >
            <div>
                <Label>firstname</Label>
                <Input placeholder='enter your first nname' />
            </div>
            <div>        
                
                <Label>firstname</Label>
                <Input placeholder='enter your first nname' />
                    
             </div> 

        </div> 

        <div style ={{width:"70px", display:"flex", gap:"50px",paddingLeft:"30px", }} >
            <div>
                <Label>firstname</Label>
                <Input placeholder='enter your first nname' />
            </div>
            <div>        
                
                <Label>firstname</Label>
                <Input placeholder='enter your first nname' />
                    
             </div> 

        </div> 
               
             
            <H2>Address</H2>

          
            <div style ={{width:"70px", display:"flex", gap:"50px",paddingLeft:"30px", }} >
            <div> 
                 <Label>Address</Label>
            <Input placeholder='enter address' style={{width:"450px"}}/>
            </div>
        </div> 

          <div style ={{width:"70px", display:"flex", gap:"50px",paddingLeft:"30px", }} >
            <div>
                <Label>firstname</Label>
                <Input placeholder='enter your first nname' />
            </div>
            <div>        
                
                <Label>firstname</Label>
                <Input placeholder='enter your first nname' />
                    
             </div> 

        </div>
          <div style ={{width:"70px", display:"flex", gap:"50px",paddingLeft:"30px", }} >
            <div>
                <Label>firstname</Label>
                <Input placeholder='enter your first nname' />
            </div>
            <div>        
                
                <Label>firstname</Label>
                <Input placeholder='enter your first nname' />
                    
             </div> 

        </div>
            </NiddleWrapper>
        </Middle>
        <RightNav>
<Picscontainer>
        <BgImg src = {banner}/>
        <ProfilePics src = {banner1}/>
     <Profileinfo>
        <H3>Neil Sims</H3>
        <Title>Male</Title>
        <State>New York, USA</State>
    </Profileinfo>
</Picscontainer>

    <Uploadcont>
       
        <Uploadimages type ="file" />
    </Uploadcont>
        </RightNav>
        </Wrapper>
        </Main>

</Container>
  )
}

export default profile