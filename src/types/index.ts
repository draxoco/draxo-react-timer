export interface CalculeTimeReturnType {
  time: string;
  finish: boolean;
}

export interface TimerType {
  hours: number;
  mins: number;
  segs: number;
  isDecrement?: boolean;
}

export interface ClockType extends TimerType {
  finish: boolean;
  isDecrement: boolean;
}
