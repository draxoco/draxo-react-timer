export interface CalculeTimeReturnType {
  time: string;
  finish: boolean;
}

export interface TimerType {
  hours: number;
  mins: number;
  segs: number;
}

export interface ClockType extends TimerType {
  finish: boolean;
  isDecrement: boolean;
}
