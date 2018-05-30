function cariMean(arr){
    var hasil = 0;
    for(var i = 0; i < arr.length; i++){
      hasil += arr[i];
    }
    return Math.round(hasil / arr.length);
  }

