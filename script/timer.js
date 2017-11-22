var timerCentiseconds = 0;
var originalTimer = 0;
var timerActive = false;
var timerAlarm = new Audio('media/timer_expire.ogg');
var timer; // interval variable
var timerBlinkInterval;

timerAlarm.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

function timerDisplay(centiseconds) {
	if (centiseconds >= 360000) { // >1h
		if ($('#second-timer-switch').is(':checked')) 
			return moment.duration(centiseconds * 10).hours() + ':mm:ss.S';
		return moment.duration(centiseconds * 10).hours() + ':mm:ss';
	} if (centiseconds < 360000 && centiseconds >= 60000) { //59m59s-10m
		if ($('#second-timer-switch').is(':checked')) 
			return 'mm:ss.S';
		return 'mm:ss';
	} if (centiseconds < 60000 && centiseconds >= 6000) { //9m59s-1m
		if ($('#second-timer-switch').is(':checked')) 
			return 'm:ss.S';
		return 'm:ss';
	} if (centiseconds < 6000 && centiseconds >= 1000) { // 59s-10s
		if ($('#second-timer-switch').is(':checked')) 
			return 'ss.S';
		return 'ss';
	}
	if ($('#second-timer-switch').is(':checked')) 
		return 's.S';
	return 's'; // 9.9s-0.0s
}

function timerBlink() {
	if ($('#countdown').css('visibility') == 'visible') {
		$('#countdown').css('visibility', 'hidden');
	} else {
		$('#countdown').css('visibility', 'visible');
	}
}
function timerBlinkStop() {
	clearInterval(timerBlinkInterval);
	$('#countdown').css('visibility', 'visible');
}

function updateCountdown() {
	timeDisplay = moment.duration(timerCentiseconds * 10);
	if (!$('#second-timer-switch').is(':checked') && timerCentiseconds > 0 && timerActive) 
		timeDisplay = moment.duration((timerCentiseconds + 99) * 10); 
	$('#countdown').text(moment(timeDisplay.asMilliseconds()).format(timerDisplay(timerCentiseconds)));	
}

function stopCountdown() {
	clearInterval(timer);
	$('#countdown').addClass('accent');
	$('#timer_pause').css('display', 'none');
	$('#timer_stop').css('display', 'inline-block');
	timerBlinkInterval = setInterval(timerBlink, 500);
}

function countdown() {
	if (timerCentiseconds > 0) {
		timerCentiseconds -= 1;
		updateCountdown();
	} else {
		timerActive = false;
		if ($('#sound-timer-switch').is(':checked')) 
			timerAlarm.play();
		stopCountdown();
	}
}

function timerInvalidInput() {
	$('#timer .mdc-text-field input').val('');
	$('#timer .mdc-text-field-helptext').text('Invalid input. hh:mm:ss');
}

$('#timer_play').click(function() {
	timerBlinkStop();
	if (!timerActive) {
		var time = $('#timer_textfield').val();
		var timeSplit = time.split(':').reverse();
		var totalSeconds = 0;
		for (i = 0; i < timeSplit.length; i++) {
			totalSeconds += timeSplit[i] * Math.pow(60, i);
		}
		timerCentiseconds = totalSeconds * 100;
		originalTimer = timerCentiseconds;
	}
	if (timerCentiseconds < 8640000 && timerCentiseconds > 0) {
		$('#timer_tab .tab_circle_overlay').css('display', 'block');
		$('#countdown_clock').css('display', 'flex');
		timerActive = true;
		updateCountdown();
		$('#timer_play, #timer_reset, #timer .mdc-text-field, .mdc-text-field-helptext').css('display', 'none');
		$('#timer_pause, #timer_add_time, #timer_delete, #timer_add_timer').css('display', 'inline-block');
		timer = setInterval(countdown, 10);
	} else {
		timerInvalidInput();
	}
});

$('#timer_pause').click(function() {
	clearInterval(timer);
	timerBlinkInterval = setInterval(timerBlink, 500);
	$('#timer_pause, #timer_add_time').css('display', 'none');
	$('#timer_play, #timer_reset').css('display', 'inline-block');
});

$('#timer_delete').click(function() {
	timerAlarm.pause();
	timerAlarm.currentTime = 0;
	clearInterval(timer);
	timerBlinkStop();
	$('#countdown').removeClass('accent');
	$('#timer_play').css('display', 'inline-block');
	$('#timer .mdc-text-field').css('display', 'inline-flex');
	$('.mdc-text-field-helptext').css('display', 'block');
	$('#timer_tab .tab_circle_overlay, #countdown_clock, #timer_stop, #timer_pause, #timer_delete, #timer_add_timer').css('display', 'none');
	timerActive = false;
	$('#timer .mdc-text-field input').val('');
	$('#timer .mdc-text-field-helptext').text('hh:mm:ss');
});

$('#timer_reset').click(function() {
	timerCentiseconds = originalTimer;
	updateCountdown();
	timerBlinkStop();
});

$('#timer_stop').click(function() {
	timerAlarm.pause();
	timerAlarm.currentTime = 0;
	clearInterval(timer);
	timerBlinkStop();
	$('#countdown').removeClass('accent');
	$('#timer_tab .tab_circle_overlay, #timer_stop, #timer_add_time').css('display', 'none');
	$('#timer_play, #timer_reset').css('display', 'inline-block');
	timerCentiseconds = originalTimer;
	updateCountdown();
});

$('#timer_add_time').click(function() {
	timerAlarm.pause();
	timerAlarm.currentTime = 0;
	timerBlinkStop();
	timerCentiseconds += 6000;
	updateCountdown();
	if (!timerActive) {
		$('#countdown').removeClass('accent');
		$('#timer_stop').css('display', 'none');
		$('#timer_pause').css('display', 'inline-block');
		timerActive = true;
		timer = setInterval(countdown, 10);
	}
});

(function() {
	mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
})();