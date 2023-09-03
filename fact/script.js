// Function declaration
function fact(n){
    if(n==1)
      return 1
    return n * fact(n-1)
}
console.log(fact(5));

// Function exprssion
// assained to a variable as a object
let num = 10

let isEven = function(n){
    return n % 2== 0;
}
console.log(isEven(5))
console.log(isEven(8))

// Passing an array
let arr = [1,2,3,4,5]
let findSum = function(array){
    let sum = 0
    for(let i of arr){
        sum += i ;
    }
    return sum
}
console.log(findSum(arr))

// arrow function
console.log("Arrow function :-")

// let volume = (l,b,h)=> {return l*b*h}
let volume = (l,b,h)=>  l*b*h

console.log(volume(7,8,9));

console.log("Find sum :-")
let arr1 = [1,2,3,4,5]
let sumof = array => {
    let sum = 0;
    for (let key of array){
        sum += key;
    }
    return sum;
} 
console.log(`Sum of no is ${sumof(arr1)}`);

//Variable arguments - rest parameters
console.log("Variable arguments :-")

let sumTotal = function(...args){
    let sum = 0;
    for (let key of args){
        sum += key;
    }
    return sum;
} 
console.log(sumTotal(1,2,3,4,5))

let sumTotal1 = function(){
    let sum = 0;
    for (let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
} 
console.log(`Arguments via function ${sumTotal1(1,2,3,4,5)}`)


// Callback
console.log("Callback :-")

function downward(name){
    console.log("Hello", name)
}
function head(name){
    document.querySelector('h1').innerHTML = "Hey "+ name
}

function call(callback){
    callback("Lokesh");
}

call(downward)
call(head)

// For each
console.log("For each :-")

arr = ["Mongo","Node","Express"];

arr.forEach(print)
function print(val){          
    console.log(val)
}

console.log("Second Method :-")
arr.forEach( val =>{ console.log(val + " net") } )    //Arrow for each


console.log("Test :-")
arr.forEach((val,index,arr)=> {
    arr[index] = val.toUpperCase();
})
console.log(arr)

arr.forEach((val,index,arr)=> {
    arr[index] = val.toLowerCase();
})
console.log(arr)

//Test case
//1.
let test = ['ECE','CSE','IT','BIO','CIVIL','MECH'];

test.forEach(val =>{
    let option = document.createElement('option');
    option.innerHTML = val;
    option.value = val;
    document.getElementById('dept').appendChild(option)
})

//2.
let number = [6,-5,7,-2,4,6,-1]

let sum3 = 0;
number.forEach(val =>{
    if(val > 0){
        sum3 += val;
    }
})
console.log("Test 2 " + sum3);
