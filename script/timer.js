(function() {
	mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
})();

$('#timer button').click(function() {
	var time = $('#timer_textfield').val();
	var timeSplit = time.split(':').reverse();
	var seconds = 0;
	for (i = 0; i < timeSplit.length; i++) {
		seconds += timeSplit[i] * Math.pow(60, i);
	}
	$('#countdown').text(seconds);
	var timer = setInterval(function() {
		seconds -= 1;
		$('#countdown').text(seconds);
		if (seconds == 0) {
			clearInterval(timer);
		}
	}, 1000);
});