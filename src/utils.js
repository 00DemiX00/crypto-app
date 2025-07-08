export function percentDifference(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
   throw new Error('Arguments must be numbers');
}

const diff = Math.abs((a - b) / ((a + b) / 2));
return + (diff * 100).toFixed(2);
}



export function capitallize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
}