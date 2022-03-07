console.log('yo');
$('[rel="open-sidebar"]').click(function(event) {
	$('.mobile-menu').removeClass('hidden');
});
$('[rel="close-sidebar"]').click(function(event) {
	$('.mobile-menu').addClass('hidden');
});