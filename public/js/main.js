'use strict'

	var $convert;
	var $input;
	var $output;

$(document).ready(init);

function init(){
	$input = $('#input');
	$output = $('#output');
	$input.keyup(convert);
}

function convert(){
	$.ajax("/", {"Text":$input.val()})
	.success(function(data){
		console.log("Works");
		$output.empty().append($.parseHTML(data));
	}).fail(function(err){
	console.log("FAIL!");
});
}