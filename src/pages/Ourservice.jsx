import { Box,SimpleGrid,Text } from '@chakra-ui/react'
import React from 'react'
import Card from '../components/Card'
const Ourservice = () => {
  return (
    <div id='service'>
    <Box bg={'#2171FF'} >
        <Text as={'h2'} fontSize={30} fontWeight={'bold'} color={'white'} textAlign={'center'} >Our Service</Text>
      
      <SimpleGrid columns={{base:1,lg:4}}pb={10} spacing={2} w={{base:'95%',lg:'80%'}} border={'white'} margin={'auto'} mt={10}>

<Card src='./tec2.jpg' title="Installation"/>    
<Card src='https://www.shutterstock.com/image-photo/technician-remove-hard-disk-drive-600nw-2269263395.jpg' title="DVR Reapring"/>    
<Card src='https://png.pngtree.com/thumb_back/fh260/background/20230313/pngtree-security-cctv-camera-on-the-house-3d-photo-image_1930162.jpg' title="Planning & Layout"/>    
<Card src='https://www.shutterstock.com/image-photo/technician-installing-cctv-camera-on-600nw-1095001202.jpg' title="Maintenance"/>    
   

      </SimpleGrid>

    </Box>
      
    </div>
  )
}

export default Ourservice
