// ROMAN TO INTEGER

// Given a roman numeral, convert it to an integer.

/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/


//SOLUTION

var romanToInt = function(s) {
    const symbols = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let total = 0;

    for(i=0;i<s.length;i++){
        let current = s[i];
        let next = s[i+1];

        if(symbols[current] < symbols[next]){
            total += symbols[next] - symbols[current];i++
        }else{
            total += symbols[current];
        }
    }
    return total;

};
console.log(romanToInt("DCCC"));