
  /**
   * creates location history and pushed url into search bar without navigating to the link path
   * @param {string} event captures the click of link
   */
const showPage = (route) => {
  console.log('Showing page:', route);
  window.history.pushState({}, '', route);
  showContent();
};

//shows page content by inserting html defined in @object routes 
showContent = () => {
  const path = window.location.pathname;
  console.log('path', path);
  pageProperties = routes[path];
  pageHTML = pageProperties.htmlString;
  document.getElementById('currentPage').innerHTML = pageHTML;
};
window.onpopstate = showContent;
window.showPage = showPage;

showContent();
