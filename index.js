// Your code here

function saturdayFun(string="roller-skate"){
    return `This Saturday, I want to ${string}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective= function(style="*"){
    return function(thing="special"){
        return `You are ${style}${thing}${style}!`
    }
}

let Calculator= {

    add: function add(number1,number2){
        return number1+number2
    }, 

    subtract: function subtract(number1,number2){
        return number1-number2
    }, 

    multiply: function multiply(number1,number2){
        return number1*number2
    },
    
    divide: function divide(number1,number2){
        return number1/number2
    }
} 

function actionApplyer(integer,array){
    let num=integer 
    for (let each of array){
        num=each(num)
    }
    return num
}
