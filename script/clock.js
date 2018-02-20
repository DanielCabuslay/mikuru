function clockUpdate() {
	var timeFormat = 'mm';
	if (localStorage.getItem('mikuru-clock-seconds') == 'true') {
		timeFormat += ':ss';
	}
	if (localStorage.getItem('mikuru-clock-24h') == 'true') {
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