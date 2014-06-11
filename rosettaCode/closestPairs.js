
function piphagor(point1, point2) {
  var dx = point1.x - point2.x;
  var dy = point1.y - point2.y;
  var distance = Math.sqrt(dx*dx+dy*dy);
  return distance;
};


/*
Divide the set into two equal sized parts by the line l, and recursively compute the minimal distance in each part.
Let d be the minimal of the two minimal distances.
Eliminate points that lie farther than d apart from l
Sort the remaining points according to their y-coordinates
Scan the remaining points in the y order and compute the distances of each point to its five neighbors.
If any of these distances is less than d then update d.
*/

//function which make l line
function makeLine(arr) {
  var maxX = 0;
  var maxY = 0;
    
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].x > maxX) { 
      maxX = arr[i].x;

    } else if (arr[i].y > maxY) {
      maxY = arr[i].y;

    };

  };

  var l = {x : Math.floor(maxX/2), y : Math.floor(maxY/2)};
  return l;
};


// function which define minimal distance and coordinates of 2 pairs points that they are have 
function closestPair(arr) {
  var extCount = 0;
  var intCount = 0;
  if (arr.length < 2 ) {
    return Infinity;

  } else {
      var minDist = piphagor (arr[0], arr[1]);
      var minPoints = arr.slice(0,2);

      for (var i = 0; i < arr.length-1; i++) {
        
        for (var k = i+1; k < arr.length; k++){
          extCount += 1;  

            if (piphagor(arr[i], arr[k]) < minDist) {
            minDist = piphagor(arr[i], arr[k]);
            minPoints = [arr[i], arr[k]];
            intCount += 1;

          }

        }

      };

    
    };

    return {
        distance : minDist,
        points : minPoints,
        intCounts : intCount,
        extCount : extCount
      };
};


//function which makes random points 
function pointGenerator (numPoints) {
  var result = [];
    
  for (var i = 0; i < numPoints; i++) {
    
    result.push({x : Math.floor(Math.random() * 501), y : Math.floor(Math.random() * 501)});

  }

  return result;
};



function devAndConq(arr) {
  if (arr.length < 2) {
    return Infinity;
  
  } else {
      var minDist = piphagor (arr[0], arr[1]);
      var minPoints = arr.slice(0,2);
      var arrL = [];
      var arrR = [];
      var arrD = [];
      var l = makeLine(arr);
      

        //Divide the set into two equal sized parts by the line l
        //Deviding arr into arrL and arrR by line = l
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].x < l.x ) {
            arrL.push(arr[i]);

          } else if (arr[i].x > l.x){ 
              arrR.push(arr[i]);

            };

        };

          //define d dimension with l in center and creating new arrD with points that located in 
          //d demension via x coordinate
          //update minDist which equal half of d 

          minDist = (closestPair(arrL) > closestPair(arrR)) ? closestPair(arrR) : closestPair(arrL); 
          
          var d = {startx: (l.x - minDist.distance), endx:(l.x + minDist.distance)};
 
            for (var i = 0; i < arr.length; i++) {
              if (arr[i].x >= d.startx && arr[i].x <= d.endx) {
                arrD.push({x: arr[i].x, y: arr[i].y});  
              }

            };
             

              //checkout arrD maybe in it any points with distance < minDist
              // and receiving our winnner 
              if (arrD.length > 1) {
                var minDistanceD = closestPair(arrD);
                minDist = minDistanceD.distance > minDist.distance ? minDist : minDistanceD;

              }


    };
    return minDist;
    
};



var dots = pointGenerator(100);
console.log(dots);
console.log(devAndConq(dots));

