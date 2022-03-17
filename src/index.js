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
pagePath = (_path) => {
  const pageProperties = routes[_path];
  const page = pageProperties.page; 
  return page;    
};

console.log(pagePath('/'));
console.log(pagePath('/about'));
console.log(pagePath('/docs'));
console.log(pagePath('/examples'));


//all html in js
const body = document.body;
body.setAttribute('id', 'root');

const staticIds = {
  navbarDiv: {
    type: 'id',
    value: 'navbarContainer'
  },
  navbar: {
    type: 'id',
    value: 'navbar'
  },
  navToggleBtn: {
    type: 'button',
    value: 'navToggle' 
  },

};

createComponent = (appendId, stringName) => {
  const append = document.getElementById(appendId);
  append.insertAdjacentHTML('beforeend', stringName); 
  return;
};

hydrate = () => {
  const topLevelPaths = Object.keys(routes);

  setup(staticIds);
  populateNavbar(topLevelPaths);
  return topLevelPaths;
};
console.log(hydrate());
/*
div = (appendId) => {
  const appendString = `
  <div id="${id}"></div>`;
  return createComponent();
};

div('navbarContainer', 'root');




/*
nav = (id, className) => {
  const string = `
    <nav id="${id}" class="${className}"></nav>
`;
  createComponent(string); 
  return;
};

a = (id, className) => {
  const string = `
  <a id="${id}" class="${className}" href="#">Navbar</a>
  `;
  createComponent(); 
  return;
};

navToggleBtn = (id, className, appendId, insert) => {
  const string = `
  <a id="navLogo" href="#">Navbar</a>
  <button id="${id}" class="${className}">
    <span id="barTop"></span>  
    <span id="barMid"></span>  
    <span id="barBot"></span>  
  </button> 
  `;
  createComponent(); 
    return;
};

ul = (id, className) => {
  const string = `
  <ul id="${id}" class="${className}"></ul> 
  `;
  createComponent(); 
  return;
};

li = (displayName) => {
  const string = `
    <li class="navItem" href="#">
      <a class="navLink">
        ${displayName}
      </a>
    </li>
  `;
  createComponent(); 
  return;
};
 
liDropdown = (liName, liSub1, liSub2, liSub3) => {
  const string = `
    <li id="navlinkContainer">
       <a id="dropdownLink" href="#"> ${liName} </a>
    <div id="dropdownContent">  
       <a class="dropdownItemLink" href="#"> ${liSub1} </a>
       <a class="dropdownItemLink" href="#"> ${liSub2} </a>
    <div class="dropdownDivider"></div>
       <a class="dropdownItemLink" href="#"> ${liSub3} </a>
    </li>
  `;
  createComponent(); 
 return;
};


searchBar = (appendId, insert) => {
  const string = `
    <form id="searchBar">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  `;
  createComponent(); 
    return;
};

div('navbarContainer', 'div', 'root', 'afterbegin');
/*
nav('navbar', 'nav', 'navbarContainer', 'afterbegin');
navToggleBtn('navToggle', 'btn', 'navbar', 'afterbegin');
div('navDropdownCollapse', 'div', 'navToggle', 'afterend');
ul('navLinkContainer', 'ul', 'navDropdownCollapse', 'afterend');
searchBar('navLinkContainer', 'afterend');
li('Home');
li('Link');
liDropdown('Dropdown', 'Action', 'Another action', 'Something else here');
li('Disabled');
*/


// 1. 

/**
 * 0. Commit changes and push
 * 
 * 1. Extract the append logic to helper function called createComponent
 * 
 * 1.5. Commit changes and push
 * 
 * 2. Instead of taking append id parameter or hard coding the append id,
 * write a function called hydrate that would look something like
 * 
 * ```js
 * const staticIDs = {
 *   navbar: {
 *     type: 'id',
 *     value: 'navbar_container',
 *   },
 * };`
 * 
 * function hydrate() {
 *   const topLevelPaths = Object.keys(routes)
 *   
 *   setup(staticIDs);
 *   populateNavbar(topLevelPaths); 
 * }
 * ```
 * 
 * > Write [jsdoc](https://devhints.io/jsdoc) style docstrings for all functions
 * 
 * > Make sure to annotate before each append what it is for e.g.
 * > ```
 * >   /**
 * >    * Creates the list item for a NavItem component
 * >    *\/
 * >   li(currenDisplayName);
 * > ```
 * 
 * 2.5. Commit changes and push
 * 
 * 3. Instead of hard coding calls to li, loop over the routes object inside `populateNavbar`
 * 
 * 4. Commit changes and push
 * 
 * 5. Format the file with [prettier](https://prettier.io/docs/en/install.html)
 */