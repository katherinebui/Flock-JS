function removeItem() {
  var tableBody = document.getElementById('tbody');
  var lastListItem = tableBody.lastChild;
  lastListItem.remove();
}

function addItem() {
  var table = document.querySelector('.table');
  var button = document.createElement('button');
  button.className = 'close';
  var x = document.createTextNode('\u00D7');
  button.appendChild(x);
  button.setAttribute('onclick', 'removeItem()');
  var row = table.insertRow(-1);
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell4 = row.insertCell(4);
  cell0.innerHTML = document.getElementById('name').value;
  cell1.innerHTML = document.getElementById('topic').value;
  cell2.innerHTML = document.getElementById('due').value;
  cell3.innerHTML = document.getElementById('checkbox').checked;
  cell4.appendChild(button);
  document.querySelector('form').reset();
}
