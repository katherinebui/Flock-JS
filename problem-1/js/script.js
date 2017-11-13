function addItem() {
  var table = document.querySelector('.table');
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = document.getElementById('name').value;
  cell2.innerHTML = document.getElementById('topic').value;
  cell3.innerHTML = document.getElementById('due').value;
  cell4.innerHTML = document.getElementById('completed').value + ;

  document.getElementById('name').value = '';
  document.getElementById('topic').value = '';
  document.getElementById('due').value = '';
  document.getElementById('completed').value = '';
}

