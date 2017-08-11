

$("#14mile").on("click", function(){
	var something = document.getElementById("theOne").value
	document.getElementById("theForm").reset();
	console.log("this works");
	console.log(something);
	var newTime = something * 1.5832;
	console.log(newTime);
	var newNewTime = newTime.toFixed(2); 
	$("#answer").html("<h3>The 1/4 mile E.T. will be " + newNewTime +"</h3>") 
});

$("#18mile").on("click", function(){
	var something = document.getElementById("theOther").value
	document.getElementById("otherForm").reset();
	console.log("this works");
	console.log(something);
	var newTime = something / 1.5832;
	console.log(newTime);
	var newNewTime = newTime.toFixed(2); 
	$("#answer").html("<h3>The 1/8 mile E.T. will be " + newNewTime +"</h3>")
});
