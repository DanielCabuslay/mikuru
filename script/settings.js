$('#24h-switch').click(function() {
	clockUpdate();
});
$('#second-switch').click(function() {
	clockUpdate();
});
$('#dark-switch').click(function() {
	if ($('#dark-switch').is(':checked')) {
		$('#theme').attr('href', 'style/theme_dark.css');
		$("meta[name='theme-color']").attr('content', '#212121');
	} else {
		$('#theme').attr('href', 'style/theme_light.css');
		$("meta[name='theme-color']").attr('content', '#fafafa');
	}
});
