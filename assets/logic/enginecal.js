const PI = 3.1415927

//-------------------------------engine displacement--------------------------------------------
	$("#disp").on("click", function(){
	var val = document.getElementById("info")
	var strUser = val.options[val.selectedIndex].value;
	console.log(strUser)	


	if(strUser === "1") {
		//console.log("here I am")
		cubicInches()
	}else if(strUser === "2"){
		metric()
	}
});
//for cubic inches
function cubicInches(){
	//$("#disp").on("click", function(){

	var bore = document.getElementById("bore").value
	var stroke = document.getElementById("stroke").value
	var cylnum = document.getElementById("numCyl").value
	document.getElementById("secondForm").reset();
	var disp
	var cylVol

	disp = PI/4 * (Math.pow(bore,2)*stroke) * cylnum 
	cylVol =PI/4 * (Math.pow(bore,2)*stroke)

	var newDisp = disp.toFixed(0)
	var newCylVol = cylVol.toFixed(2)
	console.log("The displacement is " + newDisp)
	console.log("The cylinder volume is " + newCylVol)
	
	$("#answer").html("<h3>The engines displacement is " + newDisp +
		" cubic inches</h3>"+"<br>"+"<h3>The cylinder volume is "+ newCylVol+" cubic inches </h3>")
	}
// for metric in mm
function metric(){
	
	var bore = document.getElementById("bore").value
	var stroke = document.getElementById("stroke").value
	var cylnum = document.getElementById("numCyl").value
	document.getElementById("secondForm").reset();
	var displace
	var disp1
	var cylVol

	displace = PI/4 * (Math.pow(bore,2)*stroke) * cylnum
	cylVol = PI/4 * (Math.pow(bore,2)*stroke)

	displace = displace/1000000;
	cylVol = cylVol/1000000;
	var newDisp = displace.toFixed(0)
	var newCylVol = cylVol.toFixed(2)
	console.log("The displacement is " + newDisp)
	console.log("The cylinder volume is " + newCylVol)

	$("#answer").html("<h3>The engines displacement is " + newDisp +
		" liters</h3>"+"<br>"+"<h3>The cylinder volume is "+ newCylVol+" liters</h3>")	
  }
//--------------------------------carb size calculation-----------------------------------------
	$("#carb").on("click", function(){
		var cid = document.getElementById("cid").value
		var rpm = document.getElementById("rpm").value
		document.getElementById("firstForm").reset();
		var crbCFM = ((cid * rpm) / 3456)
		console.log(crbCFM);
			var newCarb = crbCFM.toFixed(0)
		$("#answer").html("<h3>The ideal carburator for your engine would be " + newCarb +" CFM</h3>")
	});	
//------------------------------Torque calculation------------------------------------------
	//torque = 5252 x horsepower / rpm 
	$("#torque").on("click", function(){
		var hrspwr = document.getElementById("hrspwr").value
		var rpms = document.getElementById("rpms").value
		document.getElementById("thirdForm").reset();
		var torque = ((5252*hrspwr)/rpms);
		console.log(torque);
		var trq = torque.toFixed(0)
		$("#answer").html("<h3>Your engine torque is "+ trq +" ftlb</h3>")
	});
