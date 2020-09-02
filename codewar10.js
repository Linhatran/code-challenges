function result(number, operation) {
  if(!operation) return number;
      return operation(number);
}
function zero(operation) {return result(0, operation);}
function one(operation) {return result(1, operation);}
function two(operation) {return result(2, operation);}
function three(operation) {return result(3, operation);}
function four(operation) {return result(4, operation);}
function five(operation) {return result(5, operation);}
function six(operation) {return result(6, operation);}
function seven(operation) {return result(7, operation);}
function eight(operation) {return result(8, operation);}
function nine(operation) {return result(9, operation);}

function times(a) {
    return function(b) {
      return b * a;
    }
}
function plus(a) {
  return function(b) {
    return b + a;
  }
}
function minus(a) {
  return function(b) {
    return b - a;
  }
}
function dividedBy(a) {
  return function(b) {
    return Math.floor(b / a);
  }
}

console.log(four(times(two())))
