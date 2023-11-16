import { resetTimer } from ".";
import { ClockType } from "../types";

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

export const decrement = (clock: ClockType, reset: boolean): void => {
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