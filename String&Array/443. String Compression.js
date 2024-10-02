/**
 * @param {character[]} chars
 * @return {number}
 */
// var compress = function(chars) {
//   // we will have an object that contains a character as a key, and the value will be in repeating times
//   // how to get that obj, we will loop through the chars input and because the input is consecutive repeating chars
//   // so if we find the key is different, we can have another key and value pair
//   // then we will loop through the object and form a new array
//   let obj = new Map()
//   for (let i = 0; i < chars.length; i++) {
//       if (obj.get(chars[i])) {
//           obj.set(chars[i], obj.get(chars[i]) + 1)
//       } else {
//           obj.set(chars[i], 1)
//       }
//   }
//   chars = [] // this fail because we are modify all of the input array
//   obj.forEach((value, key) => {
//       chars.push(key)
//       if (value != 1) {
//           value = value + ''
//           while (value) {
//               value = value + ''
//               // get the first number and push to the chars array
//               chars.push(value.substring(0, 1))
//               // update the value
//               value = value.substring(1, value.length)
//           }

//       }
//   })
//   console.log(chars)
//   return chars.length
// };

var compress = function (chars) {
  let count = 1;
  let i = 0;
  while (i < chars.length) {
    if (chars[i] === chars[i + 1]) {
      count++;
      i++;
    } else {
      if (count > 1) {
        // if the count is more than 1, we need to convert the count to string
        let countStr = count + "";
        // loop through the countStr and push to the chars array
        for (let j = 0; j < countStr.length; j++) {
          chars.push(countStr[j]);
        }
      }
      count = 1;
      i++;
    }
  }
  console.log(chars);
  return chars.length;
};


var compress2 = function(chars) {
    // i and j
    let i = 0; // the current character - increase when we face the different char
    let j = 0; // increment to find the repeated key
    let s = '' // have all the character
    while (j < chars.length) {
        let count = 0
        while (chars[i] == chars[j]) {
            j++;
            count++
        }
        // the constraint 
        s += count > 1 ? chars[i] + count : chars[i]
        // update to the new character
        i = j
    }

    // modify the input array after we have the counter result
    for (let i = 0; i < s.length; i++) {
        chars[i] = s[i]
    }
    return s.length
};
compress([
  "a",
  "a",
  "b",
  "b",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
]);
