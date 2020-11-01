/*await.js
Jake Levy

Oct 2020

A very simple, trivial demo how await and async work together.
*/


//returns a value, not a promise
function simpleFunc1(){
    let value;
    setTimeout(()=>{ return value =  "This happened after 3 seconds"}, 3000);

    //the function's scope ends before the value gets returned
   
}

function simpleFunc2(){

    //this function returns a Promise, whose value can be "filled in later"
    return new Promise ((resolve, reject)=>{ setTimeout(()=>{ resolve("This happened after 3 seconds")}, 3000)});

   
}


//since main is labeled as async it implicitly returns a promise
async function main(){
 
    //await allows this code to pause while it waits for the returned promise
    //to fulfill. Even on return statements
    return result = await simpleFunc2();

    //comment the above return and uncomment the one below to see differences
    //return result = simpleFunc1();

    //the simpleFunc1 will return before the value can be assigned and print
    //"undefined"
}


main().then(console.dir);


