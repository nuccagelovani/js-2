// 1

function sum(...args) {
    let numberssum = 0;

    for(let i of args) {
        if (i > 0) {
            sum = numberssum += i;
        }
    }
    return numberssum;
}
let result = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);

// 2

function numbers(...argss) {
    let numbb = 0; 

    for (let x of argss) {
        numbb += x;
    }
    console.log(numbb);
}

numbers(10, 50, 6, 7, 8, 11, 6, 3, 9);

// 3
function printname() {
    let user = {
        firstname: 'giorgi',
        lastname: 'saakadze',
        age: 32,
        isloggedin: 'true',
    }

    if (user.isloggedin == 'true') {
        return (user.firstname  +user.lastname)
    } else {
        return 'false';
    }
}

let resultt = printname();
console.log(resultt);

// 4. 

let array = [10,20,30,40,10,200,500,700];

array.forEach( x => {
    if(x > 600) {
        console.log(x);
    }
})