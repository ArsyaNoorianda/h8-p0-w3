function palindrome(kata){

var hasil = '';
for (var x = 1; x <= kata.length; x++){
  hasil += kata[kata.length - x];
}
return hasil === kata;
}
console.log(palindrome('katak'));

/* TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

*/

