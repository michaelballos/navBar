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

function pagePath(_path) {
  const pageproperties = routes[_path];
  const page = pageproperties.page; 
  return page;    
}

console.log(pagePath('/'));
console.log(pagePath('/about'));
console.log(pagePath('/docs'));
console.log(pagePath('/examples'));

let insideRoute = '/docs/getting-started'; 
let pageArray = insideRoute.split('/'); 

console.log(pageArray); 








{ /* */ }