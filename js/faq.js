function openfirst () {
	$first = document.getElementById('first');
	$first.classList.toggle('active');	
	$first.nextElementSibling.classList.toggle('active');
}
window.onload = openfirst;

const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));