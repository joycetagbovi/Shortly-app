import React from 'react'
import { Button } from '@chakra-ui/react'

export default function GetButton() {
  return (
    <Button
    rounded={'full'}
    height={'55px'}
    size={'lg'}
    lineHeight={'1.2'}
    px={'40px'}
    bg={'#2acfcf'}
    color={'white'}
    _hover={{
      bg: 'blue.500',
    }}>
    Get Started
  </Button>
  )
}
