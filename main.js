class Sensor{
    
    constructor(number, logs,isOn){
        this.div=document.querySelector('#sensors');
        this.divLED=document.createElement('div');
        this.divInfo=document.createElement('div');
        this.switcher = 1;
        this.number=number;
        this.logs=logs;
        this.isOn=isOn;
        this.render();
        setInterval(()=>this.updateRandomValue(),2000);
        setInterval(()=>this.switchColor(), 1000);
    }
    toSwitch(){
        this.isOn=(this.isOn===false)?true:false;
    }
    updateRandomValue() {
       if(this.isOn===true){
            this.logs = Math.floor(Math.random() * 100); 
            this.divInfo.textContent= this.logs;}
    }
    switchColor(){
        this.divLED.classList.toggle('red');
        this.switcher = (this.switcher===1)?0:1;
 }
    render(){
        this.divInfo.textContent= this.logs;
        this.div.append(this.divLED);
        this.div.append(this.divInfo);
        this.div.style.width='200px';
        this.div.style.height='100px';
        console.log(this.div);
    }
}
const person = new Sensor(1,0,true);
