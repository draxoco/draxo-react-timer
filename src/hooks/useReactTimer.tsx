import { useEffect, useState } from 'react';

import { CalculeTimeReturnType, TimerType } from '../types';
import { Timer, calculeTime, displayTime } from '../services';

export const useReactTimer = ({
  hours,
  mins,
  segs,
  isDecrement = false,
}: TimerType): {
  handleStartClick: () => void;
  handleStopClick: () => void;
  handleResetClick: () => void;
  time: string;
} => {
  const timeDefaultValue = displayTime.defaul(hours, mins, segs, isDecrement);
  const [time, setTime] = useState(timeDefaultValue);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    if (timerActive) {
      const timer = new Timer(() => {
        const calculeTimeReturn: CalculeTimeReturnType = calculeTime(
          { hours, mins, segs },
          { isDecrement, reset: false }
        );

        setTime(displayTime.duration);

        if (calculeTimeReturn.finish) {
          timer.stop();
          setTimerActive(false);
        }
      }, 1000);

      return () => {
        timer.stop();
      };
    }
  }, [timerActive]);

  const handleStartClick = (): void => {
    setTimerActive(true);
  };

  const handleStopClick = (): void => {
    setTimerActive(false);
  };

  const handleResetClick = (): void => {
    setTime(timeDefaultValue);
    handleStopClick();
    calculeTime(undefined, { reset: true });
  };

  return {
    handleStopClick,
    handleStartClick,
    handleResetClick,
    time,
  };
};
