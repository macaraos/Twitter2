//Darle funcionalidad al boton
var botonLlamar = document.getElementById("btn");
botonLlamar.addEventListener("click", rescatarMensaje);

//Rescatando mensaje de ingreso
function rescatarMensaje(){

	var comment = document.getElementById("comment").value;
	document.getElementById("comment").value = " ";

		//Llamando a boton
		var btn = document.getElementById("btn");

		//Creando contenedor para mensajes
		var mensaje = document.createElement("div");
		mensaje.classList.add("divNuevo");

		var texto = document.createElement("p");

		//Llamando a contenedor de mensajes
		var cont = document.getElementById("cont");
		var textTwo = document.createTextNode(comment);

//Agregar hora del mensaje
var fecha = new Date();
var hora = fecha.getHours();
var min = fecha.getUTCMinutes();

function minDigits() {
	min = fecha.getUTCMinutes();
	if(min < 10) {
		return '0' + min;
	} else {
		return min;
	}
}
//Div donde irá la hora
var contenedorHora = document.createElement('div');
contenedorHora.comment = hora + ':' + min;
mensaje.insertBefore(contenedorHora,mensaje.childNodes[0]);

	//Dandole a cada padre su hijo
	texto.appendChild(textTwo);
	mensaje.appendChild(texto);
	cont.appendChild(mensaje);
}

//Hacer que cada vez que se escriba, se cuenten los caracteres
var zonaComment = document.getElementById("comment");
zonaComment.addEventListener("keydown", contador);

//Contar en forma regresiva y que cambien de color segun cantidad de caracteres
function contador(){
		var contador = document.getElementById("contador");
		var comment = document.getElementById("comment").value;
		var caracteres = comment.length;
		contador.innerHTML = 140 - caracteres;

		if(caracteres > 0 && caracteres < 120){
			contador.style.color = "green";
		}

		if(caracteres >= 120 && caracteres < 130){
			contador.style.color = "orange";
		}

		if(caracteres >= 130 && caracteres < 140){
			contador.style.color = "red";
		}

		//desactivar boton cuando no se ingresan caracteres o son superior a 140
		if(caracteres === 0){
			btn.disabled = true;
		}
		else if(caracteres > 140){
			btn.disabled = true;
//En caso contrario activarlo
}else{
	btn.disabled = false;
}

}

