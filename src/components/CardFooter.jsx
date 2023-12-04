import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import {CiLocationOn} from 'react-icons/ci'

const CardFooter = ({title,line}) => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} p={3} >
        <CiLocationOn color='green' fontSize={65} />
        <Text as={'h2'} fontSize={30} color={"white"} >{title}</Text>
        <Text mt={5} color={'white'} >{line}</Text>
      
    </Box>
  )
}

export default CardFooter
