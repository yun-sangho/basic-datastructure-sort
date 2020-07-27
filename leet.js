const removeDuplicates = (nums = []) => {
  let len = nums.length;

  if (!len) return 0;

  let pointer = 0;

  for (let i = 1; i < len; i++) {
    if (nums[pointer] !== nums[i]) {
      pointer++;
      nums[pointer] = nums[i];
    }
  }

  return pointer + 1;
};

const maxProfit = (prices = []) => {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    // 증가할 때 무조건 판매한다.
    if (prices[i] > prices[i - 1]) {
      profit = profit + (prices[i] - prices[i - 1]);
    }
  }

  return profit;
};

var reverseString = function (s) {
  let half = Math.floor(s.length / 2);
  let len = s.length;

  for (let i = 0; i < half; i++) {
    let mirror = i + (len - 1 - i * 2);

    [s[i], s[mirror]] = [s[mirror], s[i]];
  }

  return s;
};

var firstUniqChar = function (s) {
  const map = {};

  for (let c of s) {
    if (!(c in map)) {
      map[c] = 0;
    }
    map[c] = map[c] + 1;
  }

  for (let c in map) {
    if (map[c] === 1) {
      return s.indexOf(c);
    }
  }

  return -1;
};

console.log(firstUniqChar("dddccdbba"));

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;

  let first = needle[0];

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === first) {
      let j = i;
      let k = 0;

      while (haystack[j] === needle[k]) {
        if (k === needle.length - 1) {
          return i;
        }
        j++;
        k++;
      }
    }
  }

  return -1;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let prefix = "";

  let firstStr = strs[0];
  let rest = strs.slice(1);

  for (let i = 0; i < firstStr.length; i++) {
    let char = firstStr[i];

    for (let str of rest) {
      if (str[i] !== char) {
        return prefix;
      }
    }

    prefix = prefix + char;
  }

  return prefix;
};

/**
 *
 * find first none whitespace
 *
 * and check if it it a digit or -, else return 0
 *
 *
 */
var myAtoi = function (str) {
  const MAX_INT = 2147483647;
  const MIN_INT = -2147483648;

  let result = "";
  let sign = 1;

  let trimed = str.trim();

  if (trimed[0] === "-" || trimed[0] === "+") {
    sign = trimed[0] === "-" ? -1 : 1;
    trimed = trimed.slice(1);
  }

  for (let i = 0; i < trimed.length; i++) {
    let c = trimed[i];

    if (isNaN(+c) || c === " ") {
      break;
    }

    result = result + c;
  }

  if (!result) return 0;
  result = sign * +result;
  if (result > 2147483647) return MAX_INT;
  if (result < -2147483648) return MIN_INT;
  return result;
};

var reverse = function (x) {
  const MAX_INT = 2147483647;
  const MIN_INT = -2147483648;

  let str = String(x);

  let sign = 1;

  if (str[0] === "-") {
    sign = -1;
    str = str.slice(1);
  }

  const result = sign * +str.split("").reverse().join("");

  if (result > MAX_INT || result < MIN_INT) return 0;
  
  return result;
};


var merge = function (nums1, m, nums2, n) {
  let i = m + n - 1;
  let a = m - 1;
  let b = n - 1;

  while (a >= 0 && b >= 0) {
    if (nums1[a] > nums2[b]) {
      nums1[i] = nums1[a];
      a = a - 1;
    } else {
      nums1[i] = nums2[b];
      b = b - 1;
    }
    i = i - 1;
  }

  while (b >= 0) {
    nums1[i] = nums2[b];
    b = b - 1;
    i = i - 1;
  }
};

// let a = [1, 2, 3, 0, 0, 0];
// console.log(merge(a, 3, [2, 5, 6], 3));
// console.log(a);

merge([0], 0, [1], 1);

var solution = function (isBadVersion) {
  return function (n) {
    const loop = (from, to, previous) => {
      let half = Math.floor((from + to) / 2);
      let result = isBadVersion(half);

      if (!result) {
        if (previous) {
          return to + 1;
        }
        return loop(half + 1, to, result);
      }

      return loop(from, half - 1, result);
    };

    if (n < 2) {
      return n;
    }

    return loop(0, n, false);
  };
};



function Calculator() {

  this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
  };

  this.calculate = function(str)  {
      s=str.split(' ');
      console.log(s)
      a = +s[0];
      op = str[1];
      b = +s[2];
      console.log(op)
      // return this.methods[op](a, b);
  }
}

let cal = new Calculator();


/**
 * 
 * @param {*} graph
 * [
 *  [1, 3]
 *  [0, 2, 3]
 *  [3]
 *  [0, 1]
 * ] 
 */
const trace = (graph = [], k = 0) => {
  const result = []

  const traverse = (vertex = 0, depth = 0) => {
    if (depth === k) {
      result.push(vertex)
      return
    }

    for (let v of graph[vertex]) {
      traverse(v, depth + 1)
    }
  }

  traverse(0, 0)

  let endPoints = result.reduce((acc, cur) => {
    if (!(cur in acc)) {
      acc[cur] = 0
    }
    acc[cur] = acc[cur] + 1
    return acc
  }, {})

}

const graph = [
  [1, 3],
  [2, 0, 3],
  [1, 3],
  [0, 2]
]

trace(graph, 2)

// 1235813

const isAddtiveNum = (num = '') => {
  for (let i = 0; i < (num.length / 2); i++) {
    for (let j = 0; j < ((num.length - i) / 2); j++) {
      let first = num.slice(0, i + 1)
      let second = num.slice(i + 1, i + j + 2)
      let others = num.slice(i + j + 2)

      if (isValid(first, second, others)) {
        return true
      }
    }
  }
  return false
}

const isValid = (first = '', second = '', others = '') => {
  if ((first.length > 1 && first[0] === 0) || second.length > 1 && second[0] === 0) {
    return false
  }

  let sum = ((+first) + (+second)).toString()

  if (sum === others) {
    return true
  }

  if (others.startsWith(sum)) {
    return isValid(second, sum, others.slice(sum.length))
  }

  return false
}


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {
  const traverse = (values = [], left = 0, right = 0) => {
    if (left > right) {
      return null // leaf
    }

    let half = Math.floor(left + (right - left) / 2)

    return new TreeNode(
      values[half],
      traverse(values, left, half - 1),
      traverse(values, half + 1, right)
    )
  }

  return traverse(nums, 0, nums.length - 1)
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let onlyAlphanumeric = s.toLowerCase().replace(/[^0-9^a-z^A-Z]/g, '')

    let len = onlyAlphanumeric.length

    if (len < 2) {
      return true
    }

    let left = 0
    let right = len - 1

    while(left < right) {
      if (onlyAlphanumeric[left] !== onlyAlphanumeric[right]) return false
      left++
      right--
    }

    return true
};

/**
 * 1 -> 1
 * 2 -> 1 1
 * 3 -> 11 1
 * 4 -> 1 2 1
 * 5 -> 
 */
const createString = (s = '1') => {
  let count = 0
  let beforeChar = s[0]
  let result = ''

  for (let i = 0; i < s.length; i++) {
    if (beforeChar !== s[i]) {
      result = result + count + beforeChar
      count = 0
    }

    count = count + 1
    beforeChar = s[i]
  }

  result = result + count + beforeChar

  return result
}

var countAndSay = function(n) {
  if (n === 1) {
    return '1'
  }

  let prev = countAndSay(n - 1)

  let count = 0
  let result = ''

  for (let i = 0; i < prev.length; i++) {
    count = count + 1

    if (prev[i] !== prev[i + 1]) {
      result = result + count + prev[i]
      count = 0
    }
  }

  return result
};


class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const reversef = (head) => {
  /**
   * 1. 역순 정렬 된 것을 저장할 곳
   * 2. loop
   *  -1. 현재의 다음 node를 임시 저장
   *  -2. 현재의 next = 역순 정렬
   *  -3. 임시 노드를 현재 노드로 변경
   */
  let prev = null

  while(head) {
    let temp = head.next

    head.next = prev
    prev = head // 현재까지 역순으로 정렬

    head = temp
  }

  return prev
}

/**
 * 
 * 1. 중간 지점을 찾는다.
 * 2. 중간 지점 이후로 역순으로 만든다.
 * 3. 처음 ~ 중간, 역순을 차례로 비교한다.
 * 4. 역순을 다시 되돌린다. 
 */
var isPalindrome = function(head) {
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head
  let fast = head

  while (fast) {
    if (fast.next === null) {
      break
    }
    slow = slow.next
    fast = fast.next.next
  }
  
  let reversed = reversef(slow)
  let reversedCopy = reversed

  let result = true

  while (reversed) {
    if (reversed.value !== head.value) {
      result = false
      break
    }

    reversed = reversed.next
    head = head.next
  }

  reversef(reversedCopy)

  return result
};

const head = new Node(1);
head.next = new Node(2);
// head.next.next = new Node(6);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(2);

console.log(isPalindrome(head))
