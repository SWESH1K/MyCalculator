var prevNum = 0;
var currOp = null;

const update = (e) => {

    const operators = ['+', '-', 'x', '/', '^', '%']

    const pressed = e.target.innerHTML
    const pressedNum = parseFloat(pressed)
    const currNum = document.getElementById('display')
    console.log("Button pressed! -> " + pressed)

    if(pressed == 'AC') {
        currNum.innerHTML = '0'
        prevNum = 0
        currOp = null
    }
    else if(pressed == 'B') {
        currNum.innerHTML = parseFloat(parseFloat(currNum.innerHTML) / 10)
    }
    else if(operators.indexOf(pressed)!=-1) {
        console.log("Operator zone entered!")
        prevNum = parseFloat(currNum.innerHTML)
        currNum.innerHTML = pressed
    }
    else if(pressed == '=') {
        switch(currOp) {
            case '+':
                currNum.innerHTML = prevNum + parseFloat(currNum.innerHTML)
                break;
            case '-':
                currNum.innerHTML = prevNum - parseFloat(currNum.innerHTML)
                break;
            case 'x':
                currNum.innerHTML = prevNum * parseFloat(currNum.innerHTML)
                break;
            case '/':
                currNum.innerHTML = prevNum / parseFloat(currNum.innerHTML)
                break;
            case '%':
                currNum.innerHTML = prevNum % parseFloat(currNum.innerHTML)
                break;
            case '^':
                currNum.innerHTML = prevNum ** parseFloat(currNum.innerHTML)
                break;
            default:
                return null
        }
        currOp = null
        prevNum = parseFloat(currNum.innerHTML)
    }
    else {
        // console.log(currNum)
        if(operators.indexOf(currNum.innerHTML)!=-1) {
            console.log("Num zone!")
            currOp = currNum.innerHTML
            currNum.innerHTML = pressedNum
        }
        else {
            currNum.innerHTML = `${ parseFloat(currNum.innerHTML)*10 + pressedNum}`
        }
        // console.log("CurrNum -> " + currNum.innerHTML)
    }

    console.log(`${prevNum}`, `${currOp}`, `${currNum.innerHTML}`)

}

const Mybuttons = document.querySelectorAll(".num")
console.log("Num-of-buttons: " + Mybuttons.length)
Mybuttons.forEach((button) => {
    console.log("Button - " + button.innerHTML)
    button.addEventListener('click', update)
})