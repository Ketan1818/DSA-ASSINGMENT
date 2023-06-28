function sortedSquares(nums) {
    const squared = [];
  
    for (let i = 0; i < nums.length; i++) {
      const squaredNum = nums[i] * nums[i];
      squared.push(squaredNum);
    }
  
    squared.sort((a, b) => a - b);
  
    return squared;
  }
  
  // Test the function
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result); // Output: [0, 1, 9, 16, 100]
  