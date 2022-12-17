function add(num1 , num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2] + arguments[3];
    // after creating Array.. we can easily sum by creating a for loop 
}

const result = add(2, 3 , 5 , 7);

console.log(result);