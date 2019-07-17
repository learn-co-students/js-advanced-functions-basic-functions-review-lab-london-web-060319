// Your code here

function saturdayFun(input="roller-skate") {
    return `This Saturday, I want to ${input}!`
}

let mondayWork = function (input="go to the office") {
    return `This Monday, I will ${input}.`
}
mondayWork()

let wrapAdjective = function(input="*") {
    return function (adj="special") {
        return `You are ${input}${adj}${input}!`
    }
}

const Calculator = new Object();
Calculator.add = (a,b) => {return a+b};
Calculator.subtract = (a,b) => {return a-b};
Calculator.multiply =  (a,b) => {return a*b};
Calculator.divide = (a,b) => {return a/b};

let actionApplyer = function(startPoint, arr) {
    let at = startPoint;
    for (index in arr) {
        at = arr[index](at)
    }
    return at
} 

