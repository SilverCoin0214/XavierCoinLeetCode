/*
 * @Author: your name
 * @Date: 2021-12-14 20:59:17
 * @LastEditTime: 2021-12-14 20:59:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinLeetCode/278. 第一个错误的版本/20211214.js
 */


/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0
        let right = n

        while (left <= right) {
            let mid = Math.floor((right + left) / 2)

            if (isBadVersion(mid) == true) {
                right = mid - 1
            }

            if (isBadVersion(mid) == false) {
                left = mid + 1
            }
        }

        return left
    };
};
