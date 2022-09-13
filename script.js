let oyuncular=["Shane Larkin","Metecan Birsen","Şehmus Hazer","Onur Alp Bitim","Cedi Osman","Yiğitcan Saybir","Melih Mahmutoğlu","Sadık Emir Kabaca","Sertaç Şanlı","Buğrahan Tuncer","Furkan Korkmaz","Alperen Şengün","Ercan Osmani"];
let numaralar=["0","1","2","5","6","9","10","12","15","19","22","23","24"];
let resimler=["images/shaneLarkin","images/metecanBirsen.jpeg","images/sehmusHazer.jpeg","images/onurAlpBitim.jpeg","images/cediOsman.jpeg","image.png","images/melihMahmutoglu.jpeg","images/sadikEmirKabaca.jpeg","images/sertacSanli.jpeg","images/bugrahanTuncer.jpeg","images/furkanKorkmaz.jpeg","images/alperenSengun.jpeg","images/ercanOsmani.jpeg"];

const button=document.getElementById("btnDegistir");
const oyuncu1=document.getElementById("oyuncu1");
const oyuncu2=document.getElementById("oyuncu2");
const oyuncu3=document.getElementById("oyuncu3");
const oyuncu4=document.getElementById("oyuncu4");
const oyuncu5=document.getElementById("oyuncu5");

const numara1=document.getElementById("numara1");
const numara2=document.getElementById("numara2");
const numara3=document.getElementById("numara3");
const numara4=document.getElementById("numara4");
const numara5=document.getElementById("numara5");

const resim1=document.getElementById("resim1");
const resim2=document.getElementById("resim2");
const resim3=document.getElementById("resim3");
const resim4=document.getElementById("resim4");
const resim5=document.getElementById("resim5");

let sayi1=Math.floor(Math.random()*13);
oyuncu1.innerHTML=oyuncular[sayi1];
numara1.innerHTML=numaralar[sayi1];
resim1.setAttribute("src",resimler[sayi1]);

let sayi2=Math.floor(Math.random()*13);
oyuncu2.innerHTML=oyuncular[sayi2];
numara2.innerHTML=numaralar[sayi2];
resim2.setAttribute("src",resimler[sayi2]);

let sayi3=Math.floor(Math.random()*13);
oyuncu3.innerHTML=oyuncular[sayi3];
numara3.innerHTML=numaralar[sayi3];
resim3.setAttribute("src",resimler[sayi3]);

let sayi4=Math.floor(Math.random()*13);
oyuncu4.innerHTML=oyuncular[sayi4];
numara4.innerHTML=numaralar[sayi4];
resim4.setAttribute("src",resimler[sayi4]);

let sayi5=Math.floor(Math.random()*13);
oyuncu5.innerHTML=oyuncular[sayi5];
numara5.innerHTML=numaralar[sayi5];
resim5.setAttribute("src",resimler[sayi5]);

button.addEventListener("click", ()=>{
    sayi1=Math.floor(Math.random()*13);
    oyuncu1.innerHTML=oyuncular[sayi1];
    numara1.innerHTML=numaralar[sayi1];
    resim1.setAttribute("src",resimler[sayi1]);

    sayi2=Math.floor(Math.random()*13);
    oyuncu2.innerHTML=oyuncular[sayi2];
    numara2.innerHTML=numaralar[sayi2];
    resim2.setAttribute("src",resimler[sayi2]);

    sayi3=Math.floor(Math.random()*13);
    oyuncu3.innerHTML=oyuncular[sayi3];
    numara3.innerHTML=numaralar[sayi3];
    resim3.setAttribute("src",resimler[sayi3]);

    sayi4=Math.floor(Math.random()*13);
    oyuncu4.innerHTML=oyuncular[sayi4];
    numara4.innerHTML=numaralar[sayi4];
    resim4.setAttribute("src",resimler[sayi4]);

    sayi5=Math.floor(Math.random()*13);
    oyuncu5.innerHTML=oyuncular[sayi5];
    numara5.innerHTML=numaralar[sayi5];
    resim5.setAttribute("src",resimler[sayi5]);
});
