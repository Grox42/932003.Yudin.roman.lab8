function AddRow() {
	var row = document.querySelector(".row").cloneNode(true);
	var table = document.querySelector("#list");
	table.appendChild(row);
}

function DelRow(row) {
	row.parentElement.remove();
}

function Save() {
	var inputF = document.querySelectorAll(".inputFirst");
	var inputS = document.querySelectorAll(".inputSecond");
	var arr = [];
	
	for (var i = 1; i < inputF.length; i++) 					// i = 0 - шаблон
		arr.push(inputF[i].value + " : " + inputS[i].value);
	
	arr = JSON.stringify(arr);
	arr = '{' + arr.slice(1, arr.length - 1) + '}';
	
	document.querySelector("#output").innerHTML = arr;
}

function Up(row) {
	let temp = row.parentElement.previousElementSibling;
	if (temp) {
		row.parentElement.after(temp);
	}
}

function Down(row) {
	var temp = row.parentElement.nextElementSibling;
	if (temp) {
		row.parentElement.before(temp);
	}
}
