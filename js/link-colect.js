const iconInput = document.getElementById('icon-input');
const nameInput = document.getElementById('name-input');
const urlInput = document.getElementById('url-input');
const addLinkButton = document.getElementById('add-link-button');
const linksContainer = document.getElementById('links-container');

// Obtener enlaces guardados desde localStorage
const savedLinks = JSON.parse(localStorage.getItem('links')) || [];

// Función para renderizar y añadir enlaces al DOM
function renderLinks() {
linksContainer.innerHTML = ""; // Limpiar el contenido actual

  savedLinks.forEach(link => {
    const linkItem = createLinkItem(link.name, link.url);
    linksContainer.appendChild(linkItem);
  });
}

// Función para crear un elemento de enlace con botón de eliminar
function createLinkItem(name, url) {
  const linkItem = document.createElement('li');
  const linkElement = document.createElement('a');
  const deleteButton = document.createElement('button');

  linkElement.href = url;
  linkElement.target = "_blank";
  linkElement.textContent = name;

  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    // Eliminar el enlace del array y actualizar localStorage
    const updatedLinks = savedLinks.filter(link => link.name !== name || link.url !== url);
    localStorage.setItem('links', JSON.stringify(updatedLinks));

    // Eliminar el elemento del DOM
    linksContainer.removeChild(linkItem);
  });

  linkItem.appendChild(linkElement);
  linkItem.appendChild(deleteButton);

  return linkItem;
}

// Evento para añadir un nuevo enlace
addLinkButton.addEventListener('click', function() {
  const name = nameInput.value;
  const url = urlInput.value;

  // Validar que ambos campos no estén vacíos antes de añadir el enlace
  if (name && url) {
    savedLinks.push({ name, url });
    localStorage.setItem('links', JSON.stringify(savedLinks));
    renderLinks(); // Renderizar nuevamente los enlaces en el DOM
  }
});

// Renderizar los enlaces al cargar la página
renderLinks();
