var stopwatchCentiseconds = 0;
var stopwatchActive = false;
var stopwatch; // interval variable
var stopwatchBlinkInterval;

function stopwatchDisplay(centiseconds) {
	if (centiseconds >= 360000) { // >1h
		return moment.duration(centiseconds * 10).hours() + ':mm:ss.SS';
	} if (centiseconds < 360000 && centiseconds >= 60000) { //59m59s-10m
		return 'mm:ss.SS';
	} if (centiseconds < 60000 && centiseconds >= 6000) { //9m59s-1m
		return 'm:ss.SS';
	} if (centiseconds < 6000 && centiseconds >= 1000) { // 59s-10s
		return 'ss.SS';
	}
	return 's.SS'; // 9.9s-0.0s
}

function updateStopwatch() {
	timeDisplay = moment.duration(stopwatchCentiseconds * 10);
	timeDisplaySplit = moment(timeDisplay.asMilliseconds()).format(stopwatchDisplay(stopwatchCentiseconds)).split('.');
	$('#stopwatch_time').text(timeDisplaySplit[0]);
	$('#stopwatch_fractional').text(timeDisplaySplit[1]);
}

function countUp() {
	stopwatchCentiseconds += 1;
	updateStopwatch();
}

function stopwatchBlink() {
	if ($('#stopwatch_clock span').css('visibility') == 'visible') {
		$('#stopwatch_clock span').css('visibility', 'hidden');
	} else {
		$('#stopwatch_clock span').css('visibility', 'visible');
	}
}

function stopwatchBlinkStop() {
	clearInterval(stopwatchBlinkInterval);
	$('#stopwatch_clock span').css('visibility', 'visible');
}

$('#stopwatch_play').click(function() {
	stopwatchBlinkStop();
	stopwatchActive = true;
	updateStopwatch();
	stopwatch = setInterval(countUp, 10);
	$('#stopwatch_tab .tab_circle_overlay').css('display', 'block');
	$('#stopwatch_play').css('display', 'none');
	$('#stopwatch_pause, #stopwatch_reset').css('display', 'inline-block');
});

$('#stopwatch_pause').click(function() {
	clearInterval(stopwatch);
	stopwatchBlinkStop();
	stopwatchBlinkInterval = setInterval(stopwatchBlink, 500);
	$('#stopwatch_pause').css('display', 'none');
	$('#stopwatch_play').css('display', 'inline-block');
});

$('#stopwatch_reset').click(function() {
	stopwatchBlinkStop();
	clearInterval(stopwatch);
	stopwatchCentiseconds = 0;
	updateStopwatch();
	$('#stopwatch_reset, #stopwatch_pause, #stopwatch_tab .tab_circle_overlay').css('display', 'none');
	$('#stopwatch_play').css('display', 'inline-block');
});