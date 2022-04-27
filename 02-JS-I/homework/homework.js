// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola amigo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 99;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 15 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 4,2;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  
  return (str);
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var re = x + y;
  return (re);
  console.write(re);
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var restando = x - y;
  return (restando);
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multx = x * y;
  return (multx);
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var dvd = x / y;
  return(dvd);
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x == y){
	console.log("si son iguales " + y);
	return true
	}
console.log("No son iguales " + x);
return false 
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
    if (str == str2){
	//console.log("si son iguales ");
	return true
	}
//console.log("No son iguales ");
return false 
  
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
    if (num < 90){
	//console.log(num + " si es menor que noventa ");
	return true
	}
	//console.log("no es mayor que noventa que " + num);
return false 
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
   if (num < 50){
	//console.log(num + " si es mayor que cincuenta ");
	return true
	}
	//console.log("no es mayor que cincuenta que " + num);
return false
  
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resto = x % y; 
  return(resto);
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
 if (num % 2==0) {
   //alert("El numero introducido es par");
	console.log("El numero introducido es par");
	return true
} else {
	//alert("El numero introducido es impar");
		console.log("El numero introducido es impar");
		return false
}
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
 if (num % 2==0) {
   //alert("El numero introducido es par");
	console.log("El numero introducido es par");
	return true
} else {
	//alert("El numero introducido es impar");
		console.log("El numero introducido es impar");
		return false
}
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  elevarAlCuadrado = num * num;
  return elevarAlCuadrado;
}

function elevarAlCubo(num, num2) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
	
	var elevado = num ** num2;
	console.log(elevado);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  resultado=(num ** exponent);
  return resultado;
  
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.sign(num) * Math.floor(Math.abs(num) + 0.5);
}

function redondearHaciaArriba(num, num2) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.round(num / num2) * num2;
  
}

function numeroRandom(num) {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.floor(Math.random(num) * 10);
  
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
    if(numero === 0){
        
      console.log("Cero");
      
    }else if(numero > 0) {
        
      console.log("Positivo");
      
    }else{
        
      console.log("Negativo");
 
	}
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var hola = "Hola mundo " + str;
	return hola; 
 
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var combinacion = nombre +" " + apellido;
  return combinacion;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo = "Hola ";
  var holamas = saludo + nombre;
  return holamas;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var al = "alto ";
  var an = " y de ancho "; 
  
  var combtodo = al + "cm " + alto +  an + "cm " + ancho;
  return combtodo;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
	let perimetro;
    perimetro = lado * 4;
    return perimetro;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
	var bal = "base de cm: "; 
	var alt = " la altura es cm: ";
	var combo = bal + base + alt + altura;
	return combo;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var valor = euro * 1.20;
  return valor;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
 
 var verificador = "aeiou";
 
  if(letra = verificador){
	  var bien = "Datos Correctos son las Vocales";
		return bien;
  }
  else{
	 var error = "Dato Incorrecto";
	return error;
	  
  }
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
