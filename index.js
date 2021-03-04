// Add your functions here
function map(array, cb) {
    return array.map(num => cb(num))
}

function reduce(array, cb, start=0) {
    let r = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < array.length; i++) {
      r = cb(array[i], r)
    }
  
    return r;
}