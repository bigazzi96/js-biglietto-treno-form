document.querySelector('#ticket').addEventListener('click',function(){

    
const distance = Number.parseFloat(document.querySelector('input#user-distance').value,10);
const age = Number.parseInt(document.querySelector('input#user-age').value,10);


if (age > 63) {
   sconto = 37.893;
}

else if (age < 21){
    sconto = 24.552;
}





