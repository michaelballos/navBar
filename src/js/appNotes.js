//object syntax 
 const object = {
   key1: 'value1',
   key2: 'value2',
 }
 
 object.key1
 >> 'value1'
 
 object['key1']
 >> 'value1'
 
 object./docs
 >>  ERROR BAD DONT DO

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

*STEP 1*
 /home => Home
 /about => About
 /docs => Documentation
 /examples => Examples

 Ex:
                        function pageFromPath(path) {
 return value ->        function pageFromPath(_path) {
                        const pageProperties = routes[_path];
                        const page = pageProperties.page; 
                        return page;
                        }

console.log(pageFromPath('/'));
 >> Home

console.log(pageFromPath('/about'));
 >> About

 Given a path:
  e.g. '/docs/getting-started'
 
 Return the name of the page that the 
 path routes to  as a string  


function pageFromPath(_path) {
  const pageproperties = routes[_path];
  const page = pageproperties.page; 
  return page;    
}

console.log(pageFromPath('/'));
console.log(pageFromPath('/about'));
console.log(pageFromPath('/docs'));
console.log(pageFromPath('/examples'));


input = '/docs/getting-started';
  ['docs', 'getting-started']
 if there's just one value in the list just return the page
 if there's more than one, access routes inside 
    the object of first route



spoken func;
1 = return page
1 < access routes within object
*/ 


let insideRoute = '/docs/getting-started'; 
let pageArray = insideRoute.split('/'); 

console.log(pageArray); 








