

const contenido = document.querySelector(".contenido")
const modal = document.querySelector(".modal")
const modalContent = document.querySelector("#modalContent")
let precioProducto;
let nodo;
/**
 * @typedef {Object} producto
 * @property {string} nombre
 * @property {number} precio
 * @property {string} img
 */

/** @type {Array<producto>} */
// Esto simula la "Base de datos"
const productos = [
  { nombre: 'Producto A', precio: 270, img: "storage/images/FZ25 ABS/fz25_verde2.jpg" },
  { nombre: 'Producto B', precio: 340, img: "storage/images/MT10/Mt10_azul.png" },
  { nombre: 'Producto C', precio: 390, img: "storage/images/R1/R1-2022-COLOR_AZUL.jpg" },
];
const monedas = [10, 50, 100]
let inMonedas = 0;

/**
 * @param {Array<producto>} productos
 */
export function crearCards(productos) {
  productos.forEach((producto) => {
    let card = document.createElement('div');
    card.classList.add('cardItem');
    let productName = document.createElement('h2');
    productName.textContent = producto.nombre
    let productPrice = document.createElement('p');
    productPrice.textContent = `Precio: ${producto.precio}`;
    let imgProduct = document.createElement('img')
    imgProduct.src = producto.img
    let button = document.createElement('button')
    button.textContent = "Comprar"
    button.classList.add("botonAzul")
    button.addEventListener('click', function () {
      precioProducto = producto.precio
    })


    card.appendChild(imgProduct);
    card.appendChild(productName);
    card.appendChild(productPrice);
    card.appendChild(button)

    contenido.appendChild(card);
  });
}
/**
 * 
 * @param {Array} monedas
 * @param {number} coin 
 */
export function calcular(precioProducto, coin) {
  inMonedas += coin
  let vueltos = inMonedas - precioProducto
  if (inMonedas >= precioProducto) {
    modalContent.innerHTML += `Su vuelto es: <br/> ${vueltos} <br/> Monedas: <br/>`
    while (Math.floor(vueltos / 100) > 0) {
      modalContent.innerHTML += `$ 100 <br/>`
      vueltos -= 100
    }
    while (Math.floor(vueltos / 50) > 0) {
      modalContent.innerHTML += `$ 50 <br/>`
      vueltos -= 50
    }
    while (Math.floor(vueltos / 10) > 0) {
      modalContent.innerHTML += `$ 10 <br/>`
      vueltos -= 10
    }
    inMonedas = 0
    vueltos = 0
  }

}
let button = document.querySelector('button')

/**
 * Maneja el evento de clic.
 * @param {MouseEvent} event - El evento de clic.
 */
contenido.addEventListener("click", (event) => {
  const target = event.target

  let items = document.querySelectorAll(".botonAzul")
  if (target.classList.contains('botonAzul')) {
    modal.classList.toggle('modalVisible')

  }
  let h2 = document.createElement('h2')
  h2.textContent = "Las monedas que puede ingresar son: "
  modalContent.appendChild(h2)
  monedas.forEach(coin => {
    let btn = document.createElement("button")
    btn.classList.add('botonAzul')
    btn.textContent = `${coin}`
    btn.addEventListener('click', () => {
      calcular(precioProducto, coin)
    })

    modalContent.appendChild(btn)
  })
})



document.addEventListener("DOMContentLoaded", () => {
  crearCards(productos)
})

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', function () {
  modalContent.innerHTML = ``
  modal.classList.toggle('modalVisible')
});