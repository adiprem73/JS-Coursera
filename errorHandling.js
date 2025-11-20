// try{
//     console.log("Hello");
// } catch(err){
//     // do something
// }


// try{
//     throw new Error();
// }catch (err){
//     console.log(err);
// }


//  console.log(a+b);
//  console.log("This line is never reached");

// throw new ReferenceError();


/*
try{
    console.log(a+b);
}catch(err){
    console.log(err);
    console.log('There was an error');
    console.log('Ther error was saved in the error log');
}
console.log('This line executes even after the error was encountered')

*/

try {
    throw new ReferenceError();
}catch (err){
    console.log(err);
    console.log('There was a reference error');
}

console.log('My program does not stop');