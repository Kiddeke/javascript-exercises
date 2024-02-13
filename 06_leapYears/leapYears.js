const leapYears = function(year) {
        const leap = year % 4;
        const leap2 = year % 100;
        const leap3 = year % 400;
        const leap4 = year % 2;
        if (leap4 !== 0) {
            return false;
          } else if ((leap === 0) && ((leap2 === 0) && (leap3 !==0))) {
             return false;
            } else {
              return true;
             } 
         };

// Do not edit below this line
module.exports = leapYears;