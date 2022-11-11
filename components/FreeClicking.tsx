import { Button } from "@chakra-ui/react"
import { useState } from "react"

const FreeClicking = () => {
    const [clicks, setClicks] = useState(0)

    const performClick = async () => {
        setClicks(clicks + 1)
        setTimeout(async () => {
            setClicks(prevClicks => prevClicks - 1)
        }, 1000)
    }

    return (
        <Button
            onClick={performClick}
            background='blue.400'
            width='100%'
            height='100%'
            rounded={10}
            _hover={{
                background: 'blue.500'
            }}
            _active={{
                background: 'blue.600'
            }}
        >
            CPS: {clicks}
        </Button>
    )
}

export default FreeClicking