import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
	private settings = new Subject<any>();

  changeSetting(setting: string): void {
  	let newValue = !(localStorage.getItem(setting) == 'true');
  	localStorage.setItem(setting, newValue.toString());
  	this.settings.next(setting);
  }

  getSetting(setting: string): boolean {
  	return localStorage.getItem(setting) == 'true';
  }

  watchStorage(): Observable<any> {
  	return this.settings.asObservable();
  }

}
