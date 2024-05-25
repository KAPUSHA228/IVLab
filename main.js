class Sensor{
    
    constructor(number, logs,isOn){
        this.div=document.querySelector('#sensors');
        this.divLED=document.createElement('div');
        this.divInfo=document.createElement('div');
        this.number=number;
        this.logs=logs;
        this.isOn=isOn;
        this.render();
        setInterval(()=>this.updateRandomValue(),2000);
    }
    toSwitch(){
        this.isOn=(this.isOn===false)?true:false;
    }
    updateRandomValue() {
       if(this.isOn===true){
            this.logs = Math.floor(Math.random() * 100); 
            this.divInfo.textContent= this.logs;}
    }
    render(){
        //this.updateRandomValue();
        this.divInfo.textContent= this.logs;
        this.div.append(this.divLED);
        this.div.append(this.divInfo);
        this.div.style.width='200px';
        //div.style.height='100px';
        console.log(this.div);
    }
}
const person = new Sensor(1,0,true);
// const switcher = 1;
// Функция для обновления случайного значения в указанном элементе

// function switchColor(){
//     document.getElementById('button1').classList.toggle('red');
//     switcher = (switcher===1)?0:1;
// }

// setInterval(switchColor, 1000);