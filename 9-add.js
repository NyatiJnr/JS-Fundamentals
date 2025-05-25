function add(a, b) {
    return a + b;
}

const args = process.argv.slice(2);
const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);
console.log(Number.isNaN(num1) || Number.isNaN(num2) ? "NaN" : add(num1, num2));
