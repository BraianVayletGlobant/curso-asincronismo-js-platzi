# Curso de Asincronismo con JavaScript

- Clase 1. [Algunas definiciones](#Algunas-definiciones)
- Clase 2. [Introducción al asincronismo](#Introducción-al-asincronismo)
- Clase 3. [Presentación del reto consumir APIs](#Presentación-del-reto-consumir-APIs)
- Clase 4. [Definición Estructura Callback](#Definición-Estructura-Callback)
- Clase 5. [Peticiones a APIs usando Callbacks](#Peticiones-a-APIs-usando-Callbacks)
- Clase 6. [Múltiples Peticiones a un API con Callbacks](#Múltiples-Peticiones-a-un-API-con-Callbacks)
- Clase 7. [Implementando Promesas](#Implementando-Promesas)

# Algunas definiciones.

### API

Interfaz de programación de aplicaciones (Application Programming Interface). Es un conjunto de
rutinas que provee acceso a funciones de un determinado software.

### Concurrencia

Cuando dos o más tareas progresan simultáneamente.
Paralelismo
Cuando dos o más tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.

### Bloqueante

Una llamada u operación bloqueante no devuelve el control a nuestra aplicación hasta que se ha
completado. Por tanto el thread queda bloqueado en estado de espera.

### Síncrono

Es frecuente emplear ‘bloqueante’ y ‘síncrono’ como sinónimos, dando a entender que toda la
operación de entrada/salida se ejecuta de forma secuencial y, por tanto, debemos esperar a que
se complete para procesar el resultado.

### Asíncrono

La finalización de la operación I/O se señaliza más tarde, mediante un mecanismo específico
como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta
sea procesada en diferido.

### Call Stack

La pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en
que punto del programa estamos, por donde vamos.

### Heap

Región de memoria libre, normalmente de gran tamaño, dedicada al alojamiento dinámico de
objetos. Es compartida por todo el programa y controlada por un recolector de basura que se
encarga de liberar aquello que no se necesita.

### Cola o Queue

Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al
de la aplicación, el mensaje se inserta en una cola de mensajes pendientes y se registra su
callback correspondiente.

### Eventloop o Loop de eventos

Cuando la pila de llamadas (call stack) se vacía, es decir, no hay nada más que ejecutar, se
procesan los mensajes de la cola. Con cada ‘tick’ del bucle de eventos, se procesa un nuevo
mensaje.

### Hoisting

Sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del
código en tiempo de compilación.

### DOM

DOM permite acceder y manipular las páginas XHTML como si fueran documentos XML. De
hecho, DOM se diseñó originalmente para manipular de forma sencilla los documentos XML.

### XML

Lenguaje de marcado creado para la transferencia de información, legible tanto para seres
humanos como para aplicaciones informáticas, y basado en una sencillez extrema y una rígida
sintaxis. Así como el HTML estaba basado y era un subconjunto de SGML, la reformulación del
primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de
XML.

### Events

Comportamientos del usuario que interactúa con una página que pueden detectarse para lanzar
una acción, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una
opción de un desplegable (onselect), que pase el ratón sobre un objeto (onmouseover), etc.

### Compilar

Compilar es generar código ejecutable por una máquina, que puede ser física o abstracta como
la máquina virtual de Java.

### Transpilar

Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un
programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el
original.

# Introducción al asincronismo

El asincronismo es básicamente una manera de aprovechar el tiempo y los recursos de nuestra aplicación, ejecutando tareas y procesos mientras otros son resueltos en background (como la llegada de la información de una API), para posteriormente continuar con las tareas que requerían esa información que no tenías de manera instantánea.

Un ejemplo fácil es comparando **asincronismo** vs **sincronismo**: En lenguajes síncronos al hacer un temporizador para ejecutar una función, todo el código se pausa hasta terminar el tiempo, mientras que en Javascript u otros lenguajes asíncronos, podemos estar aprovechando ese tiempo para ejecutar otros procesos hasta que ese tiempo finaliza.

# Presentación del reto consumir APIs

1. Consumir el API para obtener cuantos personajes hay en la serie
2. Obtener el nombre del primer personaje que nos regrese
3. Obtener la dimensión a la que pertenece ese personaje

> Links:
>
> - [public apis](https://github.com/public-apis/public-apis)
> - [Rick & Morty api](https://rickandmortyapi.com/)

# Definición Estructura Callback

### Definiciones

- **_Funcion de orden superior (HOF)_**: Es una función que al crearla le pasamos como parámetro una segunda función.
- **_Callback_**: Es la función que es pasada como parámetro, mas no la función que lo recibe

### Concepto de los Callback

**Primero**: Los callbacks son el nombre de una convención para usar funciones que llaman a otras en JavaScript. No hay una palabra reservada llamada “callback” en el lenguaje JavaScript que haga que nuestro código sea diferente o especial, es mas una convención.

Tal es el caso que en lugar de llamar “callback” en el ejemplo de la clase, podemos llamarlo “suma” y funcionara igualmente.

**Segundo**: y para que sirven? La mayoría estamos acostumbrados a programar de manera sincrona, es decir le indicamos al código que
por ejemplo defina un Valor “X” y con otro valor “Y” y realizamos un calculo (Por ejemplo una multiplicación).

El problema radica en que por ejemplo si quisiéramos crear un programa que nos convierta nuestra moneda (pesos) a su equivalente en Bitcoin, podemos definir X (Valor de nuestro dinero) pero NO podemos definir de manera implícita “Y” (Precio del Bitcoin) por que es algo muy volátil. Entonces necesitamos obtener el precio del Bitcoin de una API, nuestro programa realiza una multiplicación de X \* Y sin embargo no tenemos Y (precio del bitcion) porque tenemos que esperar que el API nos conteste cual es este valor. Es ahí donde sirven los callback

Existen dos Metodos A y B
-El método B hace el calculo de nuestros Pesos \* PrecioBitcoin
-El método A obtiene el precio del API de Bitcoin

Entonces el método B es llamado por el método A cuando por fin lee y obtiene el precio del Bitcoin, solo hasta entonces tiene sentido que multipliquemos nuestros valores.

## Ejemplo Clase:

```javascript
// Ejemplo1.
function sum(num1, num2) {
  return num1 + num2;
}
function calc(num1, num2, callback) {
  return callback(num1, num2);
}
console.log(calc(1, 4, sum)); // 👉return 5

// Ejemplo2.
function date(callback) {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate); // 👉returns 2022-01-14T20:09:22.498Z
```

# Peticiones a APIs usando Callbacks

## Ejemplo Clase:

```javascript
// Implementación de una API con XMLHttpRquest

// Instanciando el request.
//Permite hacer peticiones a algun servidor en la nube
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(url_api, callback) {
  //referencia al objeto XMLHttpRequest
  let xhttp = new XMLHttpRequest();
  /* 
      A nuestra referencia xhttp le pasamos un LLAMADO 'open'
      donde: parametro1 = el metodo, parametro2 = la url,
      parametro3 = verificación si es asincrono o no, valor por defecto true
    */
  xhttp.open("GET", url_api, true);
  //Cuando el estado del objeto cambia, ejecutar la función:
  xhttp.onreadystatechange = function (event) {
    /*
          los estados que puede tener son:
          0: inicializado
          1: cargando
          2: ya se cargó
          3: ya hay información
          4: solicitud completa

          PD: recuerda estas trabajando con una API externa osea un servidor por lo que
          depende del servidor cuanto demore en cada estado haces un pedido por datos
          (request) y solo es aplicar lógica.
        */
    if (xhttp.readyState === 4) {
      //Verificar estado, aqui un resumen de los casos mas comunes:
      /*
              ESTADOS:
              - 1xx (100 - 199): Indica que la petición esta siendo procesada.
              - 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
              - 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
              - 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
              - 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
            */
      if (xhttp.status === 200) {
        // Estandar de node con callbacks, primer parametro error, segundo el resultado
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error " + url_api);
        return callback(error, null);
      }
    }
  };
  //Envio de la solicitud.
  xhttp.send();
}
```

> Links:
>
> [Rick&Morty-character](https://rickandmortyapi.com/api/character/) > [AJAX - Server Response](https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)

# Múltiples Peticiones a un API con Callbacks

## Ejemplo Clase:

```javascript
// primero buscamos la lista de personajes
fetchData(api, (error1, data1) => {
  // si error, matamos retornando un error
  if (error1) return console.error(error1);
  // luego buscamos en la api el id de Rick
  fetchData(api + data1.results[0].id, (error2, data2) => {
    // si error, matamos retornando un error
    if (error2) return console.error(error2);
    // por ultimo la consulta a la api que contiene su dimension
    fetchData(data2.origin.url, (error3, data3) => {
      // si error, matamos retornando un error
      if (error3) return console.error(error3);

      // mostramos los resultados :)
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);

      // rutas de las peticiones en orden
      console.log(api);
      console.log(api + data1.results[0].id);
      console.log(data2.origin.url);
    });
  });
});
```

# Implementando Promesas

## Métodos de las promesas

### **Promise.all(iterable)**

Devuelve una de dos promesas:

una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas,

o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada.

Si la promesa retornada es cumplida, lo hace con un arreglo de los valores de las promesas cumplidas en el mismo orden definido en el iterable.

Si la promesa retornada es rechazada, es rechazada con la razón de la primera promesa rechazada en el iterable. Este método puede ser útil para agregar resultados de múltiples promesas

### **Promise.race(iterable)**

Devuelve una promesa que se cumple o rechaza tan pronto como una de las promesas del iterable se cumple o rechaza, con el valor o razón de esa promesa.

### **Promise.reject(reason)**

Devuelve un objeto Promise que es rechazado con la razón dada.

> _fuente: MDN_

## Ejemplo Clase:

```javascript
// Ejemplo1.
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("✅");
    } else {
      reject(new Error("❎"));
    }
  });
};

somethingWillHappen().then(console.log).catch(console.log); // 👉return '✅'

// Ejemplo2.
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("⏳✅");
      }, 3000);
    } else {
      reject(new Error("❎"));
    }
  });
};

somethingWillHappen2().then(console.log).catch(console.log);
// 👉return '⏳✅'

// Ejemplo3.
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(console.log)
  .catch(console.log);
// 👉return ['✅','⏳✅']
```
