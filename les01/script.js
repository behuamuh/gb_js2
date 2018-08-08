var btn = document.getElementById('start');
btn.onclick = function (){
    var radio = document.getElementsByName('choose');
    var pwr = 200;
    for ( i = 0; i < radio.length; i++){
        if (radio[i].checked){
            pwr = radio[i].value;
        }
    }
    document.getElementsByClassName('make')[0].style.display = 'none';


};
function Coffe(power) {

}