// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById("resultado");
const inputAmigo = document.getElementById ("amigo");

function agregarAmigo () {
    listaAmigos.push(inputAmigo.value);
    console.log(listaAmigos);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};

function sortearAmigo(){
   const random = Math.floor((Math.random() * listaAmigos.length));
   console.log(random);
   const amigoSecreto = listaAmigos[random];
   ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`;

};





