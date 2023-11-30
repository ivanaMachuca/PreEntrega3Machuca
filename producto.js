//cración de objeto PRODUCTO
const iva = 1.21
class producto {
  constructor(code, nombre, categoria, precio, stock,){
    this.code = code
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
    this.stock = stock
}
}
const producto1 = new producto("R110", "RetratoMessiNaranja", "decoracion", 22000, 10)
const producto2 = new producto("R112", "RetratoMessiRoja", "decoracion", 20000, 5)
const producto3 = new producto("R113", "RetratoMessiVerde", "decoracion", 20000, 5)
const producto4 = new producto("R111", "RetratoMessiColores", "decoracion", 20000, 2)
const producto5 = new producto("C111", "CuadroCactus1", "cuadros", 7000, 5)
const producto6 = new producto("C112", "CuadroCactus2", "cuadros", 7000, 7)
const producto7 = new producto("C113", "CuadroCactus3", "cuadros", 7000, 8)
const producto8 = new producto("MT111", "MateExagonalVidrio", "mate", 4500, 8)
const producto9 = new producto("MC111", "MacetaCuadrada", "maceta", 4500, 7)
const producto10 = new producto("MC112", "MacetaExagonal", "maceta", 4500, 9)
const productos=[producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10]
console.table(productos)


//eventos= generar un contador
let contar = document.getElementById("total")
let sumar = document.getElementById("sumar-contador")
let restar = document.getElementById("restar-contador")
let contador = 0
sumar.onclick =()=> {
    contador ++
    contar.innerHTML = contador
    restar.ariaDisabled = true
}
restar.onclick = () => {
    if( contador === 0){
        restar.ariaDisabled =false
    } 
    else{
        contador --
        contar.innerHTML = contador
    }    
}