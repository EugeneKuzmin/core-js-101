/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  const n1 = num % 3;
  const n2 = num % 5;
  if (n1 === 0 && n2 === 0) {
    return 'FizzBuzz';
  } if (n1 === 0) {
    return 'Fizz';
  } if (n2 === 0) {
    return 'Buzz';
  }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let f = 1;
  for (let index = 1; index <= n; index += 1) {
    f *= index;
  }
  return f;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = n1;
  for (let i = n1 + 1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || c + b <= a) return false;
  return true;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  if ((rect1.top >= rect2.top
    && rect1.top <= (rect2.top + rect2.height)
    && rect1.left >= rect2.left
    && rect1.left <= (rect2.left + rect2.width))

  || (rect1.top >= rect2.top
    && rect1.top <= (rect2.top + rect2.height)
    && rect1.left + rect1.width >= rect2.left
    && rect1.left + rect1.width <= (rect2.left + rect2.width))

  || (rect1.top + rect1.height >= rect2.top
    && rect1.top + rect1.height <= rect2.top + rect2.height
    && rect1.left >= rect2.left
    && rect1.left <= rect2.left + rect2.width)

  || (rect1.top + rect1.height >= rect2.top
    && rect1.top + rect1.height <= rect2.top + rect2.height
    && rect1.left + rect1.width >= rect2.left
    && rect1.left + rect1.width <= rect2.left + rect2.width)

  || (rect1.top <= rect2.top && rect1.top + rect1.height >= rect2.top + rect2.height
    && rect1.left <= rect2.left
    && rect1.left + rect1.height >= rect2.left + rect2.height)) return true;
  return false;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  return Math.sqrt((circle.center.x - point.x) ** 2
  + (circle.center.y - point.y) ** 2) < circle.radius;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const s = str.split('').reduce((acc, l) => {
    const curGroup = acc[l] || [];
    return { ...acc, [l]: [...curGroup, 1] };
  }, {});
  let fLetter = null;
  Object.keys(s).forEach((el) => {
    if (s[el].length === 1 && !fLetter) {
      fLetter = el;
    }
  });

  return fLetter;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let resStr = a < b ? `${a}, ${b}` : `${b}, ${a}`;
  resStr = isStartIncluded ? `[${resStr}` : `(${resStr}`;
  return isEndIncluded ? `${resStr}]` : `${resStr})`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return Number(num.toString().split('').reverse().join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  let sum = 0;
  const ccnStr = `${ccn}`;
  const mod = (ccnStr.length) % 2;
  for (let i = 0; i < ccnStr.length; i += 1) {
    let checkDigit = Number(ccnStr[i]);
    if ((i % 2) === mod) {
      checkDigit *= 2;
      if (checkDigit > 9) checkDigit -= 9;
    }
    sum += checkDigit;
  }
  return Number(sum % 10) === 0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  function getNumbersSum(n) {
    const sumNum = n.toString().split('').reduce((sum, i) => {
      // eslint-disable-next-line no-param-reassign
      sum += Number(i);
      return sum;
    },
    0);
    const nLength = sumNum.toString().length;
    return nLength > 1 ? getNumbersSum(sumNum) : sumNum;
  }
  return getNumbersSum(num);
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']];

  const bracketTypes = bracketsConfig.reduce((arr, curr, i) => {
    arr.push({ bracket: curr[0], operation: curr[0] === curr[1] ? '*' : '+', type: i });
    arr.push({ bracket: curr[1], operation: curr[0] === curr[1] ? '*' : '-', type: i });
    return arr;
  }, []);

  const checkArray = [];

  for (let index = 0; index < str.length; index += 1) {
    const bracketElement = bracketTypes.find((x) => x.bracket === str[index]);
    if (bracketElement.operation === '*') {
      if (checkArray.length && checkArray[checkArray.length - 1].type === bracketElement.type) {
        checkArray.pop();
      } else {
        checkArray.push({ type: bracketElement.type });
      }
    } else if (bracketElement.operation === '+') {
      checkArray.push({ type: bracketElement.type });
    } else if (checkArray.length
      && checkArray[checkArray.length - 1].type === bracketElement.type) {
      checkArray.pop();
    } else {
      return false;
    }
  }

  if (checkArray.length) {
    return false;
  }

  return true;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const path = `${pathes[0].split('/').reduce((acc, i) => {
    const sum = pathes.reduce((includes, el) => {
      // eslint-disable-next-line no-param-reassign
      if (el.startsWith(`${acc}/${i}/`)) includes += 1;
      return includes;
    }, 0);
    if (sum === pathes.length) {
      // eslint-disable-next-line no-param-reassign
      acc = `${acc}/${i}`;
    }
    return acc;
  })}/`;
  if (path.length === 1 && !pathes.every((x) => x.startsWith('/'))) {
    return '';
  }

  return path;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const resMtrx = [];
  for (let i = 0; i < m1.length; i += 1) {
    resMtrx[i] = [];
    for (let j = 0; j < m2[0].length; j += 1) {
      let sum = 0;
      for (let k = 0; k < m1[0].length; k += 1) {
        sum += m1[i][k] * m2[k][j];
      }
      resMtrx[i][j] = sum;
    }
  }
  return resMtrx;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const numMatrx = [2, 3, 5, 7, 11, 13, 17, 19, 23];
  function hasCrossOver(x) {
    const pMatrx = position.reduce((acc, m) => {
      if (m.length === 3) {
        acc.push(m[0]);
        acc.push(m[1]);
        acc.push(m[2]);
      }
      if (m.length === 2) {
        acc.push(m[0]);
        acc.push(m[1]);
        acc.push(undefined);
      }
      if (m.length === 1) {
        acc.push(m[0]);
        acc.push(undefined);
        acc.push(undefined);
      }

      return acc;
    }, []);

    let posX = pMatrx.indexOf(x);
    while (posX !== -1) {
      pMatrx[posX] = numMatrx[posX];
      posX = pMatrx.indexOf(x);
    }
    const allMult = pMatrx.reduce((mult, multiplicator) => {
      // eslint-disable-next-line no-param-reassign
      mult *= typeof multiplicator !== 'number' ? 1 : multiplicator;
      return mult;
    }, 1);
    if ((allMult % 30) === 0) return true;
    if ((allMult % 1001) === 0) return true;
    if ((allMult % 7429) === 0) return true;
    if ((allMult % 238) === 0) return true;
    if ((allMult % 627) === 0) return true;
    if ((allMult % 1495) === 0) return true;
    if ((allMult % 506) === 0) return true;
    if ((allMult % 935) === 0) return true;
    return false;
  }

  if (hasCrossOver('X')) return 'X';
  if (hasCrossOver('0')) return '0';
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
