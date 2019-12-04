/* Helpers.js */

export function setDocumentTitle(getString) {
  document.title = "U+ DogDemo | " + getString;
}

export function apiGetItems(getString) {
  return "https://dog.ceo/api/breeds/list";
}

export function apiGetItemDetails(getString) {
  return "https://dog.ceo/api/breed/" + getString + "/images";
}
