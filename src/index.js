document.body.setAttribute('id', 'root');
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
    },
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
    },
  },
};

const appendString = (selectById, stringToAppend) => {
  const selectedId = document.getElementById(selectById);
  selectedId.insertAdjacentHTML('afterbegin', stringToAppend);
};

const yourMama = 'total inches in this pussy:';
const yourMamasHoes = {
  joe: 2,
  ghandi: 9,
  nuts: 1,
};
console.log('yourMamasHoes Object:', yourMamasHoes);
/**
 * iterates object values into an array & logs in console
 *
 */
const dickSize = Object.values(yourMamasHoes);
console.log('dickSize Array', dickSize);
let sum = 0;
for (i = 0; i < dickSize.length; i++) {
  sum += dickSize[i];
}
console.log(yourMama, sum, 'inches');

console.log('');
/**
 * Returns the display name based on navbar route
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
/**
 * can hard code everything but elements that repeat
 * if it repeats "extract it to a constant"
 */

hydrate = () => {
  /**
   * creates static navbar containers
   */
  appendString(
    'root',
    `
      <nav id="navContnr">
        <a id="navLogo" href="#">Navbar</a>
          <button id="navTglBtn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"/></svg>
          </button>
          <div id="navSuppCont">
            <ul id="navLnkCntnr">

                <div id="drpdwnMnu">
                </div>
            </ul> 
            <form id="srchContnr">
              <input id="srchBxInpt" type="search" placeholder="Search" aria-label="Search">
              <button id="srchBtn" type="submit">Search</button>
            </form>
          </div>
      </nav>
    `
  );

  const topLevelPaths = Object.keys(routes);
  console.log(topLevelPaths);

  /**
   * creates navbar list items containing routed links
   * @param {string[]} route top level navbar routes
   * @returns {string[]} list items
   */
  const links = topLevelPaths.map((route, i) => {
    const lowercaseLinkName = route.replace('/', '');
    const uppercaseLinkName =
      lowercaseLinkName.charAt(0).toUpperCase() + lowercaseLinkName.slice(1);
    if (i < 1) {
      listItem = `<li class="navLnkLi"><a class="navLnk" href="${route}">Home</a></li>`;
      return listItem;
    } else {
     const listItem = `<li class="navLnkLi"><a class="navLnk" href="${route}">${uppercaseLinkName}</a></li>`;
     return listItem;
    }
  });
  console.log('links:', links);

  /**
   * inserts main links before the drop down menu
   * @param {string} link - list item containing nav links
   */
  links.forEach((link) => {
    const navCntnr = document.getElementById('drpdwnMnu');

    navCntnr.insertAdjacentHTML('beforebegin', link);
    console.log(navCntnr);
  });
};
hydrate();

/*



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




// 1. 
 * 0. Commit changes and push
 * 
 * 1. Extract the append logic to helper function called createComponent
 * 
 * 1.5. Commit changes and push
 * 
 * 2. Instead of taking append id parameter or hard coding the append id,
 * write a function called hydrate that would look something like
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
