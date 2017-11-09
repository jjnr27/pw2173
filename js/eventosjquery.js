
var inicia = function(){
	var nuevo= function(){
		$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	//alert(data.results[0].name.first+" "+data.results[0].name.last);
    //console.log(data); 
    //Recupera el nombre y la foto
    $("#nombre").html("Nombre: "+data.results[0].name.first+" "+data.results[0].name.last);
    $("#foto").attr("src",data.results[0].picture.large);
    $("#street").html("Dirección: "+data.results[0].location.street);
    $("#city").html("Ciudad: "+data.results[0].location.city);
    $("#state").html("Estado: "+data.results[0].location.state);
    $("#postcode").html("Código postal: "+data.results[0].location.postcode);
    $("#email").html("Email: "+data.results[0].email);
    $("#user").html("Usuario: "+data.results[0].login.username);
    $("#password").html("contraseña: "+data.results[0].login.password);
    //$("#nombre").html("Nombre :"data.results[0].name.first+" "+data.results[0].name.last);
  }
});
	}
	//JSON JavaScript Object Notation
	
	$("#btnNuevo").on("click",nuevo);
}

//cuando la página está listo se dispara una acción
//Iniciamos JQuery
$(document).ready(inicia);