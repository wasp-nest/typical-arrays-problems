
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }

  let index = array[0];

  for (let i = 1; i < array.length; i++){
     if (array[i] < index) {
       index = array[i];
     } 
  }
  return index;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  
  let index = array[0];

  for (let i = 1; i < array.length; i++){
     if (array[i] > index) {
       index = array[i];
     } 
  }
  return index;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  let index = 0;
  for (let i = 0; i < array.length; i++ ) {
     index += array[i];
  }
  return index/array.length;
}
