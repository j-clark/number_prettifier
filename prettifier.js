PRETTIFIER = (function() {

  function _isOrderOfMillions(num) {
    if(num.length > 6 && num.length < 10)
      return true;
    return false;
  }

  function _truncateWholeMillion(num) {
    var 
      len = num.length,
      digitsLessThanMillion = 6
      digitsToGet = len - digitsLessThanMillion;

    return num.substr(0, digitsToGet);
  }

  function prettify(num) {
    num = num.toString();
    if(_isOrderOfMillions(num)) {
      num = _truncateWholeMillion(num);
    }
    return num + 'M';
  }

  return {
    prettify: prettify
  };
})();