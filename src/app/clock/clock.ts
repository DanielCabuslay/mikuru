export class Clock {
	date: Date;
	interval;

	constructor() {
		this.date = new Date();
	}

	getHours(show24h: boolean) {
		let hours = this.date.getHours();
		if (!show24h) {
			if (hours > 12) {
				hours -= 12;
			}
		}
		return hours.toString();
	}

	getMinutes() {
		let minutes = this.date.getMinutes();
		if (minutes < 10) {
			return '0' + minutes.toString();
		}
		return this.date.getMinutes().toString();
	}

	getSeconds() {
		let seconds = this.date.getSeconds();
		if (seconds < 10) {
			return '0'.concat(seconds.toString());
		}
		return seconds.toString();
	}

	getAmPm() {
		let hour = this.date.getHours();
		if (hour < 12) {
			return 'AM';
		}
		return 'PM';
	}

	getDay() {
		let day = this.date.getDay();
		switch(day) {
			case 0: return "Sunday"
			case 1: return "Monday"
			case 2: return "Tuesday"
			case 3: return "Wednesday"
			case 4: return "Thursday"
			case 5: return "Friday"
			case 6: return "Saturday"
		}
	}

	getDate() {
		return this.date.getDate().toString();
	}

	getMonth() {
		let month = this.date.getMonth();
		switch(month) {
			case 0: return "January"
			case 1: return "February"
			case 2: return "March"
			case 3: return "April"
			case 4: return "May"
			case 5: return "June"
			case 6: return "July"
			case 7: return "August"
			case 8: return "September"
			case 9: return "October"
			case 10: return "November"
			case 11: return "December"
		}
	}

	getYear() {
		return this.date.getFullYear().toString();
	}

	start() {
		this.interval = setInterval(() => { this.updateTime(); }, 1000);
	}

	stop() {
		clearInterval(this.interval);
	}

	updateTime() {
		this.date = new Date();
	}

}
