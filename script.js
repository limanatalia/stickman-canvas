var canvas = document.getElementById('stickMan');
var context = canvas.getContext('2d');

var cor = '#000';

canvas.width = 400;
canvas.height = 300;

context.fillStyle = cor;
context.strokeStyle = cor;

context.lineWidth = 5;

context.beginPath();
context.arc(200, 50, 30, 0, Math.PI*2);
context.fill();

context.beginPath();
context.moveTo(200, 80);
context.lineTo(200, 180);
context.stroke();

context.beginPath();
context.moveTo(200, 84);
context.lineTo(150, 130);

context.moveTo(200, 84);
context.lineTo(250, 130);
context.stroke();

context.beginPath();
context.moveTo(200, 180);
context.lineTo(160, 240);

context.moveTo(200, 180);
context.lineTo(220, 240);

context.moveTo(160, 240);
context.lineTo(150, 280);

context.moveTo(220, 240);
context.lineTo(220, 280);
context.stroke();

context.beginPath();
context.strokeStyle = '#fff';
context.arc(200, 50, 20, 0, Math.PI);
context.stroke();

context.beginPath();
context.fillStyle = '#fff';
context.arc(190, 42, 3, 0, Math.PI*2);
context.fill();

context.beginPath();
context.fillStyle = '#fff';
context.arc(210, 42, 3, 0, Math.PI);
context.fill();