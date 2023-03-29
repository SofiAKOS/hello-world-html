//1
<>//1
    <ul id="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul><button onclick="displayList()">Показати список</button></>

//2

var header = document.querySelector("h1");
var div = document.getElementById("myDiv");
var list = document.getElementById("myList");
var span = document.querySelector("span");


header.style.fontSize = "72px";
header.style.textAlign = "center";
div.style.display = "flex";
div.style.flexDirection = "row";
div.style.justifyContent = "space-between";
list.style.display = "flex";
list.style.flexDirection = "row";
list.style.listStyleType = "none";
span.style.visibility = "hidden";

//3

const body = document.createElement('body');
const main = document.createElement('main');
main.classList.add('mainClass', 'check', 'item');
const div = document.createElement('div');
div.id = 'myDiv';
const p = document.createElement('p');
p.textContent = 'First paragraph';

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);
document.documentElement.appendChild(body);

//4
// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
const form = document.querySelector('.array fieldset');
const btn = document.querySelector('.btn');
const outBlock = document.querySelector('.out');

btn.addEventListener('click', () => {

  const inputs = form.querySelectorAll('.arr');
  let output = '';

  
  inputs.forEach(input => {
    output += `${input.getAttribute('data-form')}: ${input.value}\n`;
  });

 
  outBlock.textContent = output;
});
//5
/*
1) вибрати всі теги із класом circle
2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації

- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут
*/
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
  const animClass = circle.getAttribute('data-anim');
  circle.classList.add(animClass);
});
circles.forEach(circle => {
  circle.addEventListener('animationstart', () => {
    console.log(`${circle.getAttribute('data-anim')} animation started`);
  });
  circle.addEventListener('animationend', () => {
    console.log(`${circle.getAttribute('data-anim')} animation ended`);
  });
});


