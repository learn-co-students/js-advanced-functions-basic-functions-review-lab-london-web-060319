// Your code here
function saturdayFun(action = 'roller-skate'){
 return(`This Saturday, I want to ${action}!`)
}

function mondayWork(action = 'go to the office'){
    return(`This Monday, I will ${action}.`)
}

function wrapAdjective(string = "*"){
    return function(word = "special"){
        return(`You are ${string}${word}${string}!`)
    }
}

const Calculator = {
    add: function(a, b){
        return(a+b)
    },
    subtract: function(a, b){
        return(a-b)
    },
    multiply: function(a, b){
        return(a * b)
    },
    divide: function(a, b){
        return(a/b)
    }
}

function actionApplyer(start, array){
    for (let i = 0; i < array.length; i++ ){
        start = array[i](start)
      }
    
      return start
}