//Given a string of text, find and return the most recurring character.
function maxRecurringChar(str) {
    const charObj = {}
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charObj[char]) {
            charObj[char]++
        } else {
            charObj[char] = 1
        }
    }
    for (let char in charObj) {
        if (charObj[char] > max) {
            max = charObj[char]
            maxChar = char
        }
    }
    return maxChar
}

console.log(maxRecurringChar('aabacada')); // will return 'a'
