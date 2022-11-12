import { Button, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const SixtySeconds = () => {
    const [beenClicking, setBeenClicking] = useState(false)
    const [gameRunning, setGameRunning] = useState(false)
    const [clicks, setClicks] = useState(0)
    const [timer, setTimer] = useState(0)
    const [canStart, setCanStart] = useState(true)

    const performClick = async () => {
        if (!beenClicking) {
            setBeenClicking(true)
        }

        let myGameRunning = false

        if (!gameRunning && canStart) {
            myGameRunning = true
            setGameRunning(true)
            setCanStart(false)
            setTimer(0)
            setClicks(0)
        }

        if (myGameRunning || gameRunning) {
            setClicks(clicks => clicks + 1)
        }
    }

    useEffect(() => {
        if (!gameRunning) return

        let myTimer = timer;

        const timerInterval = setInterval(async () => {
            myTimer += 0.010

            if (myTimer >= 60) {
                setGameRunning(false)
            } else {
                setTimer(myTimer)
            }

            if (myTimer >= 63) {
                setCanStart(true)
                clearInterval(timerInterval)
            }
        }, 10)
    }, [gameRunning])

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
            <Text>
                {!beenClicking ? (
                    <>{'You haven\'t clicked yet :('}</>
                ) : (
                    <>
                        {gameRunning ? (
                            <>
                                Clicks: {clicks} <br />
                                Time Elapsed: {Math.round(timer * 100) / 100}
                            </>
                        ) : (
                            <>
                                You clicked {clicks} times in {Math.round(timer)} seconds <br />
                                CPS Clicked: {clicks / Math.round(timer)} <br />
                                {canStart ? 'Start clicking to restart!' : null}
                            </>
                        )}
                    </>
                )}
            </Text>
        </Button>
    )
}

export default SixtySeconds