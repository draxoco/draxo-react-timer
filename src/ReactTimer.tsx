import { useEffect, useState } from 'react'
import Timer from './services/timer'
import calculeTime, {
  type timerType,
  type calculeTimeReturnType
} from './services/calculeTime'

const ReactTimer = ({ hours, mins, segs }: timerType): {
  handleStartClick: () => void
  handleStopClick: () => void
  handleResetClick: () => void
  time: string
} => {
  const h = `0${hours}`.slice(-2)
  const m = `0${mins}`.slice(-2)
  const s = `0${segs}`.slice(-2)

  const timeDefaultValue = `${h}:${m}:${s}`
  const [time, setTime] = useState(timeDefaultValue)
  const [timerActive, setTimerActive] = useState(true)

  useEffect(() => {
    if (timerActive) {
      const timer = new Timer(() => {
        const cT: calculeTimeReturnType = calculeTime(
          { hours, mins, segs },
          { isDecrement: true, reset: false }
        )
        setTime(cT.time)
        if (cT.finish) {
          timer.stop()
        }
      }, 1000)

      return () => {
        timer.stop()
      }
    }
  }, [timerActive])

  const handleStartClick = (): void => {
    setTimerActive(true)
  }

  const handleStopClick = (): void => {
    setTimerActive(false)
  }

  const handleResetClick = (): void => {
    setTime(timeDefaultValue)
    handleStopClick()
    calculeTime(undefined, { reset: true })
  }

  return {
    handleStopClick,
    handleStartClick,
    handleResetClick,
    time
  }
}

export default ReactTimer
