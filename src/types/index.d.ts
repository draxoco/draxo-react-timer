export interface calculeTimeReturnType { time: string, finish: boolean }

export interface timerType {
  hours: number
  mins: number
  segs: number
}

export interface clockType extends timerType {
  finish: boolean
  isDecrement: boolean
}
