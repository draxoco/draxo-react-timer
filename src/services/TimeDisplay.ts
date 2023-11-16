class TimeDisplay {
  private hours: string
  private mins: string
  private segs: string

  constructor () {
    this.hours = '0'
    this.mins = '0'
    this.segs = '0'
  }

  get duration(): string {
    const h = `0${this.hours}`.slice(-2);
    const m = `0${this.mins}`.slice(-2);
    const s = `0${this.segs}`.slice(-2);

    return `${h}:${m}:${s}`;
  }

  set duration({ hours, mins, segs }: { hours: string, mins: string, segs: string }) {
    this.hours = hours;
    this.mins = mins;
    this.segs = segs;
  }

  defaul(hours: number, mins: number, segs: number, isDecrement: boolean) {
    const h = `0${hours}`.slice(-2);
    const m = `0${mins}`.slice(-2);
    const s = `0${segs}`.slice(-2);

    return isDecrement ? `${h}:${m}:${s}` : '00:00:00';
  }
}

export const displayTime = new TimeDisplay()