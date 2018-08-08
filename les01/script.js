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
    var stopWater;
    var stopWork;
    var cupCoffe;
    var beans = 0;
    var water = 0;
    var MAX_WATER = 1500;
    var MAX_BEANS = 20;
    var BEANS_PORTION = 5;

    render();
    
    function run(){
        if(cupCoffe >= 50 || water < 1){
            stop();
            document.getElementById('waterTxt').value = water;
            document.getElementById('beansTxt').value = beans;
            alert('Your coffe is DONE!');
            return;
        }
        water--;
        cupCoffe++;
    }
    function start() {
        if(water <= 0){
            alert('Water is EMPTY! Add water.');
        }
        if(beans <= 0){
            alert('Beans is EMPTY! Add beans.')
        }
        cupCoffe = 0;
        beans--;
        stopWork = setInterval(run, 100*power/1000);
        
    }
    function stop() {
        clearInterval(stopWork);
    }

    function addWater() {
        stopWater = setInterval(waterAdd, 100);
    }
    function waterAdd(){
        water += 10;        
        if(water > MAX_WATER){
            alert('You broke coffemashin and start FIRE! Please call 112.');
            location.reload();
        }
        document.getElementById('waterTxt').value = water;
    }
    function waterStop(){
        clearInterval(stopWater);
    }
    function addBeans() {
        if (beans <= MAX_BEANS - BEANS_PORTION){
            beans += BEANS_PORTION;
            document.getElementById('beansTxt').value = beans;
        } else {
            alert('Beans is FULL!');
        }
    }

    function render() {
        var work = document.getElementsByClassName('work')[0];
        
        //beans
        var addBeansBtn = document.createElement('button');
        addBeansBtn.innerText = 'Add Beans';
        addBeansBtn.onclick = addBeans;
        work.appendChild(addBeansBtn);
        var inBeans = document.createElement('input');
        inBeans.type = 'text';
        inBeans.id = 'beansTxt'
        inBeans.value = 0;
        work.appendChild(inBeans);
        
        //water
        var addWaterBtn = document.createElement('button');
        addWaterBtn.innerText = 'Add Water';
        addWaterBtn.onclick = addWater;
        work.appendChild(addWaterBtn);
        var stopWaterBtn = document.createElement('button');
        stopWaterBtn.innerText = 'Stop Water';
        stopWaterBtn.onclick = waterStop;
        work.appendChild(stopWaterBtn);
        var inWater = document.createElement('input');
        inWater.type = 'text';
        inWater.id = 'waterTxt'
        inWater.value = 0;
        work.appendChild(inWater);
        
        //work
        var startBtn = document.createElement('button');
        startBtn.innerText = 'Start';
        startBtn.onclick = start;
        work.appendChild(startBtn);
        var stopBtn = document.createElement('button');
        stopBtn.innerText = 'Stop';
        stopBtn.onclick = stop;
        work.appendChild(stopBtn);
    }
}