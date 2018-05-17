import { Component, OnInit } from '@angular/core';
import { ClockComponent } from './clock/clock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	ngOnInit() {
		if (!localStorage.getItem('mikuru-lastUpdated')) {
			localStorage.setItem('mikuru-clock-24h', 'false');
			localStorage.setItem('mikuru-clock-seconds', 'false');
			// localStorage.setItem('mikuru-timer-alarm', 'true');
			// localStorage.setItem('mikuru-timer-deciseconds', 'true');
			localStorage.setItem('mikuru-general-dark', 'false');
			localStorage.setItem('mikuru-lastUpdated', Date.now().toString());
		}
	}
  
}
