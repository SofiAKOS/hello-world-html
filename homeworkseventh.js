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
const deleteBtn = document.getElementById("delete-btn");
const selectList = document.getElementById("my-select");
deleteBtn.addEventListener("click", () => {
  const selectedOption = selectList.options[selectList.selectedIndex];
  selectList.remove(selectList.selectedIndex);
});

//5
const myButton = document.getElementById("my-button");
myButton.addEventListener("click", () => {

  alert("I was pressed!");
});
myButton.addEventListener("mouseover", () => {
  console.log("Mouse on me!");
});
myButton.addEventListener("mouseout", () => {
  console.log("Mouse is not on me!");
});

//6
const sizeDisplay = document.getElementById("size-display");
function updateSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  sizeDisplay.innerText = `Ширина: ${width}px, Висота: ${height}px`;
}
window.addEventListener("resize", updateSize);
updateSize();

//7
const citiesByCountry = {
  Germany: ['Berlin', 'Hamburg', 'Munich'],
  USA: ['New York', 'Los Angeles', 'Chicago'],
  Ukraine: ['Kyiv', 'Lviv', 'Odesa'],
};

const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
const output = document.querySelector('p');

function populateCities() {
  citiesSelect.innerHTML = '';
  const selectedCountry = countrySelect.value;
  const cities = citiesByCountry[selectedCountry];
  cities.forEach((city) => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    citiesSelect.appendChild(option);
  });
}
countrySelect.addEventListener('change', () => {
  populateCities();
});
citiesSelect.addEventListener('change', () => {
  const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
  const selectedCity = citiesSelect.value;
  output.textContent = `Selected country: ${selectedCountry}, selected city: ${selectedCity}`;
});
populateCities();


