
var inicia = function(){
	//JSON JavaScript Object Notation
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	alert(data.results[0].name.first+" "+data.results[0].name.last);

    //console.log(data);
  }
});
}
//cuando la página está listo se dispara una acción
//Iniciamos JQuery
$(document).ready(inicia);