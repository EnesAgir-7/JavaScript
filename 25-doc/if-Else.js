// --------169--------
// const firstName= 'Enes';
// const age=25;
// const isStudent = true;
// const school ='university';

// if(firstName=='Enes'){
//     console.log('Merheba Enes');
// }

// if(age===25){
//     console.log('yasiniz yirmi bes');
// }

//----------------171-----------------
// var trafigeCikis = new Date('04/20/2019');
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs= Date.now() - trafigeCikis.getTime();
// var trafiktekiGun= Math.floor(trafiktekiMs/(1000*60*60*24));


// console.log(trafiktekiGun);


// if(trafiktekiGun<=365){
//     console.log('1.servis bakim suresi gelmistir');
// }
// else if(trafiktekiGun>365 && trafiktekiGun<365*2){
//     console.log('2.servis gununuz geldi');
// }
// else if(trafiktekiGun>365*2 && trafiktekiGun<365*3){
//     console.log('3.servis gununuz geldi');
// }
// else{
//     console.log('bilinmeyen bir sure');
// }

// let val;

// let person = {
//     firstName : 'enes',
//     lastName : 'agir' ,

// };

//  val = person.firstName;


//  console.log(val); 

// let val='\n';
// for(let i=0;i<10;i++){
//     for(let j=0;j<10;j++){
//         val +='* '
//     }
//     val =='\n';
// }
// console.log(val);

//-------------176---------------
var hak = 5;
var tahmin,sayac=0;


var sayi = Math.ceil(Math.random() * 10);


console.log(sayi);


while (hak > 0) {
    hak--;
    sayac++;
    tahmin = Number(prompt('bir sayi giriniz'));

    if (sayi == tahmin) {
        console.log(`tebrikler ${sayac} defada bildiniz`);
        console.log(`puan ${100-20*(sayac-1)}`);
        break;
    } else if (sayi > tahmin) {
        console.log('yukari');
    } else{
        console.log('assagi');
    }
    if (hak==0) {
        console.log('hakkiniz bitti, ')
    }
}