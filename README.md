# Draxo React Timer

A simple React timer library for managing countdowns.

## Installation

You can install with npm or yarn.

```bash
npm install draxo-react-timer
```

```bash
yarn add draxo-react-timer
```

## Usage

```javascript
import React from 'react';
import { useReactTimer } from 'draxo-react-timer';

const TimerExample = () => {
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
};

export default TimerExample;
```

## User guide

##### Props

|  Prop name  | Description | Type |
|-------------|-------------------------------------|---------|
|    hours    | Add the hours for the timer. max 24 | number  |
|    mins     | Add the mins for the timer. max 60  | number  |
|    segs     | Add the segs for the timer. max 60  | number  |
| isDecrement | Allows you to reverse the timer.    | boolean |