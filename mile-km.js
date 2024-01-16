
//get the input kilometer
const kilometer = prompt(`Input kilometer`); 

// Convert kilometer to mile
const mile = Number(kilometer)/1.60934;  

//Display ouput in two different ways
console.log(`The distance of ${kilometer} kms is equal to ${mile.toFixed(2)} miles`); 
alert(`The distance of ${kilometer} kms is equal to ${mile.toFixed(2)} miles`);

