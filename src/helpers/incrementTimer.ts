import { resetTimer } from ".";
import { ClockType, TimerType } from "../types";

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

export const increment = (
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