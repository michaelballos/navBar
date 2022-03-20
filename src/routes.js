
const pageRoute = (event)=> {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocation();
};
 
handleLocation = () => { 
  const path = window.location.pathname;
  const pageProperties= routes[path];
  console.log(pageProperties);
  return fetch(pageProperties)
    .then(pageHTML = pageProperties.html)
    .then(data => data.text())
    .then(document.getElementById('currentPage').innerHTML = pageHTML);
};
/*
function handleLocation(path) {
const path = window.location.pathname;
const route = routes[path];
const pageHTML = route.html;
  fetch(path)
    .then(data => data.text());
 document.getElementById('currentPage').innerHTML = pageHTML;
};
*/
  window.onpopstate = handleLocation;
  window.pageRoute = pageRoute;

  handleLocation();