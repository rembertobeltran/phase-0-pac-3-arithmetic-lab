var a, b

function math() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
}

function add() {
    return a + b;
}

function subtract() {
    return a - b;
}

function multiply() {
    return a * b;
}

function divide() {
    return a / b;
}

function add(a,b) {
    let result = a + b
    return result
}

function subtract(a,b) {
    let result = a - b
    return result
}

function multiply(a,b) {
    let result = a * b
    return result
}

function divide(a,b) {
    let result = a / b
    return result
}

//let number = 10

function increment(n) {
    n++
    return n
}

function decrement(n) {
    n--
    return n
}

function makeInt(n) {
    return n 
}

function makeInt(n) {
    return parseInt(n, 10); 
}

function preserveDecimal(n) {
    return parseFloat(n, 10)
}

//makeInt(n)
    //1) parses n as an integer and returns the parsed integer
    //2) assumes base 10
    //3) returns NaN as appropriate

//preserveDecimal(n)
    //2) preserves n's decimals (it parses n as a floating point number) and returns the parsed number
    //3) returns NaN as appropriate