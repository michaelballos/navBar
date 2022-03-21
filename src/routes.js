
  /**
   * creates location history and pushed url into search bar without navigating to the link path
   * @param {string} event captures the click of link
   */
const pageRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocation();
};

handleLocation = () => {
  const path = window.location.pathname;
  const pageProperties = routes[path]; 
  return fetch(pageProperties)
    .then(pageHTML = pageProperties.htmlString)
    .then(data => data.text())
    .then((document.getElementById('currentPage').innerHTML = pageHTML))
    .catch(console.log('Fuk U'));
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
