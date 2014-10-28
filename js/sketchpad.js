$(document).ready(function() {
	for (var i = 0; i < 32; i++) {
		for (var j = 0; j < 32; j++) {
			$(".container").append("<div class='square'></div>");
		}
		$(".container").append("<div class='new_row'></div>");
	}
	var square_size = ($(".container").width() / 32) - 2.5;
	$(".square").css("width", square_size);
	$(".square").css("height", square_size);

	$(document).on("mouseenter", ".square", function() {
		$(this).addClass("square_highlight");
	});
});