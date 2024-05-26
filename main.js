class Sensor{
    constructor(number,logs,isOn){
        this.div=document.querySelector('#sensors');
        this.divLED=document.createElement('div');
        this.divInfo=document.createElement('div');
        this.menu=document.createElement('div');
        this.divInfo.id='inf';
        this.switcher = 1;
        this.number=number;
        this.logs=logs;
        this.isOn=isOn;
        this.divLED.classList.add('LED');
        this.divInfo.classList.add('Info');
        this.render();
        setInterval(()=>this.updateRandomValue(),2000);
        setInterval(()=>this.switchColor(), 1000);
        setInterval(()=>this.toSwitch(),4000);
    }
    toSwitch(){
        this.isOn=!this.isOn;
        this.divLED.classList.toggle('white');
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
        else{
            this.divLED.classList.add('white');
        }
    }
    render(){
        this.divInfo.textContent= this.logs;
        this.div.append(this.divLED);
        this.div.append(this.divInfo);
        this.div.append(this.menu);
        this.menu.style.display='none';
        this.div.style.width='100%';
        this.div.style.height='200px';
        console.log(this.div);
    }
}
const person = new Sensor(1,0,true);
const person2= new Sensor (1,0,false);
console.log(person);
const el=document.querySelector('#sensors');
const el2=document.querySelectorAll('#inf');
console.log(el2);
el.addEventListener('mouseover',function(event){
    el.style.backgroundColor='rgb(127, 180, 70)';
});
el.addEventListener('mouseleave',function(event){
    el.style.backgroundColor='steelblue';
});
el2.forEach(element=>{
    element.addEventListener('mouseover',function(){
        const menu = document.createElement('div');
        menu.id='menushka';
        element.insertAdjacentElement('afterend',menu);
    });
});
el2.forEach(element => {
    element.addEventListener('mouseleave', function () {
        document.querySelectorAll('#menushka').forEach(local=>{
            local.remove();});
    });
});