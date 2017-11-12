function agregar(){
	var comentario = document.getElementById("comment").value;

document.getElementById("comment").value = " ";

var btn = document.getElementById("btn")
var cont = document.getElementById("cont");

var newComments = document.createElement("div");

var textNewComment = document.createTextNode(comentario);

var contenedorElemento = document.createElement("p");
var contador = document.getElementById("contador");

contenedorElemento.appendChild(textNewComment);
newComments.appendChild(contenedorElemento);
cont.appendChild(newComments);

};
