import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import BookIcon from '@mui/icons-material/Book';
import CallIcon from '@mui/icons-material/Call';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

function Navbar() {
  return <div>
    <Container>
        <Picture>
          <img src ="Runo-logo.png" width ="120" height="auto"/>  
        </Picture>
        <Menu>
          <ul>
            <Button size="small" startIcon={<HomeIcon />}>Home</Button>
            <Button size="small" startIcon={ <ProductionQuantityLimitsIcon />}> Products</Button>
            <Button size="small" startIcon={<EmojiPeopleIcon/>}>Partners</Button>
            <Button size="small" startIcon={<BookIcon/>}>Blog</Button>
            <Button size="small" startIcon={< CallIcon/>}>Contact Us</Button>
            <Button size="small" endIcon={<ArrowDownwardIcon/>}>More</Button>
            <Button variant= "contained"size="large" startIcon={<OndemandVideoIcon/>}>Request a demo</Button>
          </ul>
        </Menu>
    </Container>
      
  </div>;
}

export default Navbar;

const Container = styled.nav`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
top: 0;
right: 0;
left: 0px;
justify-content: space-between;
justify-content:center;
flex-wrap:wrap;
margin-top:
`
const Menu = styled.div`
display: flex;

margin-top:10px;
flex-wrao:wrap;




ul{
  display : flex;
  list-style-type:none;
  
}


`
const Picture = styled.div`
margin-top:10px;
justify-content:center;
align-items:center;
margin-right:100px;
`
