var events = require("events");
var Exercise = require("./Exercise.js");
//var emitter = new events.EventEmitter();

/*trackerService.js

Improved Tracker Functionality.
In this lab, I've added the ability for the tracker to emit an event when
a new exercise is set.  In a fully-featured application we could respond to
this event in a variety of ways. For now we are just going to re-

Activities:  Walk/Run/Swim
Input:  Exercise type
        Distance (miles)
        Weight (lbs)
        Time (minutes)
Output: Calories Burned

 Formula Sources:

 https://lovandy.com/wellness/physical/calories-burned-by-walking.html AND
 https://lovandy.com/wellness/physical/calories-burned-running.html
*/

//requires weight in lbs
//Time in minutes
//distance in miles
//Constructor for the tracker Class.  
class tracker extends events{
    constructor(exercise, weight, distance, time) {

	super();
	if (!exercise){
	    //make a default  undefined object for setting. Avoids error
	    //works for this project because I am creating an empty tracker for educational purposes
	    //for real work this is strongly not recommended
	    //and instead should throw an ERROR.
	    this.exercise = new Exercise("walking");
	    this.weight  = 0;
	    this.time  = 0;
	    this.distance = 0;
	} else {
	    
	    try{
		this.exercise= new Exercise(exercise);
		this.weight = weight;
		this.distance = distance;
		this.time = time;
	    } catch (err){
		console.log(err.message);
		throw (err);
	    }
		

	}
    }
    //updated to accomodate swimming
    calculate() {
	return this.exercise.calculate(this.weight, this.distance, this.time);
    }
    
    //speed is consistently calculated for all exercise times (distance/time)
    calcSpeed(){
	return this.distance/(this.time/60);//miles per hour
    }
    getExercise(){
	return this.exercise.getEx();
    }
    setExercise(exercise){
	try{
	    this.exercise=new Exercise(exercise);
	} catch (err){
	    console.log("ERR Tracker setExercise");
	    throw err;
	}
	this.emit('exerciseChanged');

    }

    setWeight(weight){

	this.weight=weight;
	this.emit('weightChanged');
    }
    setTime(time){
	this.time=time;
	
	this.emit('timeChanged', time);
    }
    setDistance(distance){
	this.distance=distance;
	this.emit('distanceChanged', distance);
    }
}

module.exports = tracker;
