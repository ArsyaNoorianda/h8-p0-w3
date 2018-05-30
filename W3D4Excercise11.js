function tentukanDeretAritmatika(arr) {
    
    let selisih = arr[1] - arr[0]
    for (var x = 1; x < arr.length-1; x++) {
      if (arr[x] !== arr[x-1]+selisih) {
        return false
      }
    }
    
    return true
  }