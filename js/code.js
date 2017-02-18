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

$.post('http://httpbin.org/post', userFeedback,function(data,status){
	console.log(data);
	console.log(status);
});
}