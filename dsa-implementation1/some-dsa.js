function reverseLinkedlist(head) {
  let prev = null
  let current = head
  while (current) {
    const nextNode = current.next
    current.next = prev
    prev = current
    current = nextNode
  }
  return prev
}

/**
Q3. Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary). 
    You may assume that the intervals were initially sorted according to their start times. 
    Example 1: 
        Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9]. 
    Example 2: 
        Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16]. 
        This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
**/
// givenInterval = [[1,3],[6,9]], newInterval = [2,5]
const insertInterval = (intervals) => {
  const allIntervals = intervals.sort((a, b) => a[0] - b[0])
    let results = []
    for (let i = 0; i  < allIntervals.length; i++) {
        const currentInterval = allIntervals[i]
        const nextInterval = allIntervals[i+1]
        if (nextInterval && nextInterval[0] <= currentInterval[1]) {
            // reorder the currentInterval
            nextInterval[0] = Math.min(currentInterval[0], nextInterval[0])
            nextInterval[1] = Math.max(currentInterval[1], nextInterval[1])
        } else {
            results.push(currentInterval)
        }
    }
    return results
}

// test insertInterval function
console.log(insertInterval([[1,3],[6,9], [2,5]])); // [[1,3], [2, 5], [6,9]]
// write test case for insertInterval function
console.log(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16], [4,9]])); // [[1,2],[3,10],[12,16]]
[1,2],[3,5], [4,9], [6,7],[8,10],[12,16]


/**
 * Find the length of the circular linkedlist with a single pointer
 */

const findLength = (head) => {
  let current = head
  let length = 0
  while (current) {
    length++
    current = current.next
    if (current === head) {
      break
    }
  }
  return length
}


/**
 * def merge_sort(data):
  """Sorts a list of data using the merge sort algorithm.

  Args:
      data: A list of comparable elements.

  Returns:
      A new list containing the elements of the original data sorted in ascending order.
  """
  if len(data) <= 1:
    return data

  # Divide the data into two halves
  midpoint = len(data) // 2
  left_half = merge_sort(data[:midpoint])
  right_half = merge_sort(data[midpoint:])

  # Merge the sorted halves
  merged_data = []
  i = 0
  j = 0
  while i < len(left_half) and j < len(right_half):
    if left_half[i] < right_half[j]:
      merged_data.append(left_half[i])
      i += 1
    else:
      merged_data.append(right_half[j])
      j += 1

  # Add remaining elements from either half
  merged_data.extend(left_half[i:])
  merged_data.extend(right_half[j:])

  return merged_data
 */

  const mergeSort = (data) => {
    if (data.length <= 1) {
      return data
    }
    midpoint = data.length / 2
    left_half = mergeSort(data.slice(0, midpoint))
    right_half = mergeSort(data.slice(midpoint))

    merged_data = []
    i = 0
    j = 0
    while (i < length(left_half) && j < length(right_half)) {
      if (left_half[i] < right_half[j]) {
        merged_data.push(left_half[i])
        i++
      }
      else {
        merged_data.push(right_half[j])
        j++
      }
    }
    merged_data.push(...left_half.slice(i))
    merged_data.push(...right_half.slice(j))

    return merged_data
  }


  /**
 * Q4. Given a 2D board and a word, find if the word exists in the grid. 
For example, 
Given board = 
[ 
  ['A','B','C','E'], 
  ['S','F','C','S'], 
  ['A','D','E','E'] 
] 
word = 'ABCCED', -> returns true, 
word = 'SEE', -> returns true, 
word = 'ABCB', -> returns false.
**/



/**
Q1 Write a function that takes a string as input and returns the string reversed. 
   Please implement reverse function or method by yourself .
   Example: Given s = "hello", return "olleh"
**/
const reverse = (str) => {
  let reversedStr = '';
  for (let i = str.length - 1; i >=0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

const reverseReduce = (str) => {
  str.split('').reduce((acc, char) => char + acc, '');
}
// test reverse function
console.log(reverse('hello')); // olleh



/**
Q2. Given a positive integer num, write a function which returns True if num is a perfect square else False. 
    Note: Do not use any built-in library function such as sqrt. 
    Example 1: 
        Input: 16 
        Returns: True
**/
const isPerfectSquare = (num) => {
  if (num == 0 || num == 1) {
    return true;
  }

  for (let i = 1; i <= num / 2; i++) {
    if (i * i  === num) {
      return true;
    }
  }

  return false
}

// test isPerfectSquare function
console.log(isPerfectSquare(10)); // true

/**
Q5. Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -. 
Example:
Given a = 1 and b = 2, return 3.
**/
const sum = (a, b) => {
  if (b === 0) return a
  return sum(a ^ b, (a & b) << 1)
}

// test sum function
console.log(sum(1, 2)); // 3
// write test case for sum function
console.log(sum(3, 5)); // 8



