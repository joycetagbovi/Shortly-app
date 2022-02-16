//import * from 'react';
import { Box, SimpleGrid, Text, Stack,   Heading, Center,useColorModeValue } from '@chakra-ui/react';
import Card from '../components/Card'

import Brand from '../assets/images/icon-brand-recognition.svg'
import Fully from '../assets/images/icon-fully-customizable.svg'
import Record from '../assets/images/icon-detailed-records.svg'

export default function Feature() {
  return (
    <Box p={10}   bg={useColorModeValue('gray.50', 'gray.900')}>
        <Stack mb={10} py={10}>
            <Center>
            <Heading 
            color= {'#3b3054'}
            fontSize={'40px'}
            mb={'2'}
            >
           Advanced Statistics   
            </Heading>
            </Center>
            <Center>
            <Text
            color={'#9e9aa7'}
            fontSize={'18px'}
            lineHeight={'26px'}
             w={'520px'}
             align={'center'}
             mb= {'10'}
            >
                Track how your links are performing across the web with our advanced statistics dashboard.
                </Text>
            </Center>
        </Stack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={10}>
        <Card
          image={Brand}
          title={'Brand Recognition'}
          desc=
            {'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'}
        />
        <Card
          image={Record}
          title={'Detailed Records'}
          desc={
            'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions'
          }
        />
        <Card
         image={Fully}
          title={' Fully Customizable'}
          desc={
            'improve brand awareness and content discover ability through customizable links, supercharging audience engagement.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}