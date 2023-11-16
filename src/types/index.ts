export interface CalculeTimeReturnType {
  finish: boolean;
}

export interface TimerType {
  hours: number;
  mins: number;
  segs: number;
  isDecrement?: boolean;
}

export interface ClockType extends TimerType, CalculeTimeReturnType {}
