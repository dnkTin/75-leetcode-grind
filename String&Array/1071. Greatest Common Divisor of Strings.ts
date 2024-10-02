function gcdOfStrings(str1, str2){
    let len1 = str1.length,  len2 =  str2.length;
    let currentSubstring = len2[0];
    for (let i = 1; i < len2; i++) {
        currentSubstring += len2[i]
        console.log(currentSubstring)
        let lengthSub = currentSubstring.length
        if (len1 % lengthSub || len2 % lengthSub) continue

        let factor1 = Math.floor(len1 / lengthSub),  factor2 = Math.floor(len2 / lengthSub)
        if (currentSubstring.repeat(factor1) === str1 || currentSubstring.repeat(factor2) === str2) {
            return currentSubstring
        }
    }
    return ''
};
console.log(gcdOfStrings('ABCABC', 'ABC'))