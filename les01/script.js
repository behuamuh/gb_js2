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
    document.getElementsByClassName('work')[0].style.display = 'block';
    var coffe = new Coffe(pwr);

};
function Coffe(power) {
    this.power = power;
    var beans = 0;
    var water = 0;
    var MAX_WATER = 1500;
    var MAX_BEANS = 20;
    var BEANS_PORTION = 5;

    render();

    function start() {

    }
    function stop() {

    }

    function addWater() {

    }
    function addBeans() {
        if (beans <= MAX_BEANS - BEANS_PORTION){
            beans += BEANS_PORTION;
        } else {
            alert('Beans is FULL!');
        }
    }

    function render() {
        var work = document.getElementsByClassName('work')[0];
        var addBeansBtn = document.createElement('button');
        addBeansBtn.innerText = 'Add Beans';
        addBeansBtn.onclick = addBeans;
        work.appendChild(addBeansBtn);
        var addWaterBtn = document.createElement('button');
        addBeansBtn.innerText = 'Add Water';
        addBeansBtn.onclick = addWater;
        work.appendChild(addWaterBtn);
    }
}