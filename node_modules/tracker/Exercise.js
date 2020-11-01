//This calorie calculations for  walking and running are
//implemented as Function Objects.  These can be assigned
//to this.exercise at runtime.  Defined at class level
//Analagous to static methods.
var walking = function(){
    this.calculate = function (weight, distance, time){
	return 0.3 * weight * distance;
    }
};
//requires weight in lbs, and distance in miles
var running  = function(){
    this.calculate = function (weight, distance, time){
	return 0.63 * weight * distance;
    }
};

var swimming = function(){
    this.calculate = function (weight, distance, time){
	//(6 * Weight in KG * 3.5) / 200; is calories PER MINUTE

	kg= weight/2.2;
//	console.log("kg " + kg);
//	console.log((6 * kg *3.5)/200 * time);
	return (((6 * kg *3.5)/200) * time);
    }
};
var Exercise = function(type){
    if (type.toLowerCase() === "walking"){
	this.type = type;
	this.calculation = new walking();
    } else if (type.toLowerCase() === "running"){
	this.type = type;
	this.calculation = new running();
    } else if (type.toLowerCase() === "swimming"){
	this.type=type;
	this.calculation = new swimming();
    }else {
	console.err("Error Exercise Constructor");
	throw ({message: "Unknown Exercise. Cannot Create"});
    }
}

Exercise.prototype = {

    calculate: function(weight, distance, time){
	return this.calculation.calculate(weight, distance, time);

    },

    getEx: function(){
	return this.type;
    }
	
};


module.exports = Exercise;
