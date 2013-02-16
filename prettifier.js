PRETTIFIER = (function() {

  var orders = {
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

  function _isOrderOf(num, orders) {
    if(num.length >= orders.minLength && num.length <= orders.maxLength)
      return true;
    return false;
  }

  function _truncate(num, orders) {
    var 
      len = num.length,
      digitsToGet = len - orders.minLength + 2;

    return +( num.substr(0, digitsToGet) ) / 10;
  }

  function prettify(num) {
    num = num.toString();
    if(_isOrderOf(num, orders.million)) {
      return _truncate(num, orders.million) + orders.million.suffix;
    } else if(_isOrderOf(num, orders.billion)) {
      return _truncate(num, orders.billion) + orders.billion.suffix;
    } else if(_isOrderOf(num, orders.trillion)) {
      return _truncate(num, orders.trillion) + orders.trillion.suffix;
    } else {
      return num;
    }
  }

  return {
    prettify: prettify
  };
})();