/*function showModal(){
	$('.ui.modal')
  .modal('show');
}
*/


/*function showModal(){
$('.fullscreen.modal')
  .modal('show')
;
}
*/

function showModal(){
	
	console.log('clicked');
	$('.ui.modal').modal('show');
}


function saveData(form){

var userFeedback=
{
	
	name:form.name.value,
	surname:form.surname.value,
	rating:form.rating.value,
	message:form.message.value
}

console.log(userFeedback);

$.post('Tsholo-Widget/save.jason', userFeedback,function(data,status){
	console.log(data);
});
}