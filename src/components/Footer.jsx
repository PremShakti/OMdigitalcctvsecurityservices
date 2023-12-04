import { Box, Flex, SimpleGrid,Text } from '@chakra-ui/react'
import React from 'react'
import CardFooter from './CardFooter'
import { CiLocationOn } from 'react-icons/ci'
import { BiTimeFive,BiPhoneCall } from 'react-icons/bi'
import { MdOutlinePrivacyTip } from 'react-icons/md'

const Footer = () => {
  return (
    <Box pt={10}  bg={'black'}>
        <SimpleGrid width={{base:"100%",lg:"80%"}} columns={{base:1,lg:4}} m={'auto'} gap={5} mb={10} >

        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
        <CiLocationOn color='green' fontSize={65} />
        <Text as={'h2'} fontSize={25} color={"white"} >Location</Text>
        <Text mt={5} color={'white'} textAlign={'center'} >Bhaljori Road, Nirsa, Dhanbad, Jharkhand, 828205</Text>
    </Box>

    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
        <BiTimeFive color='green' fontSize={60} />
        <Text as={'h2'} fontSize={25} color={"white"} >Working Hours</Text>
        <Text mt={5} color={'white'} textAlign={'center'} >10:00 AM – 08:30 PM Monday – Sunday</Text>
    </Box>

    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
        <BiPhoneCall color='green' fontSize={60} />
        <Text as={'h2'} fontSize={25} color={"white"} >Phone Number</Text>
        <Text mt={5} color={'white'} textAlign={'center'} >+91 8252332381</Text>
    </Box>

    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}  >
        <MdOutlinePrivacyTip color='green' fontSize={60} />
        <Text as={'h2'} fontSize={25} color={"white"} >Direct Link</Text>
        <Text mt={5} color={'white'} textAlign={'center'} >Privacy Policy Termers & Condicoins</Text>
    </Box>
        </SimpleGrid>

        <Flex w={'100%'} h={'80px'} align={'center'} justify={'center'} borderTop={'1px solid white'}>
            <Flex w={'90%'} h={"65px"} align={'center'} justify={'center'} justifyContent={{base:'space-around',lg:'space-between'}} color={'white'} fontSize={'small'} >
            <Text>Copyright © 2023 <span style={{color:'green'}}>OM Digital CCTV Security Services</span> </Text>
            <Text display={{base:"none",lg:"block"}} >Designed by <span style={{color:'green'}}>Prem Shakti</span></Text>
            </Flex>
        </Flex>
      
    </Box>
  )
}

export default Footer
