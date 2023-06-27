export function calculateProgress(number, finalNum) {
  return +Math.round((number / finalNum) * 100).toFixed(1);
}
