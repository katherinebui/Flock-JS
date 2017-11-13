function removeItem() {
  var close = document.getElementsByClassName('close');
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      console.log('hi');
    };
  }
}

function addItem() {
  var table = document.querySelector('.table');
  var button = document.createElement('button');
  button.className = 'close';
  var x = document.createTextNode('\u00D7');
  button.appendChild(x);
  button.setAttribute('onclick', 'removeItem()');
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = document.getElementById('name').value;
  cell2.innerHTML = document.getElementById('topic').value;
  cell3.innerHTML = document.getElementById('due').value;
  cell4.innerHTML = document.getElementById('completed').value;
  cell5.appendChild(button);

  document.getElementById('name').value = '';
  document.getElementById('topic').value = '';
  document.getElementById('due').value = '';
  document.getElementById('completed').value = '';
}
