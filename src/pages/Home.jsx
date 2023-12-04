import { SimpleGrid,Image,Box,Text,Button, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {FiPhoneCall}
 from 'react-icons/fi'
import AOS from "aos";
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
    },[])
  return (
    <div id='home'>
    <SimpleGrid columns={{base:1,lg:2}}>
        <Box>
        <Image src='./tec.jpg'/>
        </Box>
        <Box bg={"#2171FF"} display={'flex'} alignItems={"center"} justifyContent={"center"} >
          <Box w={"70%"}  color={'white'} m={10}>
           <Text as={"h2"} fontSize={30} fontWeight={'bold'}>Top CCTV Services In Dhanbad</Text>
           <Text lineHeight={6} mt={6} mb={7}> Our team of highly trained and dedicated specialists offer 100% statisfaction gurantee on all CCTV services.</Text> 
    <a href="https://wa.me/8252332381?text=Hi OM Digital CCTV security services"><Button bg={'#61CE70'} color={"white"} >Schedule Today</Button></a> 
          </Box>

        </Box>
    </SimpleGrid>
    <Flex bg={'black'}pl={{base:"20px"}} pt={10} pb={10} color={'white'} align={'center'} justify={'center'} gap={5} fontSize={'larger'}><FiPhoneCall  /><Text fontWeight={'bold'}>Call Today For A Free Estimate +91-9334092246 </Text> </Flex>
      
    </div>
  )
}

export default Home
