import { useReactTimer } from '.';
import './App.css';

function App() {
  const { handleStopClick, handleStartClick, handleResetClick, time } =
    useReactTimer({ hours: 0, mins: 1, segs: 0 });

  return (
    <div>
      <button onClick={handleStopClick}>Stop</button>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleResetClick}>Reset</button>
      {time}
    </div>
  );
}

export default App;
