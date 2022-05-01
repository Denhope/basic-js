const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const out = arr.slice();
  const discardValue = Symbol();

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (i < out.length - 1) {
          out[i + 1] = discardValue;
        }
        out[i] = discardValue;
        break;
      case "--discard-prev":
        if (i > 0) {
          out[i - 1] = discardValue;
        }
        out[i] = discardValue;
        break;
      case "--double-next":
        if (i < out.length - 1) {
          out[i] = out[i + 1];
        } else {
          out[i] = discardValue;
        }
        break;
      case "--double-prev":
        if (i > 0) {
          out[i] = out[i - 1];
        } else {
          out[i] = discardValue;
        }
    }
  }

  return out.filter((el) => el !== discardValue);
}

module.exports = {
  transform,
};
