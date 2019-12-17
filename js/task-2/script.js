function createTable() {
	let height = document.getElementById('form').children[0].value;
	let width = document.getElementById('form').children[1].value;
	document.getElementById('tab').innerHTML += '<table id="table"><tbody id="tbody"></tbody></table>';
	for (let i = 0; i < height; i++){
		document.getElementById('tbody').innerHTML += '<tr></tr>';
		for (let j = 0; j < width; j++){
			document.getElementById('tbody').children[i].innerHTML += '<td><form><input type="text" placeholder="_"><input type="button" value="save" onclick="saveText(' + i + ', ' + j + ')"></form></td>';
		}
	}
	document.getElementById('func').removeChild(document.getElementById('form'));
	for (let k = 0; k < 5; k++){
		document.getElementById('func').innerHTML += '<div class="func_"></div>';
	}
	localStorage.setItem('height', height);
	localStorage.setItem('width', width);
	document.getElementById('func').children[0].innerHTML += '<form id="apply"><input type="text" placeholder="new width" id="nw" oninput="changeButtonText()"><select oninput="changeButtonText()"><option disabled selected>border</option><option>hidden</option><option>dotted</option><option>dashed</option><option>solid</option></select><input type="button" onclick="changeTableWidth()" value="Apply"></form>';
	document.getElementById('func').children[1].innerHTML += '<form><input type="text" placeholder = "type header here" id = "header_hold"><input type="button" onclick="createHeader()" value="Header"></form>';
	document.getElementById('func').children[2].innerHTML += '<form><input type="text" placeholder="Delete row #" id="delrow"><input type="button" onclick="deleteRow()" value="Delete"></form>';
	document.getElementById('func').children[3].innerHTML += '<input type="button" onclick="makeMagic()" value="This is gonna magic!">';
	document.getElementById('func').children[4].innerHTML += '<input type="button" onclick="removeTable()" value="Delete table">';
	
}

function saveText(row, column) {
	let cell = document.getElementById('tbody').children[row].children[column];
	let mustRemove = cell.children[0];
	let savedText = mustRemove.children[0].value;
	cell.removeChild(mustRemove);
	cell.innerHTML += '<p>' + savedText + '</p>';
}

function changeButtonText() {
	let val1 = document.getElementById("nw").value;
	let val2 = document.getElementsByTagName('select')[0].value;
	document.querySelector('#apply [type="button"]').value = "Apply width:" + val1 + "% & border:" + val2 + " black";
}

function changeTableWidth() {
	document.getElementById('table').style = 'width: ' + document.getElementById("nw").value + '%; border: 2px ' + document.getElementsByTagName('select')[0].value + ' black;';
}

function createHeader() {
	let hh = document.getElementById("header_hold").value;
	document.getElementById('table').innerHTML += '<caption>' + hh + '</caption>';
}
function makeMagic() {
	let tds = document.querySelectorAll(`td`);
	let td = tds[Math.floor(Math.random() * tds.length)];
	if (!tds.length) return;
	if (Math.random() >= 0.5) {
		td.style.backgroundColor = randColor();
		td.style.color = randColor();
		td.style.fontSize = `${Math.floor(Math.random() * 10 + 15)}pt`;
	} else {
		let coords = td.id.split(`d`)[1];
		let row = +coords.split(`,`)[0];
		let col = +coords.split(`,`)[1];
		td.innerHTML = `<form><input type="textarea" id="f${row},${col}"><input type="button" onclick="changedata(${row}, ${col})" value="Save"></form>`;
	}
}
function randColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}

function deleteRow() {
	let row = document.getElementById('delrow').value;
	let limit = document.getElementById('tbody').children.length;
	if ((1 <= row) && (row <= limit)){
		document.getElementById('tbody').children[row-1].remove();
		return;
	}
	alert('Этого ряда не существует')
	return;
}
	function removeTable(){
		document.getElementById('func').innerHTML = '<form id="form"><input name="height" type="text" value="height"><input name="width" type="text" value="width"><input type="submit" onclick="createTable()"></form>';
		document.getElementById('tab').innerHTML = '';
	}
