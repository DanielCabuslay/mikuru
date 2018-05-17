import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
	clock24hSetting: boolean;
	clockSecondsSetting: boolean;

  constructor() { }

  ngOnInit() {
  	if (localStorage.getItem('mikuru-lastUpdated')) {
  		this.setSetting(this.clock24hSetting, localStorage.getItem('mikuru-clock-24h'));
  		this.setSetting(this.clockSecondsSetting, localStorage.getItem('mikuru-clock-seconds'));
  		this.setSetting(this.clockSecondsSetting, localStorage.getItem('mikuru-general-dark'));
		}
  }

  setSetting(setting: boolean, value: string) {
  	if (value == 'true') 
  		setting = true;
  	else
  		setting = false;
  }

}
