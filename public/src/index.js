//sets id body root
const body = document.body;
body.setAttribute('id', 'root');

/**
 * id
 */

div = (id, className, appendId, insert) => {
  const div = `
  <div id="${id}" class="${className}"></div>
`;
  const append = document.getElementById(`${appendId}`);
  append.insertAdjacentHTML(`${insert}`, div);
  return;
};

nav = (id, className, appendId, insert) => {
  const nav = `
    <nav id="${id}" class="${className}"></nav>
`;
  const append = document.getElementById(`${appendId}`);
  append.insertAdjacentHTML(`${insert}`, nav);
  return;
};

a = (id, className, appendId, insert) => {
  const a = `
  <a id="${id}" class="${className}" href="#">Navbar</a>
  `;
  const navbar = document.getElementById(`${appendId}`);
  navbar.insertAdjacentHTML(`${insert}`, a);
  return;
};

navToggleBtn = (id, className, appendId, insert) => {
  const btn = `
  <a id="navLogo" href="#">Navbar</a>
  <button id="${id}" class="${className}">
    <span id="barTop"></span>  
    <span id="barMid"></span>  
    <span id="barBot"></span>  
  </button> 
  `;
  const append = document.getElementById(`${appendId}`);
  append.insertAdjacentHTML(`${insert}`, btn);
  return;
};

ul = (id, className, appendId, insert) => {
  const ul = `
  <ul id="${id}" class="${className}"></ul> 
  `;
  const append = document.getElementById(`${appendId}`);
  append.insertAdjacentHTML(`${insert}`, ul);
  return;
};

li = (displayName) => {
  const navItem = `
    <li class="navItem" href="#">
      <a class="navLink">
        ${displayName}
      </a>
    </li>
  `;
  const navLinkContainer = document.getElementById('navLinkContainer');
  navLinkContainer.insertAdjacentHTML('beforeend', navItem);
  return;
};

liDropdown = (liName, liSub1, liSub2, liSub3) => {
  const navDropdown = `
    <li id="navlinkContainer">
       <a id="dropdownLink" href="#"> ${liName} </a>
    <div id="dropdownContent">  
       <a class="dropdownItemLink" href="#"> ${liSub1} </a>
       <a class="dropdownItemLink" href="#"> ${liSub2} </a>
    <div class="dropdownDivider"></div>
       <a class="dropdownItemLink" href="#"> ${liSub3} </a>
    </li>
  `;
  const append = document.getElementById('navLinkContainer');
  append.insertAdjacentHTML('beforeend', navDropdown);
  return;
};

searchBar = (appendId, insert) => {
  const search = `
    <form id="searchBar">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  `;
  const append = document.getElementById(`${appendId}`);
  append.insertAdjacentHTML(`${insert}`, search);
  return;
};

div('navbarContainer', 'div', 'root', 'afterbegin');
nav('navbar', 'nav', 'navbarContainer', 'afterbegin');
navToggleBtn('navToggle', 'btn', 'navbar', 'afterbegin');
div('navDropdownCollapse', 'div', 'navToggle', 'afterend');
ul('navLinkContainer', 'ul', 'navDropdownCollapse', 'afterend');
searchBar('navLinkContainer', 'afterend');
li('Home');
li('Link');
liDropdown('Dropdown', 'Action', 'Another action', 'Something else here');
li('Disabled');
