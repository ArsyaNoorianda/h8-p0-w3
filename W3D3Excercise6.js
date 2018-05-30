function angkaPalindrome (num) {
    var reverseNum = String(num).split('').reverse().join('');
  if(num == reverseNum){
    for(var x = num+1; x >= num; x++){
        reverseNum = String(x).split('').reverse().join('');
        if(reverseNum == x){
            return x;
        }
    }
  }else{
      for(var x = num+1; x >= num; x++){
          reverseNum = String(x).split('').reverse().join('');
          if(reverseNum == x){
              return x;
          }
      }
  }
}