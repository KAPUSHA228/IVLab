class Sensor {
    static counter = 0;
    constructor(isOn) {
        this.logs = 0;
        this.isOn = isOn;
        this.hasMenu = false;
        this.switcher = true;
        this.Parent = document.querySelector('#sensors');
        this.Parent.classList.add('container');
        this.field = document.createElement('div');
        this.field.classList.add('pedestal');
        this.field.id = Sensor.counter++;
        this.LED = document.createElement('div');
        this.LED.classList.add('LED');
        this.Info = document.createElement('div');
        this.Info.classList.add('Info');
        this.Info.id = 'inf';
        this.render();
        setInterval(() => this.switchColor(), 1000);
        setInterval(() => this.updateRandomValue(), 2000);
        // setInterval(() => this.toSwitch(), 4000);
    }
    toSwitch() {
        this.isOn = !this.isOn;
        this.LED.classList.toggle('white');
    }
    updateRandomValue() {
        if (this.isOn === true) {
            this.logs = Math.floor(Math.random() * 100);
            this.Info.textContent = this.logs;
        }
    }
    switchColor() {
        if (this.isOn === true) {
            this.LED.classList.toggle('red');
            this.switcher = (this.switcher) ? false : true;
        }
        else {
            this.LED.classList.add('white');
        }
    }
    render() {
        this.Info.textContent = this.logs;
        this.field.append(this.LED);
        this.field.append(this.Info);
        this.Parent.append(this.field);
    }
}
const mas = [];
const person = new Sensor(true);
mas.push(person);
const person2 = new Sensor(false);
mas.push(person2);
//console.log(mas);
const el = document.querySelector('#sensors');
const el2 = document.querySelectorAll('#inf');
el.addEventListener('mouseover', function (event) {
    el.style.backgroundColor = 'grey';
});
el.addEventListener('mouseleave', function (event) {
    el.style.backgroundColor = 'dimgrey';
});
el2.forEach(element => {
    console.log(element.parentElement.id);
    element.addEventListener('click', function () {
        if (this.hasMenu === true) {
            document.querySelector('#menushka').remove();
        }
        else {
            // const menu = document.createElement('div');
            const button = document.createElement('button');
            button.id = 'menushka';
            button.innerText = 'Вырубить';
            //menu.append(button);
            element.parentElement.insertAdjacentElement('afterend', button);
            const sensorInstance = mas[element.parentElement.id];
            button.onclick = function () {
                sensorInstance.toSwitch();
               // button.innerText('Врубить');
            };
        }
        this.hasMenu = !this.hasMenu;
    });
});
