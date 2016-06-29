$(document).ready(function() {
	$('.header-not-main').hide();
	$('.header-not-main').fadeIn(1000);

	$('#big-image').hide();
	$('#big-image').fadeIn(500);

	$('.small-images').click(function() {

	 	event.preventDefault();

		var caption = "";
		var imageNo = 1;

		$('#big-image').hide();
		$('#big-image').fadeIn(500);

		var bigImage = $(this).attr("src");
		$('#big-image').attr("src", bigImage);

	});
})