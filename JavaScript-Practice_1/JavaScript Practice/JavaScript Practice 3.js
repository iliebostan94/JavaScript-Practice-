console.log ("JS Practice 3 Loading.");

calculateFactorial(5);

// var myNewArray = listNumbers();
// DisplayArray(myNewArray);

function listNumbers()  
{
    //     var txt = " ";
    //     for ( let i =0; i<=10; i++){
    //         txt = txt + i + " ";
    //             // console.log(i);
    // document.getElementById("displayNumbers_1").innerHTML = txt;
    // }

    let resultArray = [];
    for (let i = 0; i <= 10; i++) 
    {
        resultArray[i] = i;
        
    }   
    return resultArray;
}

var functionArray_1 = listNumbers();
DisplayArray (functionArray_1 , "whateverName");

function listNumbers_2()  {
        // var txt = " ";
        // for (let i=15 ; i>=-5; i--){
        //     txt = txt + i + " ";
        // console.log(i);
// document.getElementById("displayNumbers_2").innerHTML = txt;
// }
let resultArray = [];
var elementIndex = 0;
for (let i=15 ; i>=-5; i--){
    resultArray[elementIndex] = i;
    elementIndex++ ;
}
    return resultArray;
}

listNumbers_2();
var functionArray_2 = listNumbers_2();
DisplayArray (functionArray_2, "Your special array with")

function listNumbers_3()  {
    var txt = "";
    for (let i=-20 ; i<=50; i+=2){
        txt = txt + i + " ";
        // console.log(i);
document.getElementById("displayNumbers_3").innerHTML = txt;
}
}


listNumbers_3();

//Create a function that takes an array as a parameter and outputs all its values in one row. 
//Example: for array [0,1,2,3] the message should look like this: “0, 1, 2, 3”.

function DisplayArray( myArray, arrayName)  {
    txt = " ";
    for (let i=0 ; i<myArray.length; i++){
        
        txt = txt + myArray[i] + " .. ";
    }
    var resultString = arrayName + " values are (" + txt +")";  
console.log (resultString);    
document.getElementById("awesomeArray").innerHTML = resultString ;
}
var randomNumbers = [4, 5, 6, 21, 90 , 435, 56 ];   
var ArrayName_1 = "myArray";
DisplayArray(randomNumbers, ArrayName_1);


function factorsumma( n )  {
    var sum = 0;
    for (let u=0; u<=n; u++ )  {
        sum = sum + u;
document.getElementById("factorSumResult").innerHTML = " Factor sum result of " + n + " is " + sum;

}
}
factorsumma(5);


function calculateFactorial( m )  {
    var resultFactorial = 1;
    for (let p=1; p<=m; p++ )  {
        resultFactorial = resultFactorial * p;
document.getElementById("factorialResult").innerHTML = " Factorial result of " + m + " is " + resultFactorial;

}
}
calculateFactorial(5);




// 10.	Create a “CalculateFactorial” function that takes one parameter - n. It should return the product of all numbers from 1 to n. 
// Example, for n = 5, it should return ‘120’ (because 1*2*3*4*5 is 120).



function factorSum(button)  {
    console.log ("string");
    var n = document.getElementById("n_Value").value;
    console.log(n);
    var resultFunction = 0;
    for (let u=0; u<=n; u++ )  
    {
        resultFunction = resultFunction + u;
// document.getElementById("factorSumResult").innerHTML = " Factor sum result of " + n + " is " + resultFunction;
    }

    button.innerHTML = resultFunction; 

}
