function initInteractiveLists() {
  var interactiveListItems = document.querySelectorAll('.mdc-list li');
  for (var i = 0, li; li = interactiveListItems[i]; i++) {
    mdc.ripple.MDCRipple.attachTo(li);
    li.addEventListener('click', function(evt) {
      evt.preventDefault();
    });
  }
}

function settingsToggle(element) {
	if (element.attr('id') == '24h-switch' || element.attr('id') == 'second-clock-switch') {
		clockUpdate();		
	} else if (element.attr('id') == 'second-timer-switch') {
		updateCountdown();
	} else if (element.attr('id') == 'dark-switch') {
		if ($('#dark-switch').is(':checked')) {
			$('#theme').attr('href', 'style/theme_dark.css');
			$("meta[name='theme-color']").attr('content', '#212121');
		} else {
			$('#theme').attr('href', 'style/theme_light.css');
			$("meta[name='theme-color']").attr('content', '#fafafa');
		}
	}
}

$('#settings .mdc-list-item input').click(function(evt) {
  evt.stopPropagation();
  settingsToggle($(this));
});

$('#settings .mdc-list-item').click(function() {
	if ($(this).find('input').prop('checked') == true) {
		$(this).find('input').prop('checked', false);
	} else {
		$(this).find('input').prop('checked', true);
	}
	settingsToggle($(this).find('input'))
});

