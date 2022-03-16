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

