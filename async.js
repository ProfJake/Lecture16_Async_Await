/*async.js
A very simple demo of how the async label works.

Jake Levy
Oct 2020
*/
var rl = require("readline");
const reader = rl.createInterface({

    input: process.stdin,
    output: process.stdout
});
//even though the function returns a simple string
//the "async" label causes it to implicitly wrap its return value in a promise
async function greeting(){
    
    return "Hello";
}

//a regular function to use in the promise chain
  function simpleErr(){
reader.question("Do you want to throw an error?", (resp)=>{
	if (resp.toString().startsWith("y")){
	    throw new Error("I am an ERROR!!")
	}else{
	    console.log( "Tuesday is coming; did you bring your coat?");
	    process.exit(0);
	}
    });
}


//because greeting is async, it allows us to start a promise chain
//in this code, val will be bound to the value returned from greeting()
greeting().then(
    val => {
	console.log(val);
	return val;
    }
).then(
    ()=> simpleErr()
).catch(err =>
{
    console.log(e.message)
})
