function perkalianUnik(arr) {
  var baru = 1;
  for(var x = 0; x < arr.length; x++) {
    baru =  baru * arr[x];
  }
  var ar = [];
  for(var z = 0; z < arr.length; z++) {
    var bagi = baru / arr[z];
    ar.push(bagi);
  }
  return ar;
}