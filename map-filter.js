// NORMAL WAY BEFORE --

// const numbers = [3, 4, 5, 6, 7, 8] ;
// const output = [] ;

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element ;
//     output.push(result);
// }

// console.log(output);

// MAP --

const numbers =[3, 4, 5, 6, 7, 8] ;

// function square(element) {
//     return element * element ;
// }

// const square = element => element * element ;

// const square = x => x * x ;

const result = numbers.map(function square(element){
    
    // console.log(element , index, array); 

    return element * element ;

});

console.log(result);

// Filter -- used fot select few things if the condition is fulfilled then show..

const smaller = numbers.filter(x => x < 5); /* Easy way of using function with arrow! */

console.log(smaller) ;

// filter returns ARRAY .. but after ES6 special version of filter is find which returns one element not an Array!! if the condition is fulfilled and only returns ONE!

const isThere = numbers.find( x => x > 5);

console.log(isThere);


