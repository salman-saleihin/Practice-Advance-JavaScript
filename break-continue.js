const nums = [1, 2, 3 ,4 ,5 ,6 ,7 ,8, 9] ;

for (let i = 0; i < nums.length; i++) {

    // console.log(nums[i]); -- it consoles 1 extraa!
    
    if (nums[i] > 4) {

        break ;
    }

    console.log(nums[i]);

    
}


const numbers = [1, -2, 3 ,4 , -5 , -6 ,7 , -8, 9] ;

console.log('second step')

for (let i = 0; i < numbers.length; i++) {

    
    
    if (numbers[i] < 0) {

        continue;
    }

    console.log(numbers[i]);

    
}

