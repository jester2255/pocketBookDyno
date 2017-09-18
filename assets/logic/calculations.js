const PI = 3.1415927
var oldTire = 27
var newTire = 40
var oldRatio = 3.55
var newRatio

newRatio = ((newTire/oldTire)*oldRatio)
console.log(newRatio.toFixed(2)+":1");
/*
Formulas for displacement, bore and stroke 
	pi/4 = 0.7853982 
	cylinder volume = pi/4 x bore^2 x stroke 
	stroke = displacement / (pi/4 x bore^2 x number of cylinders)
	displacement  =pi/4 x bore^2 xstroke x numbrer of cylinders
*/	
	var stroke = 83.1 //3.0 //83.1 mm
	var disp 
	var bore = 87.5 //4.0 //87.5 mm 
	var cylnum = 4 //8 //4 mm
	var cylVol

	disp = PI/4 * (Math.pow(bore,2)*stroke) * cylnum 
	cylVol =PI/4 * (Math.pow(bore,2)*stroke)
// for metric in mm
	disp = disp/1000000
	cylVol = cylVol/1000000
	var newDisp = disp.toFixed(0)
	var newCylVol = cylVol.toFixed(2)
	console.log("The displacement is " + newDisp)
	console.log("The cylinder volume is " + newCylVol)
//for cubic inches
	var newDisp = disp.toFixed(0)
	var newCylVol = cylVol.toFixed(2)
	console.log("The displacement is " + newDisp)
	console.log("The cylinder volume is " + newCylVol)
