PRETTIFIER = (function() {

  var 
    number = null,
    order  = null,
    orders = {
      million: {
        suffix: 'M',
        minLength: 7,
        maxLength: 9
      },
      billion: {
        suffix: 'B',
        minLength: 10,
        maxLength: 12
      },
      trillion: {
        suffix: 'T',
        minLength: 13,
        maxLength: 15
      }
    };


  function prettify(input) {
    number = input.toFixed(0).toString();
    _determineOrderOfMagnitude();

    if(order !== null) {
      _truncate();
      _addSuffix();
    } 

    return number; 
  }

  function _determineOrderOfMagnitude() {
    for(var key in orders) {
      if(_isOrderOf(orders[key])) {
        order = orders[key];
        return;
      }
    }
  }

  function _isOrderOf(orderToTry) {
    if(number.length >= orderToTry.minLength && number.length <= orderToTry.maxLength)
      return true;
    return false;
  }

  function _truncate() {
    var 
      len = number.length,
      digitsToGet = len - order.minLength + 2;

    number = +( number.substr(0, digitsToGet) ) / 10;
  }

  function _addSuffix() {
    number = number + order.suffix;
  }

  return {
    prettify: prettify
  };
  
})();