
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
	var newTime = something / 1.5832;
	var newNewTime = newTime.toFixed(2); 
	$("#answer").html("<h3>The 1/8 mile E.T. will be " + newNewTime +"</h3>")
});

$("#HP").on("click", function(){
	var thisTime = document.getElementById("time").value
	var thisWeight = document.getElementById("weight1").value
	document.getElementById("thirdForm").reset();
	var hrsPwr = (thisWeight / (Math.pow((thisTime/5.825),3)))
		var newHrsPwr = hrsPwr.toFixed(2)
	$("#answer").html("<h3>The horse power is approximatly " + newHrsPwr +"</h3>")
});	

$("#HP2").on("click", function(){
	var thisMph = document.getElementById("mph").value
	var thisWeight2 = document.getElementById("weight2").value
	document.getElementById("forthForm").reset();
	var hrsPwr2 = ((Math.pow((thisMph/234),3))*thisWeight2)
		var newHrsPwr2 = hrsPwr2.toFixed(2)
	$("#answer").html("<h3>The horse power is approximatly " + newHrsPwr2 +"</h3>")
});
$("#ET14").on("click", function(){
	var weight = document.getElementById("weight3").value	
	var HP = document.getElementById("HrPw").value
	document.getElementById("fifthForm").reset();
	var ET =((Math.pow((weight / HP),.333)) * 5.825)
	var newEt = ET.toFixed(2)
	$("#answer").html("<h3>The 1/4 mile E.T. is approximatly " + newEt +"</h3>")
});
$("#MPH14").on("click",function(){
	var weight = document.getElementById("weight4").value
	var HP = document.getElementById("HrPw1").value
	document.getElementById("sixthForm").reset();
	var MPH =((Math.pow((HP / weight), .333)) * 234)
	var newMPH = MPH.toFixed(2)
	$("#answer").html("<h3>The 1/4 mile MPH is approximatly " + newMPH +"</h3>")

});
