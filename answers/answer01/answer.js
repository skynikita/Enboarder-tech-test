//Array.reduce()
Array.prototype.myReduce = function (callbackFn, initialValue = null) {
    if (typeof callbackFn !== 'function') {
        throw new Error(`${callbackFn} is not a function`)
    }
    if (this.length === 0 && initialValue === null) {
        throw new Error('Reduce of empty array with no initial value')
    }
    if (this.length === 0 && initialValue !== null) {
        return initialValue
    }
    let initialIndex = 0;
    if (initialValue === null) {
        initialIndex = 1
        initialValue = this[0]
    }
    let previousValue = initialValue
    for (let i = initialIndex; i < this.length; i++) {
        previousValue = callbackFn(previousValue, this[i], i, this);
    }
    return previousValue;
}
