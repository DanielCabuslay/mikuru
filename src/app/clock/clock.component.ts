import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Clock } from './clock';
import { SettingService } from '../setting.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
	localClock: Clock;
  show24h: boolean;
  showSeconds: boolean;

  constructor(private settingService: SettingService) {
    this.localClock = new Clock();
  }

  ngOnInit() {
    this.updateSettings();
    this.settingService.watchStorage().subscribe(() => {
      this.updateSettings();
    });
  	this.update();
  	setInterval(() => { this.update(); }, 1000);
  }

  update(): void {
		this.localClock.updateTime();
  }

  updateSettings(): void {
    this.show24h = this.settingService.getSetting('mikuru-clock-24h');
    this.showSeconds = this.settingService.getSetting('mikuru-clock-seconds');
  }
}
