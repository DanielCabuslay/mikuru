$('#dark-switch').click(function() {
	if ($('#dark-switch').is(':checked')) {
		$('#theme').attr('href', 'style/theme_dark.css');
	} else {
		$('#theme').attr('href', 'style/theme_light.css');
	}
});
