let bonous = 20 ;



function sum(first , second){
    let result = first + second + bonous ;
    console.log(result); /*now it will work because of area scope but outside function it'll show error! */
    console.log(bonous); 

    if(result > 9){
        var mood = "happy" ;
        console.log(mood);
    }

    console.log(mood);  /*-- will show error if we dont use var its HOESTING ... let/const use- Error */


    return result ;
}

console.log(bonous);

const output = sum(3, 7);
// console.log(result);   -- it'll show error!
console.log(output);

/*
Moral -

Let/Const Scope variable ... they're only usable in the bracket area.. var available from everywhere and doesn't show error! */