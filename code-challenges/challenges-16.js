'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    let returnStr="";
for(let i=string.length;i>=0;i--)
{
    returnStr+=string.charAt(i);
}
return returnStr;
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    let returnArr=[];
    let regex=/[\^_]+/;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].match(regex)=="^_^"){
            returnArr.push(arr[i]);
        }
    }
    return returnArr;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    let returnStr="";
    for (let i = 0; i < str.length ; i++) {
        if ((i+1)%2!==0) {
            returnStr+=str.charAt(i);
        }
    }
   return returnStr;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    let nestedArr=[];
    let returnArr=[];
    let regex=/\W*(chicken|CHICKEN|Chicken)\W*/;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        {
            if(arr[i][j].match(regex))
            {
                nestedArr.push(arr[i][j]);
            }
        }
        returnArr.push(nestedArr);
        nestedArr=[];
    }
    return returnArr;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
