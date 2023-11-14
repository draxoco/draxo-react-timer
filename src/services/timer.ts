export class Timer {
  private timerObj: NodeJS.Timeout | null
  readonly fn: () => void
  readonly t: number

  constructor (fn: () => void, t: number) {
    this.timerObj = setInterval(fn, t)
    this.fn = fn
    this.t = t
  }

  stop (): void {
    if (this.timerObj !== null) {
      clearInterval(this.timerObj)
      this.timerObj = null
    }
  }
}
