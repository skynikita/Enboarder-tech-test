function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    const sortedStrA = sortString(str1)
    const sortedStrB = sortString(str2)
    return sortedStrA === sortedStrB;
}

function sortString(str) {
    return str.toLowerCase().split('').sort().join();
}

console.log(isAnagram('silent', 'listen')); // should return true

console.log(isAnagram('hello', 'world')); // should return false
