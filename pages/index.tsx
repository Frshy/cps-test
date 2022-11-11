import { useEffect, useState } from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import FreeClicking from '../components/FreeClicking'
import OneSecond from '../components/OneSeconds'
import FiveSeconds from '../components/FiveSeconds'
import ThirtySeconds from '../components/ThirtySeconds'
import SixtySeconds from '../components/SixtySeconds'

export default function Home() {
  const [tab, setTab] = useState(0)

  return (
    <Box
      width='100%'
      height='100%'
      background='blackAlpha.900'
    >
      <Flex
        justifyItems='center'
        justifyContent='center'
        alignItems='center'
        width='100%'
        height='100%'
      >
        <Flex
          flexDirection='column'
          background='gray.800'
          padding='15px'
          rounded='15px'
          border={1}
          borderTop='solid'
          borderColor='blue.500'
          color='white'
        >
          <Heading
            as='h1'
            fontSize='3xl'
            margin='auto'
            fontWeight='semibold'
          >
            Cps Test
          </Heading>

          <Box marginTop='15px' as='nav'>
            <Button
              mx='4px'
              background={`${tab == 0 ? 'blue.400' : 'gray.700'}`}
              _hover={{
                background: 'blue.500'
              }}
              _active={{
                background: 'blue.600'
              }}
              onClick={() => { setTab(0) }}
            >
              1 Seconds
            </Button>

            <Button
              mx='4px'
              background={`${tab == 1 ? 'blue.400' : 'gray.700'}`}
              _hover={{
                background: 'blue.500'
              }}
              _active={{
                background: 'blue.600'
              }}
              onClick={() => { setTab(1) }}
            >
              5 Seconds
            </Button>

            <Button
              mx='4px'
              background={`${tab == 2 ? 'blue.400' : 'gray.700'}`}
              _hover={{
                background: 'blue.500'
              }}
              _active={{
                background: 'blue.600'
              }}
              onClick={() => { setTab(2) }}
            >
              30 Seconds
            </Button>

            <Button
              mx='4px'
              background={`${tab == 3 ? 'blue.400' : 'gray.700'}`}
              _hover={{
                background: 'blue.500'
              }}
              _active={{
                background: 'blue.600'
              }}
              onClick={() => { setTab(3) }}
            >
              60 Seconds
            </Button>

            <Button
              mx='4px'
              background={`${tab == 4 ? 'blue.400' : 'gray.700'}`}
              _hover={{
                background: 'blue.500'
              }}
              _active={{
                background: 'blue.600'
              }}
              onClick={() => { setTab(4) }}
            >
              Free Clicking
            </Button>

          </Box>

          <Box
            color='white'
            height={200}
            marginTop='15px'
          >
            {tab == 0 && <OneSecond />}
            {tab == 1 && <FiveSeconds />}
            {tab == 2 && <ThirtySeconds />}
            {tab == 3 && <SixtySeconds />}
            {tab == 4 && <FreeClicking />}
          </Box>

        </Flex>
      </Flex>
    </Box>
  )
}
