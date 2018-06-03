function mengelompokkanAngka(arr) {
    var arr_hasil = [ [] , [] , [] ] ;
    for (var x = 0 ; x < arr.length; x++ ) {

        if (arr[x] % 2 === 0 ) {
          arr_hasil[0].push(arr[x]);
          continue;
        }
        if (arr[x] % 2 !== 0 ) {
          arr_hasil[1].push(arr[x]);
          continue;
        }
        if (arr[x] % 3 === 0) {
            arr_hasil[2].push(arr[x]) ;
            continue;
        }

    }
    return arr_hasil;
}


console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

