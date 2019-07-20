function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair="*") {
    return function(param="special") {
        return `You are ${visualFlair}${param}${visualFlair}!`
    }
}

const Calculator = {
    add() {
    return 1 + 3;
    },     
    subtract() {
        return 1 - 3;
    },
    multiply() {
        return 1 * 3;
    },
    divide() {
        return 10 / 5;
    }
}

function actionApplyer(start, functions) {
    return functions.length === 0 ? start : functions.reduce(function(answer, func) { return func(answer)}, start);
}