"use strict";
// given a SORTED array, use the two pointer pattern to determine if there is a pair of numbers
//  who's sum is equal to zero.
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumZero = void 0;
exports.sumZero = (numArr) => {
    if (numArr.length <= 1) {
        return false;
    }
    let left = 0;
    let right = numArr.length - 1;
    while (left <= right) {
        if (numArr[left] + numArr[right] == 0) {
            return true;
        }
        numArr[left] + numArr[right] < 0 ? left++ : right--;
    }
    return false;
};
exports.sumZero([-1, 0, 1, 2]);
