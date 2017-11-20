function clockUpdate() {
	var timeFormat = 'mm';
	if ($('#second-switch').is(':checked')) {
		timeFormat += ':ss';
	}
	if ($('#24h-switch').is(':checked')) {
		timeFormat = 'H:' + timeFormat;
		$('#time_ampm').html('');
	} else {
		timeFormat = 'h:' + timeFormat;
		$('#time_ampm').html(moment().format('A'));
	}
	$('#time_numeral').html(moment().format(timeFormat));
	$('#date').html(moment().format('ddd, MMM D'));
}
clockUpdate();
setInterval(clockUpdate, 1000);