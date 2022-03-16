document.getElementById('root').innerHTML = `
<div class="navbarContainer">
<nav class="navbar">
  <a class="navbarLogo" href="#">Navbar</a>
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

const routes = {
  '/': {
    page: 'Home',
  },
  '/about': {
    page: 'About',
  },
  
  '/docs': {
    page: 'Documentation',

    routes: {
      '/getting-started': {
        page: 'Getting Started',
      },
      '/api-reference': {
        page: 'API Reference',
      },
    }
  },
  '/examples': {
    page: 'Examples',
    routes: {
      '/counter': {
        page: 'Counter',
      },
      '/todo': {
        page: 'Todo',
      },
    }
  },
};

/**
 * Returns the display name based on route
 * @param {*} _path 
 * @returns 
 */
function pagePath(_path) {
  const pageProperties = routes[_path];
  const page = pageProperties.page; 
  return page;    
}

console.log(pagePath('/'));
console.log(pagePath('/about'));
console.log(pagePath('/docs'));
console.log(pagePath('/examples'));



/**
 * appends <li> item into <ul> container   
 * @param {*} displayName
 * @returns
 */  
appendListItem = (displayName) => {
  const navItem =`
    <li class="navItem">
      <a class="navLink">
        ${displayName}
      </a>
    </li>
  `;

const navLinkContainer = document.getElementById('navLinkContainer');  
navLinkContainer.insertAdjacentHTML('beforeend', navItem);
return;
};

navbarDropdown = (dropdown1, dropdown2, dropdown3, dropdown4) => {
  const navDropdown = `
  <li id="dropdownListContainer">
    <a id="dropdownLink" href="#"> ${dropdown1} </a>
    <div id="dropdownContent">  
       <a class="dropdownItemLink" href="#"> ${dropdown2} </a>
       <a class="dropdownItemLink" href="#"> ${dropdown3} </a>
      <div class="dropdownDivider"></div>
       <a class="dropdownItemLink" href="#"> ${dropdown4} </a>
    </div>
  `;

const dropdownLinkContainer = document.getElementById('navLinkContainer');
dropdownLinkContainer.insertAdjacentHTML('beforeend', navDropdown);
return;
};

const homeLinkItem = appendListItem('Home');
const linkListItem = appendListItem('Link');
const dropdownListItem = navbarDropdown('Dropdown', 'title1', 'title2', 'title3');
const disabledListItem = appendListItem('Disabled');
   
