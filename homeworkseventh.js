//1
let newWindow = window.open('', '', 'width=300,height=300');
setTimeout(() => {
  newWindow.resizeTo(500, 500);
}, 2000);
setTimeout(() => {
  newWindow.moveTo(200, 200);
}, 4000);
setTimeout(() => {
  newWindow.close();
}, 6000);
//2
function changeCSS() {
    let p = document.getElementById('text');
    p.style.color = 'orange';
    p.style.fontSize = '20px';
    p.style.fontFamily = 'Comic Sans MS';
  }
  //3
const button1 = document.getElementById('button1');
button1.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});

const button2 = document.getElementById('button2');
button2.addEventListener('dblclick', function() {
  document.body.style.backgroundColor = 'pink';
});

const button3 = document.getElementById('button3');
button3.addEventListener('mousedown', function() {
  document.body.style.backgroundColor = 'brown';
});
button3.addEventListener('mouseup', function() {
  document.body.style.backgroundColor = 'white';
});

const link = document.getElementById('link');
link.addEventListener('mouseover', function() {
  document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', function() {
  document.body.style.backgroundColor = 'white';
});
//4

//5

//6


