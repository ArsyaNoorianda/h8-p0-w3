function balikString(string){
    var output = '';
    for(x = 1; x <= string.length; x++)
    {
      output += string[string.length - x ];
    }
    return output;
  }
  
  console.log(balikString('Hello world!'));

