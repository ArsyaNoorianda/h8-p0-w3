function pasanganTerbesar(num) {
    var x = [];
      for(var xx=0;xx<num.toString().length;xx++){
        if(num.toString().substring(xx,xx+2).length == 1)
        {
          break;
          
        }else{
          x.push(num.toString().substring(xx,xx+2));
        }
        
      }
      
      return Math.max(...x);
  }
  
  
  /*
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  */