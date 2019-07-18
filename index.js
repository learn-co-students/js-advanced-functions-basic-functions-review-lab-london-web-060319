// Your code here
function saturdayFun(arg = "roller-skate") {
    return `This Saturday, I want to ${arg}!`
}

function mondayWork(arg = "go to the office") {
    return `This Monday, I will ${arg}.`
}

function wrapAdjective(inni = "*" ) {
    return function(text) {
        return `You are ${inni}${text}${inni}!`
    }
}

let Calculator = {
    add: (n1, n2) => {
        return n1 + n2
    },
    subtract: (n1, n2) => {
        return n1 - n2
    },
    multiply: (n1, n2) => {
        return n1 * n2
    },
    divide: (n1, n2) => {
        return n1 / n2
    }
}

function actionApplyer(integer, array) {
    if (array.length === 0) {
        return integer
    } else {
        let result = integer
        array.forEach(item => {
            result = item(result)
        })
        return result
    }
}