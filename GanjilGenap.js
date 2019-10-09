var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var genap = [];
var ganjil = [];
var i =0;

for(i; i<angka.length; i++){
     if (angka[i] % 2 == 0){
         ganjil.push(angka[i]);
     }else {
         genap.push(angka[i])
     }
}
console.log(genap);
console.log(ganjil);