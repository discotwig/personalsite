// JavaScript Document
//

// onClick for spans
function closeModal(modal_id) {
	document.getElementById(modal_id).style.display = 'none';
}

// same thing, one liner
//let closeModal = modal_id => document.getElementById(modal_id).style.display = 'none';

function openModal(clicked_id) {
	var modal_id = clicked_id.replace('button', 'modal');
	//	window.alert(modal_id);
	var modal = document.getElementById(modal_id);
	//	window.alert(modal);
	modal.style.display = 'inline-block';
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	}
}
