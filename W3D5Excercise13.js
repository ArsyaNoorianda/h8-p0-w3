function targetTerdekat(arr) {
    return arr.indexOf('x') - arr.indexOf('o') > 0 ?
           arr.indexOf('x') - arr.indexOf('o') :
           (arr.length-1) + (arr.indexOf('x') - arr.indexOf('o'));
  }
  