function arrangeCoins(n) {
    let rows = 0;
  
    for (let i = 1; n >= 0; i++) {
      n -= i;
      rows++;
    }
  
    return rows - 1;
  }
  
  // Test the function
  const n = 5;
  const result = arrangeCoins(n);
  console.log(result); // Output: 2
  