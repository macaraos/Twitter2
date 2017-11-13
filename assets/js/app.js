var botonLlamar = document.getElementById("btn");
botonLlamar.addEventListener("click", rescatarMensaje);


function rescatarMensaje(){

		var comment = document.getElementById("comment").value;
		document.getElementById("comment").value = " ";

		var btn = document.getElementById("btn");



		var mensaje = document.createElement("div");
		mensaje.classList.add("divNuevo");

		var texto = document.createElement("p");

		var cont = document.getElementById("cont");
		var textTwo = document.createTextNode(comment);


		texto.appendChild(textTwo);
		mensaje.appendChild(texto);
		cont.appendChild(mensaje);

}

var zonaComment = document.getElementById("comment");
zonaComment.addEventListener("keydown", contador);

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

		if(caracteres == null || caracteres > 140){
			btn.disabled = true;
		}

		if(caracteres > 0 || caracteres < 140){
			btn.disabled = false;
		}

}
