export class Timer {
  centiseconds: number;
  interval;
  active: boolean;
  // timerAlarm = new Audio('../../assets/media/timer_alarm.ogg');

  constructor(hours: number, minutes: number, seconds: number) {
    this.centiseconds = ((hours * 3600) + (minutes * 60) + seconds) * 100;
    this.start();
    // this.timerAlarm.addEventListener('ended', function() {
    //   this.play();
    // }, false);
  }

  decrementTime(): void {
    this.centiseconds--;
  }

  formatTime(hours: number, minutes: number, seconds: number): string {
		if (this.centiseconds >= 360000) {
			if (minutes < 10 && seconds < 10)
				return hours.toString() + ":0" + minutes.toString() + ":0" + seconds.toString();
			if (minutes < 10)
				return hours.toString() + ":0" + minutes.toString() + ":" + seconds.toString();
			if (seconds < 10)
				return hours.toString() + ":" + minutes.toString() + ":0" + seconds.toString();
			return hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
		}
		if (this.centiseconds >= 6000) {
			if (seconds < 10) 
				return minutes.toString() + ":0" + seconds.toString();
			return minutes.toString() + ":" + seconds.toString();
		}
  }
  
  getFractionalSeconds(): string {
		let fractional = this.centiseconds % 100;
		if (fractional < 10 && this.centiseconds > 0) 
			return '0';
    if (this.centiseconds > 0)
      return fractional.toString().substr(0, 1);
    if (this.centiseconds < 0)
      return (fractional * -1).toString().substr(0, 1);
	}

  getStatus(): boolean {
    return this.active;
  }

  getTime(): string {
		let totalSeconds = Math.floor(this.centiseconds / 100);
		if (totalSeconds >= 60) {
			let hours = Math.floor(totalSeconds / 3600);
			let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
			let seconds = totalSeconds - (hours * 3600) - (minutes * 60);
			return this.formatTime(hours, minutes, seconds);
		}
		return Math.floor(this.centiseconds / 100).toString();
	}

  start(): void {
    this.active = true;
    this.interval = setInterval(() => { this.decrementTime() }, 10);
  }

  stop(): void {
    clearInterval(this.interval);
    this.active = false;
  }

}
