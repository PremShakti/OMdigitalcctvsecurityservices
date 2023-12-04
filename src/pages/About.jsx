import { Box, Flex,Image,ListItem,Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Flex w={'90%'} m={'auto'} id='about' gap={8} mt={5} mb={5} flexDirection={{base:'column',lg:'row'}}>
      <Box w={{base:"100%",lg:"30%"}} ><Image src='https://img.freepik.com/free-vector/household-renovation-professions_52683-46107.jpg?w=740&t=st=1687838049~exp=1687838649~hmac=6eb6ed0ac9c218b4ab6fc334896ff9354a4a633035c3c971b845bef553698c10'/></Box>

<Box>
    <Text as={'h2'} fontSize={{base:20,lg:30}} fontWeight={'bold'} textAlign={{base:"center" ,lg:"left"}} >CCTV & SURVEILLANCE EXPERT -Beound Boundaries, Unmatched Security Solutions, Watchful Eyes, Peacrful Night</Text>
    <UnorderedList fontSize={'sm'}mt={5} spacing={3} fontFamily= "Georgia, serif"
>
        <ListItem>Our services include CCTV Planning & Layout, CCTV Installation, DVR Repairing, Remote Office Monitoring, Smart Home Integration,Computer Sales & Services, Printer Sales & Services in Dhanbad.</ListItem>

        <ListItem>At Expert CCTV Security Mechanical, we are committed to providing our customers with high-quality services at competitive prices. </ListItem>
        <ListItem>Contact us today for all your CCTV Security needs in Dhanbad. </ListItem>
    </UnorderedList>
</Box>

    </Flex>
  )
}

export default About
