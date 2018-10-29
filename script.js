$(document).ready(function() {
	var listItems = [];
	
	$("#add-button").click(function() {
		listItems.push($("#list-input").val());
		$("ol").html("");
		for(var i = 0; i < listItems.length; i++)
		{
			$("ol").append("<li><p>" + listItems[i] + "</p><button class=\"remove-button\" onclick=\"remove()\">Delete</button><button class=\"edit-button\" onclick=edit()>Edit</button></li>");
		}
		
	});
	
	$(".edit-button").click(function(e) {
		e.stopPropagation();
		$("li").html($("#list-input").val() + "<button class=\"remove-button\" onclick=\"remove()\">" + "Delete" + "</button>" + "<button class=\"edit-button\" onclick=\"edit()\">" + "Edit" + "</button>");
	});
	
	$("#delete-button").click(function() {
		$("li").remove();
	});
});

function edit() {
	console.log($(this).parent());
	//$("li").html($("#list-input").val() + "<button class=\"remove-button\" onclick=\"remove()\">" + "Delete" + "</button>" + "<button class=\"edit-button\" onclick=\"edit()\">" + "Edit" + "</button>");
}

//note: deleting specific list items may take multiple presses to activate the function
function remove() {
	$(".remove-button").click(function() {
		console.log("removing");
		console.log($(this).parent());
		$(this).parent().remove();
	});
}