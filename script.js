$(document).ready(function() {
	// Varialbes Used for Logic Go Below:
	// Your Code Goes Here!
	$("#add-button").click(function() {
		$("ol").append("<li>" + $("#list-input").val() + "<button class=\"remove-button\" onclick=\"remove()\">" + "Delete" + "</button>" + "<button class=\"edit-button\" onclick=\"edit()\">" + "Edit" + "</button>" + "</li>");
	});
	$("#delete-button").click(function() {
		$("li").remove();
	});
	
});
function edit() {
	debugger;
	$(this).parent().append("<input class='edit-input'>");
	console.log($(this).parent());
}

function remove() {
	$(".remove-button").click(function() {
		console.log("removing");
		$(this).parent().remove();
	});
}