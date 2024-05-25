class Sensor{
    constructor(number, logs,isOn){
        this.div=document.querySelector('#sensors');
        this.divLED=document.createElement('div');
        this.divInfo=document.createElement('div');
        this.divInfo.id='newEl';
        this.switcher = 1;
        this.number=number;
        this.logs=logs;
        this.isOn=isOn;
        this.divLED.classList.add('LED');
        this.divInfo.classList.add('Info');
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
        if(this.isOn===true){
        this.divLED.classList.toggle('red');
        this.switcher = (this.switcher===1)?0:1;}
    }
    render(){
        this.divInfo.textContent= this.logs;
        this.div.append(this.divLED);
        this.div.append(this.divInfo);
        this.div.style.width='100%';
        this.div.style.height='200px';
        
        console.log(this.div);
    }
}
const person = new Sensor(1,0,true);
console.log(person);
const el=document.querySelector('#sensors');
el.addEventListener('mouseover',function(event){
    el.style.backgroundColor='rgb(127, 180, 70)';
});
el.addEventListener('mouseleave',function(event){
    el.style.backgroundColor='steelblue';
});
