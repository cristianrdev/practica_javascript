// 1 Obten del 1 al 255


// a = [];
// var y = 255;

// function arraypares(lim){
//         for(let i=0; i<=lim; i++ ){
//             a[i]=i;
            
//         }
//         return a
// }

// console.log(arraypares(y));


// Consigue pares hasta 1000

// y=1000;

// function sumpares(lim){
//     var sum = 0;
//     for(let i=1; i<=lim; i++){
        
//         if(i%2 == 0){sum=sum+i}
//     }
//     return sum
// }



// console.log(sumpares(y));


//Suma impares hasta 5000

y=5000;

function sumpares(lim){
    var sum = 0;
    for(let i=1; i<=lim; i++){
        
        if(i%2 !== 0){sum=sum+i}
    }
    return sum;
}



console.log(sumpares(y));



// 4.Itera un array:

// a = [1,2,5];
// b = [-5, 2, 5, 12]


// function sumarr(arr){
//     var sum = 0;
//     for( i=0; i<arr.length; i++){
//             sum = sum + arr[i];
//     }
//     return sum

// }

// console.log(sumarr(a));
// console.log(sumarr(b));

// 5. Encuentra el mayor (max): 

// a = [-3, 3, 5, 7];

// function maximo(arr){
//     var max = arr[0]
//     for( let i=0 ; i< arr.length; i++){
//             if( arr[i]>max){ max = arr[i];}
//     }
//     return max;
// }

// console.log(maximo(a));



// 6. Encuentra el promedio (avg)


// a = [1, 3, 5, 7 ,20];

// function promedio(arr){
//     var sum = 0;
//     for( let i = 0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum/arr.length;

// }

// console.log(promedio(a));


// 7. Array de impares


// var y = 50;

// function arrayimpares(dim){
//     arr = [];
//     for(let i=0; i<=dim; i++){
//         if(i%2 !== 0){arr.push(i);}
//     }
//     return arr;
// }

// console.log(arrayimpares(y));


// 8. Mayor que Y

// a = [1, 3, 5, 7];
// var y=3;

// function mayorquey(arr,num){
//     var cont = 0;
//     for(let i=0; i<= arr.length; i++){
//         if(arr[i]>num){cont++;}

//     }

//     return cont;
// }

// console.log (mayorquey(a,y));


// 9. cuadrados

// a = [1,5,10,-2];

// function cuadradodearray(arr){
//     for(let i=0; i<arr.length; i++){
//         arr[i] = arr[i]*arr[i];
//     }
//     return arr
// }

// console.log(cuadradodearray(a))


// 10.Negativos

// a = [1,5,10,-2];

// function reemplazonegativos(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<0){arr[i]=0;}
//     }
//     return arr;
// }

// console.log(reemplazonegativos(a));


// 11. Max/Min/Avg

// a = [1,5,10,-2];

// function maxminavg(arr){
//     arr2 = [];
//     var sum = 0;
//     var max = arr[0];
//     var min = arr[0];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){max = arr[i];}
//         if(arr[i]<min){min = arr[i];}
//         sum = sum + arr[i];

//     }

//     return arr2 = [max, min, (sum/arr.length)];
// }
// console.log(maxminavg(a));


// 12. Intercambia valores

// a = [1,5,10,-2];

// function intercambiavalores(arr){

//     for(i=0; i<arr.length/2; i++){
//             var dummy = arr[i];
//             arr[i] = arr[arr.length-1-i];
//             arr[arr.length-1-i] = dummy;
//     }
//     return arr;
// }

// console.log(a)
// console.log(intercambiavalores(a))

// 13. De número a String

// a = [-1,-3,2];

// function reemplazanegativos(arr){

//     for(i=0 ; i<arr.length; i++){
//         if(arr[i]<0){arr[i]="Dojo";}
//     }

//     return arr;
// }

// console.log(a);
// console.log(reemplazanegativos(a));


