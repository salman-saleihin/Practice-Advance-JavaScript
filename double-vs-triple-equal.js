const first = 2 ;
const second = '2' ;

if(first == second){
    console.log("Condition Is True");
}
else{
    console.log("Condition Is False");
}

// Double Equal Shows True But What will Happen if We Use Triple Equal ??

if(first === second){
    console.log("Condition Is True");
}
else{
    console.log("Condition Is False");
}

// Double Equal Only Checks The Value! But Triple Equal Checks Value and Type both!!


const num1 = 1 ;
const num2 = true ;

if(num1 == num2){
    console.log("Condition Is True");
}
else{
    console.log("Condition Is False");
}

// it'll Show True Because in JavaScript 0= false and 1=true .. and we used double equal here which only checks the value not the type! if we used triple equal here it would have showed False after checking value and type both! 

const con1 = 1 ;
const con2 = true ;

if(con1 === con2){
    console.log("Condition Is True");
}
else{
    console.log("Condition Is False");
}


