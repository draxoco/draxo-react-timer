import { decrement, increment } from '../helpers';
import {
  type CalculeTimeReturnType,
  type ClockType,
  type TimerType,
} from '../types';
import { displayTime } from './TimeDisplay';

const clock: ClockType = {
  hours: 0,
  mins: 0,
  segs: 0,
  finish: false,
  isDecrement: false,
};

export const calculeTime = (
  timeValues?: TimerType,
  options: { isDecrement?: boolean; reset: boolean } = {
    isDecrement: false,
    reset: false,
  }
): CalculeTimeReturnType => {
  const { isDecrement, reset } = options;

  if (timeValues !== undefined && (isDecrement ?? false)) {
    if (clock.hours === 0 && !clock.isDecrement) clock.hours = timeValues.hours;
    if (clock.mins === 0 && !clock.isDecrement) clock.mins = timeValues.mins;
    clock.isDecrement = true;
    decrement(clock, reset);
  } else {
    increment(clock, reset, timeValues);
  }

  displayTime.duration = {
    hours: `${clock.hours}`,
    mins: `${clock.mins}`,
    segs: `${clock.segs}`
  }

  return {
    finish: clock.finish,
  };
};
