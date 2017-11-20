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
	$('body').removeClass('top-align');
});
$('#timer_tab').click(function() {
	$('.tab-content').css('display', 'none');
	$('#timer').css('display', 'block');
	$('.mdc-toolbar__title').text('Timer');
	$('body').removeClass('top-align');
});
$('#stopwatch_tab').click(function() {
	$('.tab-content').css('display', 'none');
	$('#stopwatch').css('display', 'block');
	$('.mdc-toolbar__title').text('Stopwatch');
	$('body').removeClass('top-align');
});
$('#settings_tab').click(function() {
	$('.tab-content').css('display', 'none');
	$('#settings').css('display', 'block');
	$('.mdc-toolbar__title').text('Settings');
	$('body').addClass('top-align');
	setTimeout(initInteractiveLists, 250);
});