import readline from 'readline';
const input = async (nombre) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question(`${nombre} `, (input) => {
      rl.close();
      resolve(input);
    });
  });
}
const productos = [
  { nombre: 'Producto A', precio: 270 },
  { nombre: 'Producto B', precio: 340 },
  { nombre: 'Producto C', precio: 390 },
]


/**
 * 
 * @returns {string} Un string con la estructura de la plantilla
 */
function generarPlantilla() {
  let plantilla = `Los productos existentes son: \n`
  for (const prod of productos) {
    plantilla += `${productos.indexOf(prod) + 1}. ${prod.nombre} | Precio:   $${prod.precio}\n`
  }
  return plantilla
}

let menuCoin = `Monedas: \n`
for (const coin of monedas) {
  menuCoin += `${monedas.indexOf(coin) + 1}. ${coin}\n`
}
let moneda = 0
whileExterno:
while (true) {
  console.log(generarPlantilla());
  let eleccion = await input(`Seleccione producto: `)
  let prodElegido = productos[eleccion - 1]
  // console.log(prodElegido);
  while (prodElegido.precio > moneda) {
    console.log(menuCoin)
    moneda += monedas[await input(`Seleccione moneda: `) - 1]
    if (prodElegido.precio <= moneda) {
      console.log(`Su cambio es de ${moneda - prodElegido.precio}, gracias por su compra`);
      break whileExterno
    }
  }
}
