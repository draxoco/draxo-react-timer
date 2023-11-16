import { ClockType } from "../types";

export const resetTimer = (clock: ClockType): void => {
  clock.isDecrement = false;
  clock.finish = false;
  clock.hours = 0;
  clock.mins = 0;
  clock.segs = 0;
};