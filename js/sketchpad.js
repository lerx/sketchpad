console.log("Hello world!");

$(document).ready(function() {
	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 16; j++) {
			$(".container").append("<div class='square'></div>");
		}
		//$(".container").append("<br/>");
	}
	$(".square").css("width", ($(".container").width()/16) - 2);
	$(".square").css("height", ($(".container").width()/16) - 2);
});