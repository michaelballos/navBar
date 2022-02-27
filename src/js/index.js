const body = document.body;
const nav = document.createElement('nav');
const div = document.createElement('div');
const ul = document.createElement('ul');
const li = document.createElement('li');
const a = document.createElement('a');
const button = document.createElement('button');
const img = document.createElement('img');
/*
body.append(div);
  div.classList.add('navbar');
div.append(ul);
  ul.style.listStyle = 'none';
  ul.classList.add('navPage');
ul.append(li);
li.append(a);
  li.classList.add('page-container');
  a.classList.add('item');
ul.append(li);
*/

//<nav></nav>
body.append(nav);
//<nav class="navbar navbar-expand-lg navbar-light bg-light></nav>"
  nav.classList.add('navbar');
  nav.classList.add('navbar-expand-lg');
  nav.classList.add('navbar-light');
  nav.classList.add('bg-light');
//<button class="logoBtn"></button>
nav.append(button);
  button.classList.add('logoBtn');
//<img class="navLogo" src="/src/img/logo.png alt="logo">
button.append(img);
  img.src = '/src/img/logo.png';
  img.classList = 'navLogo';
  img.alt = 'logo';
nav.append(div);



