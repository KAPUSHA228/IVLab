let per=JSON.parse(localStorage.getItem('isOn'));
if(per){
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
ctx.lineWidth = 0.6;
ctx.strokeStyle = 'black';
const canvasStyles = getComputedStyle(canvas);
const canvasHeight = parseInt(canvasStyles.getPropertyValue('height'), 10);
canvas.height += 50;
const maxValue = 200;
const barWidth = canvas.width / 40;//ширина палочек
const barSpacing = 10;//расстояние между палочками
let nums = [];
function doGrafik() {
    let i = 0.5;
    if (nums.length === 16) { nums.shift(); }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText('Колебания конкретного сенсора (в пределах 30):', 40, 20);
    //метки на оси Y
    ctx.fillText('0', 5, canvas.height);
    ctx.fillText('25-', 1, canvas.height - 25);
    ctx.fillText('50-', 1, canvas.height - 50);
    ctx.fillText('75-', 1, canvas.height - 75);
    ctx.fillText('100-', 1, canvas.height - 100);
    ctx.moveTo(0, canvas.height); // Начальная точка шкалы
    ctx.lineTo(0, 50); // Конечная точка шкалы
    ctx.stroke();
    const barHeight = Math.floor(Math.random() * (30 - 0) + 0);;
    nums.push(barHeight);
    nums.forEach((value) => {
        const x = ++i * (barWidth + barSpacing);
        const y = canvas.height - value;
        ctx.fillRect(x, y, barWidth, value);
    })
}
setInterval(doGrafik, 2000);}
else{
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillText('сенсор выключен', 40, 20);

}