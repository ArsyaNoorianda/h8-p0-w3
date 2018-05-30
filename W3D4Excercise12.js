function tentukanDeretGeometri(arr) {
    var gap = arr[1] / arr[0];
    var geometri = true;
    for (var x = 1; x < arr.length-1 && geometri === true; x++) {
      if (gap !== arr[x+1]/arr[x]) {
        geometri = false;
      }
    }
    return geometri;
  }
  