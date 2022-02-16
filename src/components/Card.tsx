import React from 'react'
import { Box, Text,  Heading,  Stack, Image ,Flex } from '@chakra-ui/react';

type CardProps = {
    title: string;
    desc: string;
    image: string;
}

function Card({ image, title, desc, ...rest } : CardProps) {
    return (
      <Box p={6} shadow='sm' bg={'white'} borderWidth='1px' maxW={'sm'}  {...rest} position='relative'>
          <Stack
              position={'absolute'}
              left={10}
              top={-10}
             zIndex={1}
             rounded='full'    
          >
        <Flex
         w={'80px'}
         h={'80px'}
         bg={'#35323e'}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        >
        <Image 
        m={0}
        alt ="avatar " 
        src={image}
        />
        </Flex>
        </Stack>
        <Heading 
        fontSize='xl'
         mt={10}
     
         color={'#3b3054'}
         >
            {title}
            </Heading>
        <Text 
        mt={4}
        mb={4}
        color={'#9e9aa7'}
        fontSize={'16px'}
        lineHeight={'26px'}
        >
        {desc}
        </Text>
      </Box>
    )
  }
  

export default Card

