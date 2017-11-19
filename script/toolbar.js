(function() {
    var pollId = 0;
    pollId = setInterval(function() {
        var pos = getComputedStyle(document.querySelector('.mdc-toolbar')).position;
        if (pos === 'fixed' || pos === 'relative') {
            init();
            clearInterval(pollId);
        }
    }, 250);
    function init() {
        var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
        toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
    }
})();

(function() {
	setTimeout(function () {
		window.toolbarTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#toolbar-tab-bar'));
	},200)
})();

$('#clock_tab').click(function() {
	$('.tab-content').css('display', 'none');
	$('#clock').css('display', 'block');
	$('.mdc-toolbar__title').text('Clock');
});
$('#timer_tab').click(function() {
	$('.tab-content').css('display', 'none');
	$('#timer').css('display', 'block');
	$('.mdc-toolbar__title').text('Timer');
});
$('#stopwatch_tab').click(function() {
	$('.tab-content').css('display', 'none');
	$('#stopwatch').css('display', 'block');
	$('.mdc-toolbar__title').text('Stopwatch');
});
$('#settings_tab').click(function() {
	$('.tab-content').css('display', 'none');
	$('#settings').css('display', 'block');
	$('.mdc-toolbar__title').text('Settings');
});