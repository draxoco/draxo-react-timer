import React from 'react'
import { useReactTimer } from './ReactTimer'

const App = (): JSX.Element => {
  const { handleStopClick, handleStartClick, handleResetClick, time } = useReactTimer({ hours: 0, mins: 1, segs: 0 })
  return (
    <div>
      <button onClick={handleStopClick}>Stop</button>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleResetClick}>Reset</button>
      {time}
    </div>
  )
}

export default App
