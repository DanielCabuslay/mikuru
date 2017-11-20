function timerDisplay(seconds) {
	if (seconds >= 3600) {
		if ($('#second-timer-switch').is(':checked')) 
			return moment.duration(seconds * 1000).hours() + ':mm';
		return moment.duration(seconds * 1000).hours() + ':mm:ss';
	} if (seconds < 3600 && seconds >= 600) {
		if ($('#second-timer-switch').is(':checked')) 
			return '0:mm';
		return 'mm:ss';
	}
	return 'm:ss';
}

(function() {
	mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
})();

$('#timer_play').click(function() {
	var time = $('#timer_textfield').val();
	//TODO: do regex check for proper format
	var timeSplit = time.split(':').reverse();
	var seconds = 0;
	for (i = 0; i < timeSplit.length; i++) {
		seconds += timeSplit[i] * Math.pow(60, i);
	}
	if (seconds > 0) {
		$('#timer_tab i').addClass('active');
		var timeDisplay = moment.duration(seconds * 1000);
		$('#countdown').text(moment(timeDisplay.asMilliseconds()).format(timerDisplay(seconds)));
		$('#timer_play').css('display', 'none');
		$('#timer_pause').css('display', 'inline-block');
		$('#timer .mdc-text-field, .mdc-text-field-helptext').css('display', 'none');
		var timer = setInterval(function() {
			seconds -= 1;
			timeDisplay = moment.duration(seconds * 1000);
			$('#countdown').text(moment(timeDisplay.asMilliseconds()).format(timerDisplay(seconds)));
			if (seconds == 0) {
			$('#timer_tab i').removeClass('active');
				clearInterval(timer);
			}
		}, 1000);
	}
});

$('#timer_pause').click(function() {
	$('#timer_pause').css('display', 'none');
	$('#timer_play').css('display', 'inline-block');
});