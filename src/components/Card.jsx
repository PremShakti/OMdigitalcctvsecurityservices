import { Box,Image,Text,Button } from '@chakra-ui/react'
import React from 'react'


const Card = ({title,src}) => {
  return (
    <Box pt={2} pb={2} border={'1px solid white'}>
      <Box w={'95%'} m={'auto'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
         <Box w={'100%'} height={'200px'} overflow={'hidden'}>
      <Image src= {src}  />
         </Box>
       <Text as={'h2'} fontSize={20} color={'white'} fontWeight={'bold'} >{title}</Text>
   <a href="https://wa.me/8252332381?text=Hi OM Digital CCTV security services"><Button bg={'black'} color='white' mt={5} >Book Now</Button></a> 
      </Box>
    </Box>
  )
}

export default Card
