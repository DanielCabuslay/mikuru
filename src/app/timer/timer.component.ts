import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SettingService } from '../setting.service';
import { Timer } from './timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @ViewChild('numInput') numInput: ElementRef;
  hours: number;
  minutes: number;
  seconds: number;
  showDeciseconds: boolean;
  playAlarm: boolean;
  input: string;
  fabText: string;
  timer: Timer;
  
	play: string = "play_arrow";
  pause: string = "pause";
  stop: string = "stop";

  constructor(private settingService: SettingService) {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.input = '';
    this.fabText = this.play;
  }

  ngOnInit() {
    this.updateSettings();
    this.settingService.watchStorage().subscribe(() => {
      this.updateSettings();
    })
  }

  getHours(): string {
    if (this.hours < 10) 
      return '0' + this.hours.toString();
    return this.hours.toString();
  }

  getMinutes(): string {
    if (this.minutes < 10) 
      return '0' + this.minutes.toString();
    return this.minutes.toString();
  }
  getSeconds(): string {
    if (this.seconds < 10) 
      return '0' + this.seconds.toString();
    return this.seconds.toString();
  }

  processInput(input): void {
    if (input.length > 6) {
      console.log("long");
      this.input = input.slice(0, 6);
    } else {
      if (input == '0' && this.input.length == 0) {
        this.input = input.substr(0, 0);
      } else {
        this.input = input;
        this.formatInput();
      }
    }
  }

  deleteInput(): void {
    if (this.input.length > 0) {
      let newInput = this.input.substr(0, (this.input.length - 1));
      this.input = newInput;
    }
    this.formatInput();
  }

  formatInput(): void {    
    let formattedInput = this.input;
    while (formattedInput.length < 6) {
      formattedInput = '0' + formattedInput;
    }
    this.hours = +formattedInput.slice(0, 2);
    this.minutes = +formattedInput.slice(2, 4);
    this.seconds = +formattedInput.slice(4, 6);
  }

  resetInput(): void {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.input = '';
  }

  createTimer(): void {
    if (this.seconds > 0 || (this.seconds == 0 && this.minutes > 0 || this.hours > 0)) {
      this.timer = new Timer(this.hours, this.minutes, this.seconds);
      this.fabText = this.pause;
      this.resetInput();
    }
  }

  pauseTimer(): void {
    if (this.timer.getStatus()) {
      this.timer.stop();
      this.fabText = this.play;
    } else {
      this.timer.start();
      this.fabText = this.pause;
    }
  }

  deleteTimer(): void {
    this.timer.stop();
    this.timer = null;
    setTimeout(function() {
      document.getElementById("num_input").focus();
    }, 100);
  }

  addTimer(): void {
    //to be implemented
  }

  updateSettings(): void {
    this.playAlarm = this.settingService.getSetting('mikuru-timer-alarm');
    this.showDeciseconds = this.settingService.getSetting('mikuru-timer-deciseconds');
  }

}
