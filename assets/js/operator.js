const hargaBarang =100000;
const minmalHargaDiscount = 120000;
const discont = 20/100;

if(hargaBarang<minmalHargaDiscount){
    console.log("Harga yang harus dibayar "+(hargaBarang-(hargaBarang*discont)))
} else {
    console.log("tidak dapat discount")
}

let angka =100;
for( angka = 0; angka<=100;angka++){
    if(angka %3 ===0 && angka %5===0){
        console.log("FizzBuzz");
    }else if(angka%3 ===0){
        console.log("fizz")
    } else if(angka%5===0){
        console.log("Buzz")
    } else{
        console.log(angka)
    }
}

