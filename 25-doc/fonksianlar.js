//-----------------177-----------------
// function yasHesepal(dogumYili){
//     return 2021-dogumYili;
// }

// let val= yasHesepal(1996);

// console.log(val);
//---------------179-----------------------------

var hesapA ={
    ad: 'Sena Turan',
    HesapNo : '12345678',
    bakiye :2000,
    ekHesap : 1000
}

var hesapB={
    ad:'Emel Turan',
    HesapNo : '12345679',
    bakiye : 3000,
    ekHesap : 2000
}

function paracek(hesap,miktar){
    console.log(`Merheba ${hesap.ad}`);

    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye-miktar;
        console.log('paranizi alabilirsiniz')
    }
    else{
        var toplam = hesap.bakiye +hesap.ekHesap;

        if(toplam>=miktar){
            if(confirm('ek hesabinizi kullanmak istermisiniz')){
                console.log('paranizi alabilirsiniz');
                var bakiye = hesap.bakiye;
                var ekHesap=miktar.bakiye;
                hesap.bakiye=0;
                hesap.ekHesap = hesap.ekHesap - ekHesap;
            }
            else
            console.log(`${HesapNo} nolu hesabinizda ${miktar} TL bulunmamakta`);
        }
        else{
            console.log('uzgunuz bakiye yetersiz');
        }

    }
}

paracek(hesapA,1000);
paracek(hesapA,1100);















