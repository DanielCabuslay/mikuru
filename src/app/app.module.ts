import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ClockComponent } from './clock/clock.component';
import { SettingsComponent } from './settings/settings.component';
import { TimerComponent } from './timer/timer.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    SettingsComponent,
    TimerComponent,
    StopwatchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule, 
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }