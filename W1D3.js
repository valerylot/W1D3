/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Create a function that decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    let newStr = " "
    let digit = 0
    let alpha = ""
    let num = ""
    for (let i=0; i<str.length; i++) 
    { 
        if (!isNaN(String(str[i]) * 1)) {
            num+=str[i]; 
            digit++
            if (digit === 2){
                num+= " "
                digit = 0
            }
            if (digit===1){
                digit = 0
            }
        }
          
        else if((str[i] >= 'A' && str[i] <= 'Z') || 
         (str[i] >= 'a' && str[i] <= 'z')) 
            alpha+=str[i]; 
}
    var numb=num.split(" ")
    var output=""
    for (var j=0; j<numb.length; j++){
        for (var k=0; k<numb[j]; k++){
            output+=alpha[j]
        }
    }
    return output
}
console.log(decodeStr(str1))
console.log(decodeStr(str2))