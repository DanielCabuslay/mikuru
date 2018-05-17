import { Component, OnInit } from '@angular/core';
import { Clock } from './clock';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
	localClock: Clock;
	localHours: string;
	localMinutes: string;
	localSeconds: string;
	localAmPm: string;
	localDay: string;
	localMonth: string;
	localDate: string;
	localYear: string;
  showAmPm: boolean;
  showSeconds: boolean;

  ngOnInit() {
    if (localStorage.getItem('mikuru-clock-24h') == 'true')
      this.showAmPm = false;
    else
      this.showAmPm = true;
    if (localStorage.getItem('mikuru-clock-seconds') == 'true')
      this.showSeconds = true;
    else
      this.showSeconds = false;
  	this.localClock = new Clock();
  	this.update();
  	setInterval(() => {
  		this.update();
  	}, 1000);
  }

  update() {
		this.localClock.updateTime();
  	this.localHours = this.localClock.getHours();
  	this.localMinutes = this.localClock.getMinutes();
  	this.localSeconds = this.localClock.getSeconds();
  	this.localAmPm = this.localClock.getAmPm();
  	this.localDay = this.localClock.getDay();
  	this.localMonth = this.localClock.getMonth();
  	this.localDate = this.localClock.getDate();
  	this.localYear = this.localClock.getYear();
  }



}
