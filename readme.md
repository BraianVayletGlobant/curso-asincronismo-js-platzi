# Curso de Asincronismo con JavaScript

## Mis Cursos en Platzi 馃憠 [Certificados](https://drive.google.com/drive/folders/1SNu_BcXoBeMUwQuw-CO2qc6QWhHWv_cL)

## Clases:

- Clase 1. [Algunas definiciones](#Algunas-definiciones)
- Clase 2. [Introducci贸n al asincronismo](#Introducci贸n-al-asincronismo)
- Clase 3. [Presentaci贸n del reto consumir APIs](#Presentaci贸n-del-reto-consumir-APIs)
- Clase 4. [Definici贸n Estructura Callback](#Definici贸n-Estructura-Callback)
- Clase 5. [Peticiones a APIs usando Callbacks](#Peticiones-a-APIs-usando-Callbacks)
- Clase 6. [M煤ltiples Peticiones a un API con Callbacks](#M煤ltiples-Peticiones-a-un-API-con-Callbacks)
- Clase 7. [Implementando Promesas](#Implementando-Promesas)
- Clase 8. [Resolver problema con Promesas](#Resolver-problema-con-Promesas)
- Clase 9. [Conociendo Async/await](#Conociendo-Async/await)
- Clase 10. [Resolver problema con Async/Await](#Resolver-problema-con-Async/Await)
- Clase 11. [Callbacks Vs Promesas Vs Async/Await](#Callbacks-Vs-Promesas-Vs-Async/Await)

# Algunas definiciones.

### API

Interfaz de programaci贸n de aplicaciones (Application Programming Interface). Es un conjunto de
rutinas que provee acceso a funciones de un determinado software.

### Concurrencia

Cuando dos o m谩s tareas progresan simult谩neamente.
Paralelismo
Cuando dos o m谩s tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.

### Bloqueante

Una llamada u operaci贸n bloqueante no devuelve el control a nuestra aplicaci贸n hasta que se ha
completado. Por tanto el thread queda bloqueado en estado de espera.

### S铆ncrono

Es frecuente emplear 鈥榖loqueante鈥? y 鈥榮铆ncrono鈥? como sin贸nimos, dando a entender que toda la
operaci贸n de entrada/salida se ejecuta de forma secuencial y, por tanto, debemos esperar a que
se complete para procesar el resultado.

### As铆ncrono

La finalizaci贸n de la operaci贸n I/O se se帽aliza m谩s tarde, mediante un mecanismo espec铆fico
como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta
sea procesada en diferido.

### Call Stack

La pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en
que punto del programa estamos, por donde vamos.

### Heap

Regi贸n de memoria libre, normalmente de gran tama帽o, dedicada al alojamiento din谩mico de
objetos. Es compartida por todo el programa y controlada por un recolector de basura que se
encarga de liberar aquello que no se necesita.

### Cola o Queue

Cada vez que nuestro programa recibe una notificaci贸n del exterior o de otro contexto distinto al
de la aplicaci贸n, el mensaje se inserta en una cola de mensajes pendientes y se registra su
callback correspondiente.

### Eventloop o Loop de eventos

Cuando la pila de llamadas (call stack) se vac铆a, es decir, no hay nada m谩s que ejecutar, se
procesan los mensajes de la cola. Con cada 鈥榯ick鈥? del bucle de eventos, se procesa un nuevo
mensaje.

### Hoisting

Sugiere que las declaraciones de variables y funciones son f铆sicamente movidas al comienzo del
c贸digo en tiempo de compilaci贸n.

### DOM

DOM permite acceder y manipular las p谩ginas XHTML como si fueran documentos XML. De
hecho, DOM se dise帽贸 originalmente para manipular de forma sencilla los documentos XML.

### XML

Lenguaje de marcado creado para la transferencia de informaci贸n, legible tanto para seres
humanos como para aplicaciones inform谩ticas, y basado en una sencillez extrema y una r铆gida
sintaxis. As铆 como el HTML estaba basado y era un subconjunto de SGML, la reformulaci贸n del
primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de
XML.

### Events

Comportamientos del usuario que interact煤a con una p谩gina que pueden detectarse para lanzar
una acci贸n, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una
opci贸n de un desplegable (onselect), que pase el rat贸n sobre un objeto (onmouseover), etc.

### Compilar

Compilar es generar c贸digo ejecutable por una m谩quina, que puede ser f铆sica o abstracta como
la m谩quina virtual de Java.

### Transpilar

Transpilar es generar a partir de c贸digo en un lenguaje c贸digo en otro lenguaje. Es decir, un
programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el
original.

# Introducci贸n al asincronismo

El asincronismo es b谩sicamente una manera de aprovechar el tiempo y los recursos de nuestra aplicaci贸n, ejecutando tareas y procesos mientras otros son resueltos en background (como la llegada de la informaci贸n de una API), para posteriormente continuar con las tareas que requer铆an esa informaci贸n que no ten铆as de manera instant谩nea.

Un ejemplo f谩cil es comparando **asincronismo** vs **sincronismo**: En lenguajes s铆ncronos al hacer un temporizador para ejecutar una funci贸n, todo el c贸digo se pausa hasta terminar el tiempo, mientras que en Javascript u otros lenguajes as铆ncronos, podemos estar aprovechando ese tiempo para ejecutar otros procesos hasta que ese tiempo finaliza.

# Presentaci贸n del reto consumir APIs

1. Consumir el API para obtener cuantos personajes hay en la serie
2. Obtener el nombre del primer personaje que nos regrese
3. Obtener la dimensi贸n a la que pertenece ese personaje

> Links:
>
> - [public apis](https://github.com/public-apis/public-apis)
> - [Rick & Morty api](https://rickandmortyapi.com/)

# Definici贸n Estructura Callback

### Definiciones

- **_Funcion de orden superior (HOF)_**: Es una funci贸n que al crearla le pasamos como par谩metro una segunda funci贸n.
- **_Callback_**: Es la funci贸n que es pasada como par谩metro, mas no la funci贸n que lo recibe

### Concepto de los Callback

**Primero**: Los callbacks son el nombre de una convenci贸n para usar funciones que llaman a otras en JavaScript. No hay una palabra reservada llamada 鈥渃allback鈥? en el lenguaje JavaScript que haga que nuestro c贸digo sea diferente o especial, es mas una convenci贸n.

Tal es el caso que en lugar de llamar 鈥渃allback鈥? en el ejemplo de la clase, podemos llamarlo 鈥渟uma鈥? y funcionara igualmente.

**Segundo**: y para que sirven? La mayor铆a estamos acostumbrados a programar de manera sincrona, es decir le indicamos al c贸digo que
por ejemplo defina un Valor 鈥淴鈥? y con otro valor 鈥淵鈥? y realizamos un calculo (Por ejemplo una multiplicaci贸n).

El problema radica en que por ejemplo si quisi茅ramos crear un programa que nos convierta nuestra moneda (pesos) a su equivalente en Bitcoin, podemos definir X (Valor de nuestro dinero) pero NO podemos definir de manera impl铆cita 鈥淵鈥? (Precio del Bitcoin) por que es algo muy vol谩til. Entonces necesitamos obtener el precio del Bitcoin de una API, nuestro programa realiza una multiplicaci贸n de X \* Y sin embargo no tenemos Y (precio del bitcion) porque tenemos que esperar que el API nos conteste cual es este valor. Es ah铆 donde sirven los callback

Existen dos Metodos A y B
-El m茅todo B hace el calculo de nuestros Pesos \* PrecioBitcoin
-El m茅todo A obtiene el precio del API de Bitcoin

Entonces el m茅todo B es llamado por el m茅todo A cuando por fin lee y obtiene el precio del Bitcoin, solo hasta entonces tiene sentido que multipliquemos nuestros valores.

## Ejemplo Clase:

```javascript
// Ejemplo1.
function sum(num1, num2) {
  return num1 + num2;
}
function calc(num1, num2, callback) {
  return callback(num1, num2);
}
console.log(calc(1, 4, sum)); // 馃憠return 5

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

date(printDate); // 馃憠returns 2022-01-14T20:09:22.498Z
```

# Peticiones a APIs usando Callbacks

## Ejemplo Clase:

```javascript
// Implementaci贸n de una API con XMLHttpRquest

// Instanciando el request.
//Permite hacer peticiones a algun servidor en la nube
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(url_api, callback) {
  //referencia al objeto XMLHttpRequest
  let xhttp = new XMLHttpRequest();
  /* 
      A nuestra referencia xhttp le pasamos un LLAMADO 'open'
      donde: parametro1 = el metodo, parametro2 = la url,
      parametro3 = verificaci贸n si es asincrono o no, valor por defecto true
    */
  xhttp.open("GET", url_api, true);
  //Cuando el estado del objeto cambia, ejecutar la funci贸n:
  xhttp.onreadystatechange = function (event) {
    /*
          los estados que puede tener son:
          0: inicializado
          1: cargando
          2: ya se carg贸
          3: ya hay informaci贸n
          4: solicitud completa

          PD: recuerda estas trabajando con una API externa osea un servidor por lo que
          depende del servidor cuanto demore en cada estado haces un pedido por datos
          (request) y solo es aplicar l贸gica.
        */
    if (xhttp.readyState === 4) {
      //Verificar estado, aqui un resumen de los casos mas comunes:
      /*
              ESTADOS:
              - 1xx (100 - 199): Indica que la petici贸n esta siendo procesada.
              - 2xx (200 - 299): Indica que la petici贸n fue recibida, aceptada y procesada correctamente.
              - 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
              - 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
              - 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecuci贸n.
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

# M煤ltiples Peticiones a un API con Callbacks

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

## M茅todos de las promesas

### **Promise.all(iterable)**

Devuelve una de dos promesas:

una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas,

o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada.

Si la promesa retornada es cumplida, lo hace con un arreglo de los valores de las promesas cumplidas en el mismo orden definido en el iterable.

Si la promesa retornada es rechazada, es rechazada con la raz贸n de la primera promesa rechazada en el iterable. Este m茅todo puede ser 煤til para agregar resultados de m煤ltiples promesas

### **Promise.race(iterable)**

Devuelve una promesa que se cumple o rechaza tan pronto como una de las promesas del iterable se cumple o rechaza, con el valor o raz贸n de esa promesa.

### **Promise.reject(reason)**

Devuelve un objeto Promise que es rechazado con la raz贸n dada.

> _fuente: MDN_

## Ejemplo Clase:

```javascript
// Ejemplo1.
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("鉁?");
    } else {
      reject(new Error("鉂?"));
    }
  });
};

somethingWillHappen().then(console.log).catch(console.log); // 馃憠return '鉁?'

// Ejemplo2.
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("鈴斥渽");
      }, 3000);
    } else {
      reject(new Error("鉂?"));
    }
  });
};

somethingWillHappen2().then(console.log).catch(console.log);
// 馃憠return '鈴斥渽'

// Ejemplo3.
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(console.log)
  .catch(console.log);
// 馃憠return ['鉁?','鈴斥渽']
```

# Resolver problema con Promesas

## Ejemplo Clase:

### ./src/utils/fetchData.js

```javascript
// modulo para hacer las peticiones
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// funcion principal
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    // instanciamos la conexion
    const xhttp = new XMLHttpRequest();
    // abrir una conexion con el metodo, la ruta y si es asincrono
    xhttp.open("GET", url_api, true);
    // validacion del llamado
    xhttp.onreadystatechange = () => {
      // comparamos el 4 porque eso indica que se completo la peticion
      if (xhttp.readyState === 4) {
        // verificamos que el status este en 200, 200 es que es correcto
        xhttp.status === 200
          ? // si esta en 200
            resolve(JSON.parse(xhttp.responseText))
          : // si no esta en 200
            reject(new Error("Error " + url_api));
      }
    };
    // por ultimo enviamos la peticion
    xhttp.send();
  });
};

// exportamos la funcion
module.exports = fetchData;
```

### ./src/promise/challenge.js

```javascript
// importamos la funcion
const fetchData = require("./../utils/fetchData");
// declaramos la ruta de la api
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => {
    // imprimimos el numero de personajes
    console.log(data.info.count);
    // volvemos a hacer la promesa de pedir algo, en este caso el personaje 1: Rick
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    // esperamos la promesa anterior y vemos el nombre de rick
    console.log(data.name);
    // volvemos a hacer la promesa, pero esta es sobre la dimension de Rick
    return fetchData(data.origin.url);
  })
  .then((data) => {
    // vemos la dimension de rick
    console.log(data.dimension);
  })
  // si hay error
  .catch((err) => {
    console.log(err);
  });
```

# Conociendo Async/await

Async-Await es Sugar-Syntax para .then()-.cath()

## Ejemplo Clase:

```javascript
const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Do Something Async");
        }, 3000)
      : reject(new Error("Test Error"));
  });
};

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

(async () => {
  console.log("Before");
  await doSomething();
  console.log("After");
})();

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  console.log("Before 1");
  await anotherFunction();
  console.log("After 1");
})();
```

# Resolver problema con Async/Await

## Ejemplo Clase:

```javascript
// traemos nuestra funcion que llamara a la API
const fetchData = require("../utils/fechtData");
// el link de la API
const API = "https://rickandmortyapi.com/api/character/";

// nuestra funcion as铆ncrona, le devemos pasar la api
const anotherFunction = async (url_api) => {
  // el TryCatch, para que se maneje de manera sincr贸nica
  try {
    // esperamos que se aga la primera llamada
    const data = await fetchData(url_api);

    // esperamos que se aga la segunda llamada
    const character = await fetchData(`${API}${data.results[0].id}`);

    // esperamos que se aga la tercera llamada
    const origin = await fetchData(character.origin.url);

    // imprimimos las datos de la api
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    // si hay algun error lo mostramos
    console.error(error);
  }
};

console.log("before");
// mandamos a llamar nuestra api
anotherFunction(API);
console.log("After");
```

# Callbacks Vs Promesas Vs Async/Await

Hablemos de un punto importante que debes de tener en cuenta a la hora de elegir cu谩l ser谩 la
implementaci贸n que utilizar谩s en tus proyectos para manejar de forma correcta el asincronismo
en JavaScript.

Teniendo en cuenta lo aprendido en este curso quiero mostrarte las ventajas y desventajas que
tienen cada una de las formas en las que podemos manejar asincronismo.

### **Callbacks**

#### > Ventajas

- **_Simpleza_**: Nos permite disponer de una sintaxis f谩cil de entender y comprender qu茅 suceder谩 al ser ejecutada.
- **_Compatibilidad_**: Los Callbacks son funciones que no necesitan convertir tu c贸digo con un polyfill para que funcionen con todos los navegadores modernos o versiones anteriores.

#### > Desventajas

- Entre las principales desventajas podemos encontrar que disponen de una estructura que puede llegar a ser robusta, m谩s cuando anidamos llamadas a otras funciones, su flujo se puede volver poco intuitivo lo cual nos har谩 no comprender claramente su estructura.
- Manejo de Errores, con los Callbacks no tenemos un camino claro para manejar los errores lo cual se traduce en problemas a la hora de manejar la l贸gica de nuestro programa.

### **Promesas**

#### > Ventajas

- **_Flujo fluido_**: Con las promesas podemos manejar un flujo complejos, anidar llamadas y tener una sintaxis clara que nos permite entender nuestro programa o la l贸gica que implica su uso.
- **_Manejo de Errores_**: Las promesas nos proporcionan un forma clara de manejar errores, una sintaxis sencilla y una forma de entender qu茅 suceder谩 cuando sean ejecutadas.

#### > Desventajas

- **_PolyFill_**: Las promesas no son compatibles con todos los navegadores, si bien los navegadores modernos pueden interpretar sin problema alguno, navegadores como internet explorer 11 necesitan transpilar el c贸digo para que funcionen correctamente.

### **Async-Await**

#### > Ventajas

- **_Sintaxis_**: Tienen una sintaxis muy simple y clara de leer, lo que nos permite entender de forma muy sencilla su funcionamiento.
- **_Try/catch_**: Podemos utilizar try/catch para el manejo de errores con lo cual podemos manejar una sintaxis clara para el manejo de los errores.

#### > Desventajas

- **_PolyFill_**: Como las promesas, Async/Await a煤n no tienen toda la compatibilidad con los navegadores viejos, por lo cual necesitamos transpilar nuestro c贸digo para utilizarlos en cualquier navegador.

## Conclusiones

Ahora que entiendes las ventajas y desventajas de los **callbacks**, **promesas** y **async/await** puedes tomar la decisi贸n de cu谩l implementar en tus proyectos, teniendo en cuenta su uso, as铆 como las implementaciones que est茅s realizando. En lo particular he dejado atr谩s a los Callbacks para pasar mi l贸gica que maneje asincronismo a las promesas y en casos particulares utilizar Async/Await.
