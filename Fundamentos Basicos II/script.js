// 1. Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, 
// por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].


// arr = [-1,3,5,-5];

// function tamano_grande(a){

//     for(i=0; i<a.length; i++){
//         if(a[i]>0){ a[i]="big";}
//     }

//     return a;
// }

// console.log("Arreglo original", arr);
// console.log("Arreglo modificado", tamano_grande(arr));


// 2. Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. 
// La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 


// arr = [-13,3,5,-5,28,-2,-10,4];

// function imp_menor_retorn_el_mayor(a){
//     var min = a[0];
//     var max = a[0];

//     for(i=0; i<a.length; i++){
//         if(a[i]>max){max=a[i];}
//         if(a[i]<min){min=a[i];}

//     }

//     console.log("El menor valor es ", min);
//     return max;
// }


// console.log("El mayor valor es", imp_menor_retorn_el_mayor(arr));


// 3. Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números.
// La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.

// arr = [-12,10,9,-8,28,-2,7,4,6];

// function imprime_uno_devuelve_otro(a){
//     var pen = a[a.length-2];
//     var prim_impar

//     for(i=0; i<a.length; i++){
//         if(a[i]%2 !== 0){
//             prim_impar=a[i];
//             i = a.length;
//         }
//     }

//     console.log("El penultimo valor es ", pen);
//     return prim_impar;

// }

// console.log("El primer impar del array es ", imprime_uno_devuelve_otro(arr));



// 4. Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
// Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 


// arr = [1,2,3];

// function doble_vision(a){
//     arr2 = [];
//     for(let i=0; i<a.length; i++ ){
//         arr2.push(a[i]*2);
//     }
//     return arr2;
// }

// arr2 = doble_vision(arr);
// console.log("Arreglo original", arr);
// console.log("Arreglo con sus elementos al doble", arr2);


// 5. Contar Positivos -  Dado un array de números, crea una función para reemplazar el
// último valor con el número de valores positivos encontrados en el array. 
// Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].


// arr = [-1,1,1,1];

// function positivos(a){
//     var contador = 0;
//     for(i=0; i<a.length; i++){
//             if(a[i]>0){contador++;}
//     }

//     a[a.length-1] = contador;
//  return a;
// }

// console.log("Array original", arr);
// console.log("Array modificado", positivos(arr));


// 6. Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos,
// imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

// arr = [1,1,1,2,2,1,1,1,2,6,12,8];

// function pares_e_impares(a){
//     var contador_pares = 0;
//     var contador_impares = 0;

//     for(i=0; i<a.length; i++){
        
//         if(a[i]%2==0){
//             contador_pares++;
//             contador_impares = 0;
//         }
//         else{
//             contador_impares++;
//             contador_pares = 0;
//         }
        
//         if(contador_pares == 3){
//             console.log("¡Es para bien!");
//             contador_pares = 0;
//         }

//         else if(contador_impares == 3){
//             console.log("¡Qué imparcial!");
//             contador_impares = 0;
//         }

//     } 
// }

// pares_e_impares(arr);


// 7. Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente 
// a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 


// arr = [1,8,2,12,2,7,1,9,2,6];

// console.log("array original", arr);

// function incrementa_los_segundos(a){

//     for(i=1; i<a.length; i=i+2){a[i] = a[i]+3;} 

//     for(i=0; i<a.length; i++){console.log(a[i]);} 
//     return a


// }


// console.log("array modificado", incrementa_los_segundos(arr));


// 8. Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
// reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. 
// Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. 
// Pista: ¿For loops solo puede ir hacia adelante?


// arr = ["programar","dojo", "genial"];
// console.log("array original", arr);

// function longitudesprevias(a){

//     for(let i = a.length-1; i>0; i-- ){
//         a[i] = a[i-1].length;
//     }
//     return a;
// }

// console.log("array modificado",longitudesprevias(arr))


// 9. Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original,
// pero sumando 7 a cada uno. No alteres el array original. 
// Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 

// arr = [1,2,3];


// function agregasiete(a){
//     arr2 = [];

//     for(i=0; i<a.length; i++){
//         arr2.push(a[i]+7);
//     }

//  return arr2
// }

// arr2 = agregasiete(arr);

// console.log("Array original", arr);
// console.log("Nuevo array", arr2);



// 10. Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
// Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3].
// Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).


// arr = [3,1,6,4,2];
// function invertir(a){
//     var dummy = 0;
//     for(let i=0; i<a.length/2; i++){

//         dummy = a[i];
//         a[i] = a[a.length-i-1];
//         a[a.length-i-1] = dummy;

//     }


//     return a;
// }

// console.log("Array original", arr);
// console.log("Array invertido", invertir(arr));

// 11. Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
// pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

// arr1 = [1,-3,5];

// function negativa(a){
//     arr2 = [];
//     for(i=0; i<a.length; i++){
//         if(a[i]>0){
//             arr2.push(a[i]*-1);
//         }

//         else{
//             arr2.push(a[i]);

//         }
//     }
//     return arr2;
// }

// arr2 = negativa(arr1);

// console.log("Array original", arr1);
// console.log("Nuevo array", arr2);


// 12. Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea 
// “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.


// arr = ["auto","pato","comida","computador", "avion","comida"];

// function hambriento(a){
//     var hambre = true;
//     for(i=0; i<a.length; i++){
//         if(a[i] == "comida"){
//             console.log("yummy");
//             hambre = false;
//         }
//     }

//     if(hambre == true){
//         console.log("Tengo hambre");
//     }
// }

// console.log("Array original", arr);
// hambriento(arr);


// 13. Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. 
// Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. 
// cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 


// arr = [true, 42, "Ada", 2, "pizza"];
// arr2 = [1,2,3,4,5,6];


// function cambiaHaciaElCentro(a){
//     var dummy = 0;
//     for(let i=0; i<a.length/2; i=i+2){

//         dummy = a[i];
//         a[i] = a[a.length-i-1];
//         a[a.length-i-1] = dummy;

//     }


//     return a;
// }

// console.log("Array original", arr);
// console.log("Array invertido", cambiaHaciaElCentro(arr));

// console.log("Array original", arr2);
// console.log("Array invertido", cambiaHaciaElCentro(arr2));



// 14. Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num,
//  y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].


// arr = [1,2,3];
// var num  = 3;

// function escalaArray(a,n){

//         for(i=0; i<a.length; i++){
//             a[i] = a[i] * n;

//         }
//  return a;
// }

// console.log("Array original", arr);
// console.log("Array invertido", escalaArray(arr, num));





