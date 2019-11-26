var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(originalArray) {
  return originalArray.split('').reverse().join('');
}
