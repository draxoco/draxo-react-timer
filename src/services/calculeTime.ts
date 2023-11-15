import {
  type CalculeTimeReturnType,
  type ClockType,
  type TimerType,
} from '../types';

const clock: ClockType = {
  hours: 0,
  mins: 0,
  segs: 0,
  finish: false,
  isDecrement: false,
};

const resetTimer = (clock: ClockType): void => {
  clock.isDecrement = false;
  clock.finish = false;
  clock.hours = 0;
  clock.mins = 0;
  clock.segs = 0;
};

// INCREMENT
const incrementHours = (clock: ClockType): void => {
  if (clock.mins === 59 && clock.segs === 59) {
    clock.mins = 0;
    clock.segs = 0;
    clock.hours++;
  } else {
    incrementMinutes(clock);
  }
};

const incrementMinutes = (clock: ClockType): void => {
  if (clock.segs === 59) {
    clock.segs = 0;
    clock.mins++;
  } else {
    clock.segs++;
  }
};

const increment = (
  clock: ClockType,
  reset: boolean,
  timeValues?: TimerType
): void => {
  switch (getIncrementType(clock, timeValues)) {
    case 'hours':
      if (timeValues !== undefined && clock.hours < timeValues.hours) {
        incrementHours(clock);
      } else {
        clock.finish = true;
      }
      break;
    case 'mins':
      if (timeValues !== undefined && clock.mins < timeValues.mins) {
        incrementMinutes(clock);
      } else {
        clock.finish = true;
      }
      break;
    case 'segs':
      if (timeValues !== undefined && clock.segs < timeValues.segs) {
        clock.segs++;
      } else {
        clock.finish = true;
      }
      break;
    default:
      if (reset) resetTimer(clock);
      break;
  }
};

const getIncrementType = (clock: ClockType, timeValues?: TimerType): string => {
  let type = '';

  if (timeValues !== undefined && timeValues.hours > clock.hours) {
    type = 'hours';
  } else if (timeValues !== undefined && timeValues.mins > clock.mins) {
    type = 'mins';
  } else if (timeValues !== undefined && timeValues.segs > clock.segs) {
    type = 'segs';
  }

  return type;
};

// DECREMET
const decrementHours = (clock: ClockType): void => {
  if (clock.mins === 0 && clock.segs === 0) {
    clock.mins = 59;
    clock.segs = 59;
    clock.hours--;
  } else {
    decrementMinutes(clock);
  }
};

const decrementMinutes = (clock: ClockType): void => {
  if (clock.segs === 0) {
    clock.mins--;
    clock.segs = 59;
  } else {
    clock.segs--;
  }
};

const decrement = (clock: ClockType, reset: boolean): void => {
  switch (getDecrementType(clock)) {
    case 'hours':
      if (clock.hours > 0) {
        decrementHours(clock);
      } else {
        clock.finish = true;
      }
      break;
    case 'mins':
      if (clock.mins > 0) {
        decrementMinutes(clock);
      } else {
        clock.finish = true;
      }
      break;
    case 'segs':
      if (clock.segs > 0) {
        clock.segs--;
      } else {
        clock.finish = true;
      }
      break;
    default:
      if (reset) resetTimer(clock);
      break;
  }
};

const getDecrementType = (clock: ClockType): string => {
  let type = '';

  if (clock.hours > 0) {
    type = 'hours';
  } else if (clock.mins > 0) {
    type = 'mins';
  } else if (clock.segs > 0) {
    type = 'segs';
  }

  return type;
};

export const calculeTime = (
  timeValues?: TimerType,
  options: { isDecrement?: boolean; reset: boolean } = {
    isDecrement: false,
    reset: false,
  }
): CalculeTimeReturnType => {
  const { isDecrement, reset } = options;
  const { hours, mins, segs } = clock;

  if (timeValues !== undefined && (isDecrement ?? false)) {
    if (clock.hours === 0 && !clock.isDecrement) clock.hours = timeValues.hours;
    if (clock.mins === 0 && !clock.isDecrement) clock.mins = timeValues.mins;
    clock.isDecrement = true;
    decrement(clock, reset);
  } else {
    increment(clock, reset, timeValues);
  }

  const h = `0${hours}`.slice(-2);
  const m = `0${mins}`.slice(-2);
  const s = `0${segs}`.slice(-2);

  return {
    time: `${h}:${m}:${s}`,
    finish: clock.finish,
  };
};
