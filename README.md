# Clock, Timer & Stopwatch: Mikuru
Mikuru is a clock webpage, similar to Google's [Clock app](https://play.google.com/store/apps/details?id=com.google.android.deskclock) on Google Play. Mikuru has a working clock, timer and stopwatch, as well as a dark/light theme switcher. The timer and stopwatch are precise to the hundredth of a second, despite not always showing time to that precision.

## How to Use
There are currently four tabs: Clock, Timer, Stopwatch and Settings

### Clock
The clock will show the user's local time and date.

### Timer
The timer will countdown from a user-specified amount of time to 0. The user must enter a time in the following format: 
```
hh:mm:ss
```
The timer will currently accept any amount of time up to a maximum of 23 hours, 59 minutes and 59 seconds (23:59:59). Only one timer can be active at one time.

The user can reset the timer while the timer is paused, or add an extra minute to the timer while it is active. The delete button will delete the current timer and allow the user to input another time limit.
#### Valid Input Examples
* 30 (30 seconds)
* 90 (1 minute 30 seconds)
* 2:45 (2 minutes 45 seconds)
* 15:00 (15 minutes)
* 1:00:00 (1 hour)
* 12:00:00 (12 hours)
### Stopwatch
The stopwatch will keep track of time from the moment the user presses the Start button. The stopwatch will show time precise to the hundredth of a second. The stopwatch can be paused during operation and reset back to 0.

### Settings
Various settings can be adjusted in this tab:

#### Clock Settings
* 24-hour clock: Allows the user to switch between the use of a 12-hour or 24-hour clock
* Show seconds: Allows the user to see the second count on the clock

#### Timer Settings
* Timer alarm: Plays an alarm sound when the timer reaches 0. On by default.
* Show deciseconds: Allows the user to see the timer countdown tenths of a second

#### General Settings
* Dark mode: Turns all the bright surfaces of the page dark. Ideal for night usage

## Known Issues
* If deciseconds are not shown on timer, it would seem that the timer immediately removes one second from countdown. This is due to how momentjs formats duration. The actual timing is accurate.
* Stopwatch will not properly display any time above 24 hours

## Acknowledgments
* [Material Components Web](https://github.com/material-components/material-components-web)
* [Moment.js](https://momentjs.com/)

## Changelog
* v1.0.0 (November 22, 2017)
	* Initial release

![Image of Mikuru](https://vignette.wikia.nocookie.net/haruhi/images/4/4d/Mikuru_Asahina.png)