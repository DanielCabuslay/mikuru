import { Component, OnInit, HostBinding } from '@angular/core';
import { ClockComponent } from './clock/clock.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SettingService } from './setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	darkThemeActive: boolean;
	timerActive: boolean;
	stopwatchActive: boolean;

	@HostBinding('class') componentCssClass;
	
	constructor(public overlayContainer: OverlayContainer,
							private settingService: SettingService) {
		this.timerActive = false;
		this.stopwatchActive = false;
	}


	ngOnInit() {
		if (!localStorage.getItem('mikuru-lastUpdated')) {
			localStorage.setItem('mikuru-clock-24h', 'false');
			localStorage.setItem('mikuru-clock-seconds', 'false');
			// localStorage.setItem('mikuru-timer-alarm', 'true');
			// localStorage.setItem('mikuru-timer-deciseconds', 'true');
			localStorage.setItem('mikuru-general-dark', 'false');
			localStorage.setItem('mikuru-lastUpdated', Date.now().toString());
		}
		this.getTheme();
		this.settingService.watchStorage().subscribe(() => {
			this.getTheme();
		})
	}

	getTheme(): void {
		this.darkThemeActive = this.settingService.getSetting('mikuru-general-dark');
		if (this.darkThemeActive) {
			this.componentCssClass = 'dark-theme';
		} else {
			this.componentCssClass = '';
		}
	}
  
}
