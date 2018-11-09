function paymentselect () {
					
	credit = document.getElementById("visa").checked;
	if (credit == true) {
		document.getElementById('creditcard').style.display = 'block';
	} else document.getElementById('creditcard').style.display = 'none';
	
	cheque = document.getElementById("cheque").checked;
	if (cheque == true) {
		document.getElementById('chequepayment').style.display = 'block';
	} else document.getElementById('chequepayment').style.display = 'none';
}

function paymentcash () {
	document.getElementById("cash").style.display = 'block';
	document.getElementById("creditcard").style.display = 'none';
}

function paymentvisa () {
	document.getElementById("creditcard").style.display = 'block';
	document.getElementById("cash").style.display = 'none';
	document.getElementById("chequepayment").style.display = 'none';
}

function paymentmaster () {
	document.getElementById("creditcard").style.display = 'block';
	document.getElementById("cash").style.display = 'none';
	document.getElementById("chequepayment").style.display = 'none';
}

function paymentpaypal () {
	document.getElementById("creditcard").style.display = 'block';
	document.getElementById("cash").style.display = 'none';
	document.getElementById("chequepayment").style.display = 'none';
}
			
				
function openNav() {
	document.getElementById('mySidenav').style.display = 'block';
	document.getElementById('mySidenav').style.width = '100%';
	
}

function closeNav() {
	document.getElementById('mySidenav').style.display = 'none';
}