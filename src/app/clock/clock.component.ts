import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Clock } from './clock';
import { SettingService } from '../setting.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {
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
  	this.localClock.start();
  }

  ngOnDestroy() {
    this.localClock.stop();
  }

  updateSettings(): void {
    this.show24h = this.settingService.getSetting('mikuru-clock-24h');
    this.showSeconds = this.settingService.getSetting('mikuru-clock-seconds');
  }
}
