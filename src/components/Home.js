import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import Section from './components/Section';

function Home() {
  return <div>
      <Container>
          <Left>
            <ul>
               <li><h1><J>Say yes to <br /> Less Work,</J> <K>More Sales</K></h1></li>
               <li>SIM based Call Management CRM for small, medium, and large enterprises</li>
               <But>
                <ButL>
                    <Button variant='contained' size="large" startIcon={<AppleIcon/>} >App Store</Button>
                </ButL>
                <ButR>
                    <Button variant='outlined' size="large" startIcon={<ShopIcon/>}> Play Store</Button>
                </ButR>
               </But>
            </ul>
         </Left>
         <Right>
             <center><img src = "top-mobile-min.png" width ="380" height="auto" min-width="10vw"/></center>
         </Right>
      </Container>
      <Section />

  </div>;
}


export default Home;

const Container = styled.div`
display: flex ;
padding-top:100px;
justify-content: space-between;
min-width:10vw;
height:auto;
flex-wrap: wrap;
flex:1;


`
const Left = styled.div`
margin-top:100px;
display:flex;
width: auto;
min-height:10vh;
flex-wrap: wrap;
margin-left:100px;

ul{
   list-style-type:none; 

}


`
const Right = styled.div`
min-width:10vw;
height:auto;
justify-content:center;
text-align:center;
margin-right:100px;

`
const K = styled.strong`
color: #0EBC65;

`
const J = styled.strong`
color: #1F1F39

`
const ButL = styled.div`
margin-top:30px;

`
const ButR = styled.div`
margin-top:30px;
margin-left:30px;`

const But = styled.div`
display:flex;
justify-content:center;
`