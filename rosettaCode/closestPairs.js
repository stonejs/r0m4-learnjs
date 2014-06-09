/*The aim of this task is to provide a function to find the closest two points among a set of 
given points in two dimensions, i.e. to solve the Closest pair of points problem in the planar case.
The straightforward solution is a O(n2) algorithm (which we can call brute-force algorithm); 
the pseudocode (using indexes) could be simply:
bruteForceClosestPair of P(1), P(2), ... P(N)
if N < 2 then
  return ∞
else
  minDistance ← |P(1) - P(2)|
  minPoints ← { P(1), P(2) }
  foreach i ∈ [1, N-1]
    foreach j ∈ [i+1, N]
      if |P(i) - P(j)| < minDistance then
        minDistance ← |P(i) - P(j)|
        minPoints ← { P(i), P(j) } 
      endif
    endfor
  endfor
  return minDistance, minPoints
 endif
A better algorithm is based on the recursive divide&conquer approach, as explained also at Wikipedia, 
which is O(n log n); a pseudocode could be:
closestPair of (xP, yP)
               where xP is P(1) .. P(N) sorted by x coordinate, and
                     yP is P(1) .. P(N) sorted by y coordinate (ascending order)
if N ≤ 3 then
  return closest points of xP using brute-force algorithm
else
  xL ← points of xP from 1 to ⌈N/2⌉
  xR ← points of xP from ⌈N/2⌉+1 to N
  xm ← xP(⌈N/2⌉)x
  yL ← { p ∈ yP : px ≤ xm }
  yR ← { p ∈ yP : px > xm }
  (dL, pairL) ← closestPair of (xL, yL)
  (dR, pairR) ← closestPair of (xR, yR)
  (dmin, pairMin) ← (dR, pairR)
  if dL < dR then
    (dmin, pairMin) ← (dL, pairL)
  endif
  yS ← { p ∈ yP : |xm - px| < dmin }
  nS ← number of points in yS
  (closest, closestPair) ← (dmin, pairMin)
  for i from 1 to nS - 1
    k ← i + 1
    while k ≤ nS and yS(k)y - yS(i)y < dmin
      if |yS(k) - yS(i)| < closest then
        (closest, closestPair) ← (|yS(k) - yS(i)|, {yS(k), yS(i)})
      endif
      k ← k + 1
    endwhile
  endfor
  return closest, closestPair
endif
*/

function piphagor(point1, point2) {
  var dx = point1.x - point2.x;
  var dy = point1.y - point2.y;
  var distance = Math.sqrt(dx*dx+dy*dy);
  return distance;
};

console.log(piphagor({x:345, y : 234}, {x : 256, y : 132}));


function closestPair(arr){
  if (arr.length < 2 ) {
    return Infinity;

  } else {
      var minDist = piphagor (arr[0], arr[1]);
      var minPoints = arr.slice(0,2);

      for (var i = 0; i < arr.length-1; i++) {
        for (var k = i+1; k < arr.length; k++){
          if (piphagor(arr[i], arr[k]) < minDist) {
            minDist = piphagor(arr[i], arr[k]);
            minPoints = [arr[i], arr[k]];
          }

        }

      }
      return {
        distance : minDist,
        points : minPoints
      };

    };
};


function pointGenerator (numPoints) {
  var result = [];
    
  for (var i = 0; i < numPoints; i++) {
    
    result.push({x : Math.floor(Math.random() * 501), y : Math.floor(Math.random() * 501)});

  }

  return result;
};

var points = pointGenerator(20); 
console.log(points);
console.log(closestPair(points));

