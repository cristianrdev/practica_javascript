// 1. Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos
// (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).


// num = 5;

// function sigma(n){
//     arr = [];
//     var sum = 0;
//     for(i=1; i<=n;i++){
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log("El número es", num);

// console.log("La suma de todos los enteros positivos es ",sigma(num));


// 2. Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) 
// de todos los enteros positivos (incluyendo el número dado). 
// Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).

// num = 5;

// function factorial(n){
//     arr = [];
//     var mult = 1;
//     for(i=1; i<=n;i++){
//         mult = mult * i;
//     }
//     return mult;
// }

// console.log("El número es", num);

// console.log("La suma de todos los enteros positivos es ",factorial(num));



// 3. Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática,
// cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar
// un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro 
// más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. 

// var n = 7;

// function fibonacci(num){
//     var siguiente = 1;
//     var actual = 0;
//     var dummy = 0;

//     for(let i=1;i<=num; i++){

//         dummy = actual;
//         actual = siguiente;
//         siguiente  = siguiente + dummy;

//     }
//     return actual;

// }

// console.log("El numero fibonacci en la posición ", n, "es: ", fibonacci(n))

// 4.Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] 
// devuelve “Liam”. Si el array es muy pequeño, devuelve null.  

// arr = [42,true,4,"Liam", 7];

// function penultimo(a){
    
//     var pen = null;
//     if(arr.length>1){
//         pen = a[arr.length-2];
//     }



//     return pen;
// }

// console.log("El array original", arr);
// console.log("El penultimo es: ", penultimo(arr));


// 5. Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. 
// Si el array es muy pequeño, devuelve null. 

// arr = [5,2,3,6,4,9,7];
// var ult = 3

// function Nultimo(a,u){
    
//     var pen = null;
//     if(arr.length>1 & arr.length>u){
//         pen = a[u];
//     }



//     return pen;
// }

// console.log("El", ult, "ultimo de : ",arr, " es ", Nultimo(arr,ult) );


// 6. Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  
// Si el array es muy pequeño, devuelve null.


// arr = [42,1,4,3.14,7];

// function segundo_grande(a){
//     var max1 = 0;
//     var max2 = 0;
//     if(a.length>1){
//             for(let i=0; i<a.length; i++){
//                 if(a[i]>max1){
//                     max2 = max1;
//                     max1 = a[i];
//                 }else if(a[i]>max2){
//                     max2=a[i];
//                 }

//             }
//         }
//     else{ max2 = null}


//  return max2
// }

// console.log("del array original ", arr);
// console.log("El segundo mas grande es: ", segundo_grande(arr));

// 7. Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos en una posición par,
// y manteniendo el orden original. 
// Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

// arr = [4, "Ulysses", 42, false];

// function doblepar(a){
//     b = [];
//     for(let i=0; i<a.length; i++){
//         b.push(a[i]);
//         b.push(a[i]);

//     }
//     return b;
// }

// console.log("Array original : ", arr);
// console.log("Array duplicado : ", doblepar(arr));


// Funcion Fibonacci con recursión

var n = 3;


function fib(num){
    num_fib = 0;
    if(num == 0){num_fib = 0;}
    else if(num == 1){num_fib = 1;
    }

    else {
        num_fib = fib(num-1)+fib(num-2);


    }

    

 return  num_fib
}




console.log("el número de fibonacci en la posición", n, " es ", fib(n));

// function reverseArray(arr){ 
//     for(var i=0; i<arr.length/2; i++) { 
//         temp = arr[arr.length-i-1]; 
//         arr[arr.length-i-1] = arr[i]; 
//         arr[i] = temp; 
//     } 
//     return arr; 
// } 
// b = reverseArray([1,2,3]); 
// console.log('b is', b); 
    
// describe("reverseArray", function() { 
//     it("should return [5,3,1] when [1,3,5] is passed", function() { 
//         expect(reverseArray([1,3,5])).toEqual([5,3,1]); 
//     }); 
//     it("should return [2,4,8,1] when [1,8,4,2] is passed", function() { 
//         expect(reverseArray([2,4,8,1])).toEqual([1,8,4,2]); 
//     }); 
// });

