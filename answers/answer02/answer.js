//Implement Lodash’s groupBy in your own way
const myGroupBy = (arr, fn) => {
    const result = {};
    arr.forEach(item => {
        const key = fn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    })
    return result;
}
