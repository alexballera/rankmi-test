function getPosition(coordenada){
  // Set the alphabet array
  var alphaArray = "abcdefghijklmnopqrstuvwxyz".split("");
  // Set counter
  var coordenadaArray; //Array to split the input
  if(!(/^[a-zA-Z]+$/.test(coordenada.trim()))){
    // In case the user doesn't must have only letters
    throw "The input should contain only letters (a-z)"
  }
  /* 
  Set the array to get each position value, erase the blank spaces and reverse it to calculate as a based 26 numeric system
  */
  coordenadaArray = coordenada.trim().split("").reverse();
  // With the reduce method we accumulate the result in 'output' and return
  return coordenadaArray.reduce(function(output, currentValue, index){
    // The system doesn't have 0 so plus 1
    position = alphaArray.indexOf(currentValue.toLowerCase()) + 1;
    return output + Math.pow(alphaArray.length, index) * position;
  }, 0);
}

// Export the function to use it in console.
module.exports =  getPosition;
