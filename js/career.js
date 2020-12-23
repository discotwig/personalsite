// JavaScript Document

function openModal(clicked_id) {
	var modal_id = clicked_id.replace("button","modal");
	window.alert(modal_id);
	
	var modal = document.getElementById(modal_id);
	window.alert(modal);
	modal.style.display = "inline-block";
	
//	var span = document.getElementsByClassName("close")[0];
//	// When the user clicks on <span> (x), close the modal
//	span.onclick = function() {
//		modal.style.display = "none";
//	}
//	// When the user clicks anywhere outside of the modal, close it
//	window.onclick = function(event) {
//		if (event.target == modal) {
//			modal.style.display = "none";
//		}
//	}	
}



