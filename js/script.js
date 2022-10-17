class Producto{

    constructor(nombre, precio, stock, id){
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
        this.id = id;
    }

asignarID(array){
    this.id = array.length;
}

}

const productos=[
    new Producto('Botines', 13000, 15, 1),
    new Producto('Camperas', 27000, 10, 2),
    new Producto('Gorras', 7000, 30, 3),
    new Producto('Medias', 1200, 40, 4)

]

let continuar = true;

while(continuar){
    let ingreso = prompt('Ingresa los datos del producto: nombre, precio, stock, separados por una barra diagonal (/). Ingresa X para finalizar');
    
    if(ingreso.toUpperCase()=='X'){
    continuar = false;
    break;
    }

let datos = ingreso.split('/');

const producto = new Producto(datos[0],datos[1],datos[2]);

productos.push(producto);
producto.asignarID(productos);
console.log(productos);

}

let filtro = prompt('Elegi el filtro que necesites: \n1 - Titulo (A a Z) \n2 - Titulo (Z a A) \n3 - Mayor a menor precio \n4 - Menor a mayor precio \n5 - Mayor stock a menor \n6 - Menor stock a mayor');

function ordenar(filtro,array){

    let arrayOrdenado = array.slice(0);
    switch(filtro){

        case '1':
            let nombreAscendente = arrayOrdenado.sort((a,b)=> a.nombre.localeCompare(b.nombre));
            return nombreAscendente;

        case '2':
            let nombreDescendente = arrayOrdenado.sort((a,b)=> b.nombre.localeCompare(a.nombre));
            return nombreDescendente;
        case '3':
            return arrayOrdenado.sort((a,b) => b.precio - a.precio);

        case '4':
            return arrayOrdenado.sort((a,b) => a.precio - b.precio);

        case '5':
            return arrayOrdenado.sort((a,b) => b.stock - a.stock);

        case '6':
            return arrayOrdenado.sort((a,b) => a.stock - b.stock);

        default:
            alert('No es un filtro valido');
            break;

    }


}

function resultadoString(array){

    let info = '';

    array.forEach(elemento=>{
        info += 'Nombre: ' + elemento.nombre + '\nPrecio ' + elemento.precio + '\nStock ' + elemento.stock + '\n\n'
    })

    return info;
}

alert(resultadoString(ordenar(filtro,productos)));

let busquedaUsuario = prompt('Escribi el nombre del producto que buscas');

const buscado = productos.filter((Producto)=> Producto.nombre.toLowerCase().includes(busquedaUsuario.toLowerCase()))

if(buscado.length==0){
    alert('No encontramos ningun producto que coinicida con tu busqueda');
}else{
    const mostrar = buscado.map((productos)=>productos.nombre);
    alert('Los productos que coinciden son los siguientes:\n- ' + mostrar.join('\n- '))
}

