 // Convert argument to integer
  const num = parseInt(n);
  
  // Handle NaN case
  if (isNaN(num)) {
    return 1;
  }
  
  // Handle negative numbers (optional, returns 1 as per standard math)
  if (num < 0) {
    return 1;
  }
  
  // Base cases
  if (num === 0 || num === 1) {
    return 1;
  }
  
  // Recursive case
  return num * factorial(num - 1);
}

// Get command line argument (Node.js environment)
const input = process.argv[2];

// Compute and print factorial
console.log(factorial(input));
