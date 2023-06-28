function transposeMatrix(matrix) {
    const transpose = [];
  
    for (let i = 0; i < matrix.length; i++) {
      const row = [];
  
      for (let j = 0; j < matrix[i].length; j++) {
        row.push(matrix[j][i]);
      }
  
      transpose.push(row);
    }
  
    return transpose;
  }
  
  // Test the function
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  
  const result = transposeMatrix(matrix);
  console.log(result);
  