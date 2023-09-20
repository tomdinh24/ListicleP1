
const header = document.querySelector('header');

const headerContainer =  document.createElement('div');
headerContainer.className = 'header-container';

// Left
const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const headerTitle = document.createElement('h1');
headerTitle.className = "header-title";
headerTitle.textContent = "The Akatsuki";

const headerLogo = document.createElement('img');
headerLogo.className = "header-logo";
headerLogo.src = "../image/logo.png";

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);


// Right
const headerRight = document.createElement('div');
headerRight.className = 'header-right';

const headerButton = document.createElement('button')
headerButton.textContent = 'Home';
    
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

headerRight.appendChild(headerButton);


// Header container

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);


header.appendChild(headerContainer);

