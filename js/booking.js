function paymentselect () {
					
	credit = document.getElementById("credit").checked;
	if (credit == true) {
		document.getElementById('creditcard').style.display = 'block';
		document.getElementById('chequepayment').style.display = 'none';
		document.getElementById('cashpayment').style.display = 'none';
	} 
	
	cheque = document.getElementById("cheque").checked;
	if (cheque == true) {
		document.getElementById('chequepayment').style.display = 'block';
		document.getElementById('creditcard').style.display = 'none';
		document.getElementById('cashpayment').style.display = 'none';
	} 
	
	cash = document.getElementById("cash").checked;
	if (cash == true) {
		document.getElementById('cashpayment').style.display = 'block';
		document.getElementById('chequepayment').style.display = 'none';
		document.getElementById('creditcard').style.display = 'none';
	} 
}			
				
function openNav() {
	document.getElementById('mySidenav').style.display = 'block';
	document.getElementById('mySidenav').style.width = '100%';
	
}

function closeNav() {
	document.getElementById('mySidenav').style.display = 'none';
}

function disc () {
	adults = document.getElementById('adults').value;
	children = document.getElementById('children').value;
	if (adults == 2 && children == 2) {
		document.getElementById('famdisc').style.display = 'block';
		document.getElementById('promotionprice').style.display = 'block';
		document.getElementById('originalprice').style.textDecoration = 'line-through';
		
		document.getElementById('famdiscR').style.display = 'block';
		
		document.getElementById('promotionpriceM').style.display = 'block';
		document.getElementById('originalpriceM').style.textDecoration = 'line-through';
		document.getElementById('famdiscM').style.display = 'block';
	} else {
		document.getElementById('famdisc').style.display = 'none';
		document.getElementById('promotionprice').style.display = 'none';
		document.getElementById('originalprice').style.textDecoration = 'none';
		
		document.getElementById('famdiscR').style.display = 'none';
		
		document.getElementById('promotionpriceM').style.display = 'none';
		document.getElementById('originalpriceM').style.textDecoration = 'none';
		document.getElementById('famdiscM').style.display = 'none';
	}
}