//

/**
 * Return maximum length of subarray without duplicates
 * Ex:1 --> 'ABCDAEF' --> 6 (BCDAEF)
 * Ex:2 --> 'AA' --> 1 (A)
 * @param {*} string
 * @returns number
 */

function solve(s){
   let container = new Map(); 
   let currentMax = 0; 
   let maxima = 0; 
   let size = s.length;
   for(let i=0;i<size;i++){
      if(container.has(s[i])){
         let prev = container.get(s[i]); 
         currentMax = currentMax - (prev+1); 
         container.delete(s[i]);
      }
      container.set(s[i], i);
      currentMax = currentMax+1; 
      maxima = Math.max(currentMax, maxima);
   }
   console.log(container);
   return maxima;
}

let givenString = 'AABCDABD'; 
console.log(solve(givenString));

//Time complexity: O(N)
//Space complexity: O(N)


