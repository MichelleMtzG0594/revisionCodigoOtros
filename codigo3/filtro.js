// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]
/* Cambie a getElementById y puse globales las variables para que nos muestre los productos */
/* Hice cambio en todas las variabloes para que sean más descriptivas y el código sea menas confuso */
const lista = document.getElementById("lista-de-productos")
const input = document.getElementById('input');
const botonDeFiltro = document.getElementById("button");

/* La función displayProductos no estaba definida, sólo la llamaban */
const displayProductos = (productos) => {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }



for (let i = 0; i < productos.length; i++) {
  const div = document.createElement("div")
  div.classList.add("producto")

  const titulo = document.createElement("p")
  titulo.classList.add("titulo")
  titulo.textContent = productos[i].nombre
  
  const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  div.appendChild(titulo)
  div.appendChild(imagen)

  lista.appendChild(div)
}
};
displayProductos(productos);


/* 
Este código se repite en la función anterior porlo que lo comenté
const productosFiltrados = (productos = [], texto ) => {
   while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
    for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
} */

  /* En esta función agregue la función de filtrado */

  const filtrado = (productos = [], texto) => {
    /* El método es filter no filtrado */
  return productos.filter(item =>
     item.tipo.includes(texto) || item.color.includes(texto));
  } ;


/* Agregue el addEventListener y un callback que llama a la función de filtrado
y pasa el resultado a la función de displayProductos */
  botonDeFiltro.addEventListener("click", ()=>{
    const texto = input.value;
  console.log(texto);
const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
  });


