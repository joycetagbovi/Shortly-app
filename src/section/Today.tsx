import React from 'react'
import { Box, Stack, Heading, Container} from '@chakra-ui/react'
import GetButton from '../components/GetButton'
import BackImage from '../assets/images/bg-boost-desktop.svg'

export default function Today() {
  return (
      <Box
      p={10}
  backgroundImage={BackImage}
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
  backgroundColor={'#35323e'}
  >
  <Container>
      <Stack align={'center'} py={5}>
          <Heading
          mb={5}
          color='white'
          fontSize={'40px'}
          >
          Boost your links today
          </Heading>
          <GetButton />
      </Stack>
  </Container>
  </Box>
  )
}
