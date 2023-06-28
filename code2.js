function findDistinctIntegers(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const answer1 = [];
    const answer2 = [];
  
    for (const num of nums1) {
      if (!set2.has(num)) {
        answer1.push(num);
      }
    }
  
    for (const num of nums2) {
      if (!set1.has(num)) {
        answer2.push(num);
      }
    }
  
    return [answer1, answer2];
  }
  
  // Test the function
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  
  const result = findDistinctIntegers(nums1, nums2);
  console.log(result); // Output: [[1, 3], [4, 6]]
  