var mode = "OneColor";

$(document).ready(function() {

	mode = $("input[name=mode]:checked").val();
	make_grid(32);

	$("input").click(function() {
		mode = $("input[name=mode]:checked").val();
	});

	$(document).on("mouseenter", ".square", function() {
		if (mode === "OneColor") {
			$(this).css("background-color", "#00BFFF");
			$(this).css("opacity", "1");
		} else if (mode === "RandomColor") {
			var rand_rgb = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
			$(this).css("background-color", rand_rgb);
			$(this).css("opacity", "1");
		} else {
			$(this).css("opacity", $(this).css("opacity") - 0.1);
		}
	});
});

var make_grid = function(num_squares) {

	$(".container").html(""); // wipe grid first

	for (var i = 0; i < num_squares; i++) {
		for (var j = 0; j < num_squares; j++) {
			$(".container").append("<div class='square'></div>");
		}
		$(".container").append("<div class='new_row'></div>");
	}

	var square_size = ($(".container").width() / num_squares) - 2.5;
	$(".square").css("width", square_size);
	$(".square").css("height", square_size);
}

var reset = function() {
	var num_squares = prompt("Enter number of squares per side for new grid");
	make_grid(num_squares);
}
