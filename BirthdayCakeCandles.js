// HackerRank - Birthday Cake Candles
// URL: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(ar) {
  let maxHeight = Math.max(...ar);
  let count = 0;
  const len = ar.length;
  for (let i = 0; i < len; i++) {
    if(maxHeight == ar[i]) {
      count++;
    }
   }
   return count;
}
