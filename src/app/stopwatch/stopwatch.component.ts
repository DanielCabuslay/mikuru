import { Component, OnInit, OnDestroy } from '@angular/core';
import { Stopwatch } from './stopwatch';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit, OnDestroy {
	stopwatch: Stopwatch;
	fabText: string;
	play: string = "play_arrow";
	pause: string = "pause";

  constructor() {
  	this.stopwatch = new Stopwatch();
  	this.fabText = this.play;
  }

  ngOnInit() {
  }

  startStopwatch() {
  	if(this.stopwatch.getStatus()) {
  		this.stopwatch.stop();
  		this.fabText = this.play;
  	} else {
  		this.stopwatch.start();
  		this.fabText = this.pause;
  	}
  }

  resetStopwatch() {
  	this.stopwatch.stop();
  	this.stopwatch.setTime(0);
  	this.fabText = this.play;
  }

  ngOnDestroy() {
  	this.stopwatch.stop();
  }

}
