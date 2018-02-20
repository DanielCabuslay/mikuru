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
	if (element.attr('id') == '24h-switch') {
		if (localStorage.getItem('mikuru-clock-24h') == 'true') {
			localStorage.setItem('mikuru-clock-24h', 'false');
		} else {
			localStorage.setItem('mikuru-clock-24h', 'true');
		}
		clockUpdate();
	} else if (element.attr('id') == 'second-clock-switch') {
		if (localStorage.getItem('mikuru-clock-seconds') == 'true') {
			localStorage.setItem('mikuru-clock-seconds', 'false');
		} else {
			localStorage.setItem('mikuru-clock-seconds', 'true');
		}
		clockUpdate();
	} else if (element.attr('id') == 'sound-timer-switch') {
		if (localStorage.getItem('mikuru-timer-alarm') == 'true') {
			localStorage.setItem('mikuru-timer-alarm', 'false');
		} else {
			localStorage.setItem('mikuru-timer-alarm', 'true');
		}
	} else if (element.attr('id') == 'second-timer-switch') {
		if (localStorage.getItem('mikuru-timer-deciseconds') == 'true') {
			localStorage.setItem('mikuru-timer-deciseconds', 'false');
		} else {
			localStorage.setItem('mikuru-timer-deciseconds', 'true');
		}
		updateCountdown();
	} else if (element.attr('id') == 'dark-switch') {
		if (localStorage.getItem('mikuru-general-dark') == 'false') {
			$('#theme').attr('href', 'style/theme_dark.css');
			$("meta[name='theme-color']").attr('content', '#212121');
			localStorage.setItem('mikuru-general-dark', 'true');
		} else {
			$('#theme').attr('href', 'style/theme_light.css');
			$("meta[name='theme-color']").attr('content', '#fafafa');
			localStorage.setItem('mikuru-general-dark', 'false');
		}
	}
	localStorage.setItem('mikuru-lastUpdated', moment());
}

$(document).ready(function() {
	if (!localStorage.getItem('mikuru-lastUpdated')) {
		localStorage.setItem('mikuru-clock-24h', 'false');
		localStorage.setItem('mikuru-clock-seconds', 'false');
		localStorage.setItem('mikuru-timer-alarm', 'true');
		localStorage.setItem('mikuru-timer-deciseconds', 'true');
		localStorage.setItem('mikuru-general-dark', 'false');
		localStorage.setItem('mikuru-lastUpdated', moment());
	} else {
		if (localStorage.getItem('mikuru-clock-24h') == 'true') {
			$('#24h-switch').prop("checked", true);
		} if (localStorage.getItem('mikuru-clock-seconds') == 'true') {
			$('#second-clock-switch').prop("checked", true);
		} if (localStorage.getItem('mikuru-timer-alarm') == 'true') {
			$('#sound-timer-switch').prop("checked", true);
		} if (localStorage.getItem('mikuru-timer-deciseconds') == 'true') {
			$('#second-timer-switch').prop("checked", true);
		} if (localStorage.getItem('mikuru-general-dark') == 'true') {
			$('#theme').attr('href', 'style/theme_dark.css');
			$("meta[name='theme-color']").attr('content', '#212121');
			$('#dark-switch').prop("checked", true);
		} 
	}
});

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

