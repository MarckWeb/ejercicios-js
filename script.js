// Operaciones básicas, Tipos de datos, Prompt y Alert
// Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.

let n1 = prompt("Ingresa n1");
n1 = parseInt(n1)
let n2 = prompt("ingresa n2");
n2 = Number(n2)
alert(`el resultado de ${n1} + ${n2} = ${n1 + n2}`)

// Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.

 let celsio = parseInt(prompt("ingrese el grado celsio"));
 alert(`${(celsio * 9/5) + 32}`) //formula grados

// Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5

let numero =10
document.write(`${numero} / 10 = ${numero / 10}`)

// Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.

let a = [1,2,3] 
console.log(typeof a)

// If and else
// Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

let number =55
if(number % 2 === 0){
    console.log(`${number} es par`)
}else{
    console.log(`${number} es impar`)
}


// Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log

if(number % 5 === 0){
    console.log(`${number} es divible de 5`)
}else{
    console.error(`${number} is not divible`)
}

// Crear un programa que determine si un número introducido en un promp es divisible por 11 y 5 o no, mostrar el resultado con console.log

if(number % 5 === 0 && number %11 === 0){
    console.log(`${number} es divible de 5 y 11`)
}else{
    console.error(`${number} is not divible por ninguno`)
}

// Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.

let nu1= 30
let nu2 = 50

if(n2 >n1){
    console.log(`${n2} > ${n1}`)
}else{
    console.log(`${n1} > ${n2}`)
}

// Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.

n2 >n1?alert(`${n2} > ${n1}`):alert(`${n1} > ${n2}`)

// Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.

let text= '0S'
//console.log(parseInt(text.charAt()) + 10)
if(parseInt(text.charAt()) === NaN){
    console.log(`${text} empieza con string ${text.charAt()}`)
}else{
    console.log(`${text} empieza con number ${text.charAt()}`)
}


// Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde"

let aleatorio = Math.floor(Math.random() * 10)+1
console.log(aleatorio)
let nA = 5;

if(aleatorio === nA){
    console.log("buen trabajo")
}else{
    console.log("no corresponde")
}

// El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo:

  let edad = 14;

 if(edad < 13) {
 	console.log("Es niño");
 }else if(edad < 18 ){
  	console.log("Es adolecente");
 } else{
  	console.log("Es mayor de edad");
 }


// Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.


let n = '0'
let nU = 1

n = n + nU
console.log(n)


// Escribir utilizando console.log la tabla del 9 hasta 9x10.

let nW = 0
while(nW <= 10){
    console.log(`9 x ${nW} = ${9 * nW}`)
    nW ++
}

// Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.

let numUser = 556
if(!Number(numUser)){
    console.log('ingresa numeros')
}else{
    let otro = Array.from(numUser.toString())
let total = otro.reduce((acu, value ) => Number(acu) + Number(value))
console.log(total)
}


// Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.
let pares =6189461648641313

let otro1 =  Array.from(pares.toString())
let array =[]
 let newC = otro1.forEach(num => {
   
    if(num %2 === 0){
        array.push(Number(num))
    }
})

let reducir = array.reduce((acu, value) => acu + value)
console.log(reducir)
// Ejercicios de divisores con while (o for)
// Encontrar todos los divisores de un número.


const divisores = n => {
    let values=[];
    const end=Math.floor(Math.sqrt(n));
 
    for (let i=1; i<=end; i++) {
        if (n%i==0) {
            values.push(i);
            if (i*i!=n) {
                values.push(n/i);
            }
        }
    }
    return values.sort((a,b)=>a-b);
}

console.log(divisores(52))


// Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

let vacio = []
for(i = 0; i< 10; i++){
    vacio.push(Math.floor(Math.random() *(100 -50) +50 ))
}

console.log(vacio)

// Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.

// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
let intro = 'yellow'
let colors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]

colors.forEach(color =>{
    if(color === intro){
        console.log(`el color ${intro} existe`)
    }
})



// Convertir un array ingresado dentro del código en un string (existe un método en javascript para hacerlo)
console.log(colors.toString())
// Unión, intersección y conteo
// Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la intersección de ambos elementos. (Ejemplo: [1,2,3] unión [1,2,4] = [1,2]

let nan = [1,2,5,478,]
let nen = [1,2,5,9,6]
let newMan = [...nan, ...nen]
let array1 = []
newMan.reduce(el =>{
    if(el === el){
        array1.push(el)
    }
    console.log(array1)
})


console.log(new Set(newMan))
