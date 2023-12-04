import { Box, Flex,Image,ListIcon,ListItem,Text, UnorderedList } from '@chakra-ui/react'
import React, { useState } from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter,BsInstagram} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import  {Link}  from "react-scroll"




const Navbar = () => {
const [list,Setlist]=useState(false)

    const handleListView=()=>{
        Setlist(!list)
    }
  return (
    <Box position={'sticky'} top={0} zIndex={10000} bg={'white'} >
      <Flex w={'100%'}  h={'70px'} align={"center"} justify={'center'} >
        <Flex w={{base:"95%", lg:'90%'}} h={'70px'} align={'center'} justifyContent={'space-between'} >
            <Box w={"250px"}  ><Image src='./logo1.png' w={"100%"}  /></Box>
            <UnorderedList  display={{base:"none",lg:"flex"}} listStyleType={'none'} justifyContent={'center'} alignItems={'center'} gap={10}  cursor={'pointer'}>
                <ListItem ><Link to="home" spy={true} smooth={true} duration={500}>Home</Link></ListItem>
                <ListItem><Link to="about" spy={true} smooth={true} duration={500}>About Us</Link></ListItem>
                <ListItem><Link to="service" spy={true} smooth={true} duration={500}>Our Services</Link></ListItem>
                <ListItem><Link to="contact" spy={true} smooth={true} duration={500}>Contact Us</Link></ListItem>
                <ListItem fontSize={23} ><FaFacebookF/></ListItem>
                <ListItem fontSize={23}><BsTwitter/></ListItem>
                <ListItem fontSize={23}><BsInstagram/></ListItem>
            </UnorderedList>
          <Box display={{base:"block",lg:"none"}} fontSize={25} onClick={handleListView} ><GiHamburgerMenu/></Box>
        </Flex>
      </Flex>
      <Box display={{base:'flex',lg:'none'}} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={list? "150px" :"0px"} overflow={'hidden'} transition={"height 500ms"}  gap={2} left={0} zIndex={100}  backdropFilter= "blur(8px)" position={'absolute'}  w={'100%'}  color={"green"} fontWeight={'bold'} cursor={'pointer'} >
     
        <Link to="home" spy={true} smooth={true} duration={500} onClick={()=>Setlist(!list)}>Home</Link>
        <Link to="about" spy={true} smooth={true} duration={500} onClick={()=>Setlist(!list)}>About Us</Link>
        <Link to="service" spy={true} smooth={true} duration={500} onClick={()=>Setlist(!list)}>Our Services</Link>
        <Link to="contact" spy={true} smooth={true} duration={500} onClick={()=>Setlist(!list)}>Contact Us</Link>
      </Box>
    </Box>
  )
}

export default Navbar
