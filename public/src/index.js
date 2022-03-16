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
const navbarDisplayNames = [];
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

const navbarDropdown = (displayName1, displayName2, displayName3) => {
  const navDropdown = `
    <div id="dropdownContainerChild">  
       <a class="dropdownItemLink" href="#"> ${displayName1} </a>
       <a class="dropdownItemLink" href="#"> ${displayName2} </a>
      <div class="dropdownDivider"></div>
       <a class="dropdownItemLink" href="#"> ${displayName3} </a>
    </div>
  `;

const dropdownListContainer = document.getElementsByClassName('dropdownItem');
dropdownListContainer.insertAdjacentHTML('beforeend', navDropdown);
return;
};

const appendHomeList = appendListItem('Home');
const appendLinkList = appendListItem('Link');
const appendDropdownList = appendListItem('Dropdown');

const appendDisabledList = appendListItem('Disabled');


   /*
function appendLink(displayName) {
  /**
   * Create the html string for the link based on all 
   * parameters to the function
  const link = `
    <li>
      ...
        ${displayName}
      ...
    </li>
  `;
  
  // Get the elmeent that is the container for the links
  const container = document.getElementById(LinkContainerID);

  // Append html to the links container
  container.insertAdjacentHTML('beforeend', link);

  return;
} 
*/

/*
      <li class="navItem">
        <a class="navLink" href="#">Home</a>
      </li>
      <li class="navItem">
        <a class="navLink" href="#">Link</a>
      </li>
      <li class="dropdownItem">
        <a class="dropdownLinkContainer" href="#">Dropdown</a>
        <div class="dropdownContainerChild">
          <a class="dropdownItemLink" href="#">Action</a>
          <a class="dropdownItemLink" href="#">Another action</a>
          <div class="dropdownDivider"></div>
          <a class="dropdownItemLink" href="#">Something else here</a>
        </div>
      </li>
      <li class="navItem">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    */
