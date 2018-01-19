var fibonacci = function(fib_number) {
  if (fib_number < 1) {
    return 'ERROR';
  } else if (fib_number == 1 || fib_number == 2) {
    return 1;
  } else {
    return fibonacci(fib_number-1) + fibonacci(fib_number-2)
  }
}

module.exports = fibonacci
