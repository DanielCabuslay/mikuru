import { Component } from '@angular/core';
import { Setting } from './setting';
import { SettingService } from '../setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
	clockSettings: Setting[];
  generalSettings: Setting[];

  constructor(private settingService: SettingService) {
    this.clockSettings = [
      new Setting('mikuru-clock-24h', 'Use 24-hour format'),
      new Setting('mikuru-clock-seconds', 'Display time with seconds')
    ];
    // this.generalSettings =  [
    //   new Setting('mikuru-general-dark', 'Dark theme'),
    // ];
  }

  toggleValue(setting: string): void {
    this.settingService.changeSetting(setting);
  }

  getValue(setting: string): boolean {
    return this.settingService.getSetting(setting);
  }

}
