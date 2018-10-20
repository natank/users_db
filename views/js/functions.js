$(document).ready(fucntion())
{
	const $form = $('#addUserForm')

	$form.on('submit', submitHandler)

	function submitHandler (e) {
	  e.preventDefault()

	  $.ajax({
	    url: '/addUserFormSubmit',
	    type:'POST',
	    data: $form.serialize()
	  }).done(response => {
	    console.log(response)
	  }) 
	}

	function handleDelete(){
		alert("handle delete")
	}
}