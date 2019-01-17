/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var number;

    // Find the first character [A..Z][a..z] in the input string
    var idx = /[a-z]/i.exec(input).index;

    // Is idx > 0 
    if (idx > 0) {
      // Extract the number from the input string
      number = input.slice(0, idx);
      // Is the number a fraction?
      if (number.indexOf('/') > 0) {
        // Split input on '/' character
        var arr = number.split('/');
        if (arr.length == 2) {
          result = Number(arr[0]) / Number(arr[1]);
        }
        else {
          result = 'invalid number';
        }
      } else {
        // Should be just a plain number
        result = Number(number);
      }

    } else if (idx === 0) {
      // input starts with a character, set result to 1
      result = 1;
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    // List of valid units
    var symbols = ['gal', 'mi', 'km', 'lbs', 'kg', 'L'];

    var idx = /[a-z]/i.exec(input).index;
    var unit = input.slice(idx);
    if (unit && unit.length > 0) {
      unit = unit === 'L' || unit === 'l' ? 'L' : unit.toLowerCase();
      if(symbols.indexOf(unit) > -1) {
        result = unit;
      } else {
        result = 'invalid unit';  
      }
    }
    else {
      result = 'invalid unit';
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;

    switch (initUnit) {
      case 'gal':
        result = 'L';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs'
        break;
      default:
        result = 'invalid unit';
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    switch (unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'L':
        result = 'liters';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms'
        break;
      default:
        result = 'invalid unit';
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    var num = this.getNum(initNum + initUnit);
    var unit = this.getUnit(initNum + initUnit);

    switch (unit) {
      case 'gal':
        result = num * galToL;
        break;
      case 'L':
        result = num / galToL;
        break;
      case 'mi':
        result = num * miToKm;
        break;
      case 'km':
        result = num / miToKm;
        break;
      case 'lbs':
        result = num * lbsToKg;
        break;
      case 'kg':
        result = num / lbsToKg;
        break;
      default:
        result = 0;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
