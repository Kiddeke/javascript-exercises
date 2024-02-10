const reverseString = function(string) {
    let val = [];
    let len = string.length - 1;
    for (let i = len; i > -1; i--){
        let char = string.charAt(i);
        val.push(char);
    }

return val.join('');
};

// Do not edit below this line
module.exports = reverseString;
