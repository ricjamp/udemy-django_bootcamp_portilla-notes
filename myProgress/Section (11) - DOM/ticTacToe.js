document.addEventListener('DOMContentLoaded', (event) => {
  const cells = document.querySelectorAll('td');
  // Clear contents of table cells
  const reset = document.getElementById('resetBtn');
  reset.addEventListener('click', function() {
    cells.forEach(function(cell) {
      cell.innerText = '';
    });
  });

  // Add X's and O's to table cells
  cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
      cell.innerText = 'X';
    });
    cell.addEventListener('dblclick', function() {
      cell.innerText = 'O';
    });
  });
});
