$(document).ready(function() {
	$("#add-button").click(function() {
		$("ol").append("<li><p>" + $("#list-input").val() + "</p><button class=\"remove-button\" onclick=\"remove()\">Remove</button><button class=\"edit-button\" onclick=edit()>Edit</button></li>");
	});
	
	$("#delete-button").click(function() {
		$("li").remove();
	});
});

//note: deleting specific list items may take multiple presses to activate the function
function edit() {
	console.log($(this).parent());
	$(".edit-button").click(function() {
		$(this).parent().html("<p>" + $("#list-input").val() + "</p><button class=\"remove-button\" onclick=\"remove()\">Remove</button><button class=\"edit-button\" onclick=\"edit()\">Edit</button>");
	});
	
}

//note: deleting specific list items may take multiple presses to activate the function
function remove() {
	$(".remove-button").click(function() {
		console.log("removing");
		console.log($(this).parent());
		$(this).parent().remove();
	});
}