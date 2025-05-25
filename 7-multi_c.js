const args = process.argv.slice(2);
const x = parseInt(args[0]);
Number.isNaN(x) ? console.log("Missing number of occurrences") : console.log("C is fun".repeat(x).split("\n").forEach(line => console.log(line)));
