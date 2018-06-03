function groupAnimals(animals) {
    
    var hasil = [];
    
    var indexs = 0;
    
    animals.sort();
    
    
    for (var x = 0; x < animals.length; x++) {
      if (hasil.length === 0) {
        hasil.push([animals[x]]);

    } else if (hasil[indexs][0][0] === animals[x][0]) {
        hasil[indexs].push(animals[x]);
      
    } else {
     hasil.push([animals[x]]);
     indexs++;
      }
    }
     return hasil;
  }
  
  
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
  console.log('\n');
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]