const inputIcon = document.getElementById('icon-input');
const inputName = document.getElementById('name-input');
const inputUrl = document.getElementById('url-input');
const btnAddLink = document.getElementById('add-link-button');
const containerLinks = document.getElementById('links-container');

let storedLinks = JSON.parse(localStorage.getItem('links')) || [];

function displayLinks() {
  containerLinks.innerHTML = "";
  storedLinks.forEach(({ name, url }) => {
    containerLinks.appendChild(generateLinkElement(name, url));
  });
}

function generateLinkElement(name, url) {
  const listItem = document.createElement('li');
  const linkAnchor = document.createElement('a');
  const btnDelete = document.createElement('button');

  linkAnchor.href = url;
  linkAnchor.target = "_blank";
  linkAnchor.textContent = name;

  btnDelete.textContent = 'X';
  btnDelete.id = "supr";
  btnDelete.addEventListener('click', () => {
    storedLinks = storedLinks.filter(item => item.name !== name || item.url !== url);
    localStorage.setItem('links', JSON.stringify(storedLinks));
    containerLinks.removeChild(listItem);
  });

  listItem.appendChild(linkAnchor);
  listItem.appendChild(btnDelete);

  return listItem;
}

btnAddLink.addEventListener('click', function() {
  const linkName = inputName.value.trim();
  const linkUrl = inputUrl.value.trim();

  if (!linkName && !linkUrl) {
    alert('Por favor, introduce un nombre y una URL.');
  } else if (!linkName) {
    alert('Por favor, introduce un nombre para el enlace.');
  } else if (!linkUrl) {
    alert('Por favor, introduce la URL para el enlace.');
  } else {
    storedLinks.push({ name: linkName, url: linkUrl });
    localStorage.setItem('links', JSON.stringify(storedLinks));
    displayLinks();
    inputName.value = '';
    inputUrl.value = '';
  }
});

displayLinks();