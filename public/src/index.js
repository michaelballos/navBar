document.getElementById('root').innerHTML = `
<div id="navbarContainer">
<nav id="navbar">
  <a class="navbarLogo" href="#">Navbar</a>
  <button class="nav-toggle">
    <span class="bar-top"></span>
    <span class="bar-mid"></span>
    <span class="bar-bot"></span>
  </button> 
   <div id="navItemContainer">
    <ul id="navLinkContainer" class="navLinkContainer">
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
 </nav>
 </div>
`;






/**
 * append reg li item into nav ul container   
 * @param {*} displayName
 * @returns
 */  
appendListItem = (displayName) => {
// assign & define string to append
  const navItem =`
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



/**
 * append dropdown li w/ 3 sub items into ul container 
 * @param {*} dropdownTitle
 * @param {*} dropdown2
 * @param {*} dropdown3
 * @param {*} dropdown4
 * @returns
 */
navbarDropdown = (dropdownLinkDisplay, dropdown1, dropdown2, dropdown3) => {
// assign & define dropdown li string to append
  const navDropdown = `
  <li id="dropdownListContainer">
    <a id="dropdownLink" href="#"> ${dropdownLinkDisplay} </a>
    <div id="dropdownContent">  
       <a class="dropdownItemLink" href="#"> ${dropdown1} </a>
       <a class="dropdownItemLink" href="#"> ${dropdown2} </a>
      <div class="dropdownDivider"></div>
       <a class="dropdownItemLink" href="#"> ${dropdown3} </a>
    </div>
  `;

const dropdownLinkContainer = document.getElementById('navLinkContainer');
dropdownLinkContainer.insertAdjacentHTML('beforeend', navDropdown);
return;
};



const homeLinkItem = appendListItem('Home');
const linkListItem = appendListItem('Link');
const dropdownListItem = navbarDropdown('Dropdown', 'Action', 'Another action', 'Something else here');
const disabledListItem = appendListItem('Disabled');
   
