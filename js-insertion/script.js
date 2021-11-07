const container = document.querySelector('#container');
const p = document.createElement('p');
const h3 = document.createElement('h3')
const div = document.createElement('div');
const p2 = document.createElement('p');
const h1 = document.createElement('h1');

p.style.color = 'red';
p.textContent = "Hey I'm red!";

h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!"

p2.textContent = 'ME TOO!'
h1.textContent = "I'm in a div"

container.appendChild(p);
container.appendChild(h3);

div.appendChild(h1);
div.appendChild(p2);

div.style.borderColor = 'black';
div.style.backgroundColor = 'pink';
container.appendChild(div);
