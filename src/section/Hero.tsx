import {     Flex,  Heading,  Image,  Stack,   Text,  useBreakpointValue, } from '@chakra-ui/react';
import Illustration from '../assets/images/illustration-working.svg'
import GetButton from '../components/GetButton';
  
  export default function Hero() {
    return (
      <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={'#3b3054'}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                More than just
              </Text>
              <br />
              <Text as={'span'}>
              shorter links
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#9e9aa7'}>
            Build your brand’s recognition and get detailed insights on how your links are performing.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
           <GetButton />
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'contain'}
            src={Illustration }
            />
        </Flex>
      </Stack>
    );
  }