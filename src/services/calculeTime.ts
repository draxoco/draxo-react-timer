import {
  type timerType,
  type clockType,
  type calculeTimeReturnType
} from '../types'

const clock: clockType = {
  hours: 0,
  mins: 0,
  segs: 0,
  finish: false,
  isDecrement: false
}

const resetTimer = (clock: clockType): void => {
  clock.isDecrement = false
  clock.finish = false
  clock.hours = 0
  clock.mins = 0
  clock.segs = 0
}

// INCREMENT
const incrementHours = (clock: clockType): void => {
  if (clock.mins === 59 && clock.segs === 59) {
    clock.mins = 0
    clock.segs = 0
    clock.hours++
  } else {
    incrementMinutes(clock)
  }
}

const incrementMinutes = (clock: clockType): void => {
  if (clock.segs === 59) {
    clock.segs = 0
    clock.mins++
  } else {
    clock.segs++
  }
}

const increment = (clock: clockType, reset: boolean, timeValues?: timerType): void => {
  switch (getIncrementType(clock, timeValues)) {
    case 'hours':
      if (timeValues !== undefined && clock.hours < timeValues.hours) {
        incrementHours(clock)
      } else {
        clock.finish = true
      }
      break
    case 'mins':
      if (timeValues !== undefined && clock.mins < timeValues.mins) {
        incrementMinutes(clock)
      } else {
        clock.finish = true
      }
      break
    case 'segs':
      if (timeValues !== undefined && clock.segs < timeValues.segs) {
        clock.segs++
      } else {
        clock.finish = true
      }
      break
    default:
      if (reset) resetTimer(clock)
      break
  }
}

const getIncrementType = (clock: clockType, timeValues?: timerType): string => {
  let type = ''

  if (timeValues !== undefined && timeValues.hours > clock.hours) {
    type = 'hours'
  } else if (timeValues !== undefined && timeValues.mins > clock.mins) {
    type = 'mins'
  } else if (timeValues !== undefined && timeValues.segs > clock.segs) {
    type = 'segs'
  }

  return type
}

// DECREMET
const decrementHours = (clock: clockType): void => {
  if (clock.mins === 0 && clock.segs === 0) {
    clock.mins = 59
    clock.segs = 59
    clock.hours--
  } else {
    decrementMinutes(clock)
  }
}

const decrementMinutes = (clock: clockType): void => {
  if (clock.segs === 0) {
    clock.mins--
    clock.segs = 59
  } else {
    clock.segs--
  }
}

const decrement = (clock: clockType, reset: boolean, timeValues?: timerType): void => {
  switch (getDecrementType(clock, timeValues)) {
    case 'hours':
      if (clock.hours > 0) {
        decrementHours(clock)
      } else {
        clock.finish = true
      }
      break
    case 'mins':
      if (clock.mins > 0) {
        decrementMinutes(clock)
      } else {
        clock.finish = true
      }
      break
    case 'segs':
      if (clock.segs > 0) {
        clock.segs--
      } else {
        clock.finish = true
      }
      break
    default:
      if (reset) resetTimer(clock)
      break
  }
}

const getDecrementType = (clock: clockType, timeValues?: timerType): string => {
  let type = ''

  if (clock.hours > 0) {
    type = 'hours'
  } else if (clock.mins > 0) {
    type = 'mins'
  } else if (clock.segs > 0) {
    type = 'segs'
  }

  return type
}

export const calculeTime = (
  timeValues?: timerType,
  options: { isDecrement?: boolean, reset: boolean } = {
    isDecrement: false,
    reset: false
  }
): calculeTimeReturnType => {
  const { isDecrement, reset } = options
  const { hours, mins, segs } = clock

  if (timeValues !== undefined && (isDecrement ?? false)) {
    if (clock.hours === 0 && !clock.isDecrement) clock.hours = timeValues.hours
    if (clock.mins === 0 && !clock.isDecrement) clock.mins = timeValues.mins
    clock.isDecrement = true
    decrement(clock, reset, timeValues)
  } else {
    increment(clock, reset, timeValues)
  }

  const h = `0${hours}`.slice(-2)
  const m = `0${mins}`.slice(-2)
  const s = `0${segs}`.slice(-2)

  return {
    time: `${h}:${m}:${s}`,
    finish: clock.finish
  }
}
