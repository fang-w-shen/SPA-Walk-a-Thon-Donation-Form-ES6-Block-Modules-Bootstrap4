document.getElementById("submit").addEventListener("click", ()=> {
	
	printtodom();
});

document.getElementById("cancel").addEventListener("click", ()=> {
	
	clearform();
});

let domarea = document.getElementById("body");		

function donationtype() {
	let a = document.getElementById("optionsRadios1").checked;
	let b = document.getElementById("optionsRadios1").checked
	if (a===true) {
		return "Lump-Sum"
	}
	else {
		return "Per-Lap"
	}
}
function printtodom() {
	let email = document.getElementById("exampleInputEmail1").value;
	let name = document.getElementById("Name").value;
	let donation = document.getElementById("Donation").value;
	let type = donationtype();
	let content = donor.donate(email,name,donation,type);

		domarea.innerHTML += `<tr><th scope="row">${content.length}</th>
	            	<td>${content[content.length-1]["E-mail"]}</td>
	            	<td>${content[content.length-1]["Name"]}</td>
	            	<td>$${content[content.length-1]["Donation"]}.00</td>
	            	<td>${content[content.length-1]["Type"]}</td></tr>`
	            	document.getElementById("exampleInputEmail1").value='';
	            	document.getElementById("Name").value='';
	            	document.getElementById("Donation").value='0';
	            	document.getElementById("optionsRadios1").checked = false;
	            	document.getElementById("optionsRadios2").checked = false;
	
}

function clearform() {
	document.getElementById("exampleInputEmail1").value='';
	document.getElementById("Name").value='';
	document.getElementById("Donation").value='0';
	document.getElementById("optionsRadios1").checked = false;
	document.getElementById("optionsRadios2").checked = false;
}