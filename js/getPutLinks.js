const iconInput = document.getElementById('icon-input');
const nameInput = document.getElementById('name-input');
const urlInput = document.getElementById('url-input');
const addLinkButton = document.getElementById('add-link-button');
const linksContainer = document.getElementById('links-container');


let savedLinks = JSON.parse(localStorage.getItem('links')) || [];


function renderLinks() {
  linksContainer.innerHTML = ""; 

  savedLinks.forEach(link => {
    const linkItem = createLinkItem(link.name, link.url);
    linksContainer.appendChild(linkItem);
  });
}


function createLinkItem(name, url) {
  const linkItem = document.createElement('li');
  const linkElement = document.createElement('a');
  const deleteButton = document.createElement('button');

  linkElement.href = url;
  linkElement.target = "_blank";
  linkElement.textContent = name;

  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    
    savedLinks = savedLinks.filter(link => link.name !== name || link.url !== url);
    localStorage.setItem('links', JSON.stringify(savedLinks));

    
    linksContainer.removeChild(linkItem);
  });

  linkItem.appendChild(linkElement);
  linkItem.appendChild(deleteButton);

  return linkItem;
}


addLinkButton.addEventListener('click', function() {
  const name = nameInput.value;
  const url = urlInput.value;

  
  if (name && url) {
    savedLinks.push({ name, url });
    localStorage.setItem('links', JSON.stringify(savedLinks));
    renderLinks(); 
    nameInput.value = ''; 
    urlInput.value = '';  
  }
});


renderLinks();