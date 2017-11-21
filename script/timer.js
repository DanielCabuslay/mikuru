var totalSeconds = 0;
var timerActive = false;
var timer; // interval variable

function timerDisplay(seconds) {
	if (seconds >= 3600) {
		if ($('#second-timer-switch').is(':checked')) 
			return moment.duration(seconds * 1000).hours() + ':mm';
		return moment.duration(seconds * 1000).hours() + ':mm:ss';
	} if (seconds < 3600 && seconds >= 600) {
		if ($('#second-timer-switch').is(':checked')) 
			return '0:mm';
		return 'mm:ss';
	} if (seconds < 600 && seconds >= 60) {
		return 'm:ss';
	} if (seconds < 60 && seconds >= 10) {
		return 'ss';
	}
	return 's';
}

function updateCountdown() {
	timeDisplay = moment.duration(totalSeconds * 1000);
	$('#countdown').text(moment(timeDisplay.asMilliseconds()).format(timerDisplay(totalSeconds)));	
}

function stopCountdown() {
	clearInterval(timer);
	$('#countdown').addClass('accent');
	$('#timer_pause').css('display', 'none');
	$('#timer_stop').css('display', 'inline-block');
}

function countdown() {
	if (totalSeconds > 0) {
		totalSeconds -= 1;
		updateCountdown();
	} else {
		timerActive = false;
		stopCountdown();
	}
}

$('#timer_play').click(function() {
	if (!timerActive) {
		var time = $('#timer_textfield').val();
		var timeSplit = time.split(':').reverse();
		//TODO: do regex check for proper format
		totalSeconds = 0;
		for (i = 0; i < timeSplit.length; i++) {
			totalSeconds += timeSplit[i] * Math.pow(60, i);
		}
	}
	if (totalSeconds > 0) {
		timerActive = true;
		$('#timer_tab .tab_circle_overlay').css('display', 'block');
		$('#countdown_clock').css('display', 'block');
		updateCountdown();
		$('#timer_play, #timer_reset, #timer .mdc-text-field, .mdc-text-field-helptext').css('display', 'none');
		$('#timer_pause, #timer_add_time, #timer_delete, #timer_add_timer').css('display', 'inline-block');
		timer = setInterval(countdown, 1000);
	} 
});

$('#timer_pause').click(function() {
	clearInterval(timer);
	$('#timer_pause, #timer_add_time').css('display', 'none');
	$('#timer_play, #timer_reset').css('display', 'inline-block');
});

$('#timer_stop, #timer_delete').click(function() {
	clearInterval(timer);
	$('#countdown').removeClass('accent');
	$('#timer_tab .tab_circle_overlay').css('display', 'none');
	$('#timer_play').css('display', 'inline-block');
	$('#timer .mdc-text-field').css('display', 'inline-flex');
	$('.mdc-text-field-helptext').css('display', 'block');
	$('#countdown_clock, #timer_stop, #timer_pause, #timer_delete, #timer_add_timer').css('display', 'none');
	timerActive = false;
	$('#timer .mdc-text-field input').val('');
});

$('#timer_add_time').click(function() {
	totalSeconds += 60;
	updateCountdown();
	if (!timerActive) {
		$('#countdown').removeClass('accent');
		$('#timer_stop').css('display', 'none');
		$('#timer_pause').css('display', 'inline-block');
		timerActive = true;
		timer = setInterval(countdown, 1000);
	}
});

(function() {
	mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
})();