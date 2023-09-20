
const renderCards = async () => {
    const response = await fetch("/cards");
    const data = await response.json();

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(d => {
            const card = document.createElement('div');
            card.classList.add('card')

            const topContainer = document.createElement('div');
            topContainer.classList.add('top-container');
        
            const bottomContainer = document.createElement('div');
            bottomContainer.classList.add('bottom-container');
        
            topContainer.style.backgroundImage = `url(${d.image})`
        
            const name = document.createElement('h3');
            name.textContent = d.name;
            bottomContainer.appendChild(name);
        
            const clan = document.createElement('p');
            clan.textContent = 'Clan: ' + d.clan;
            bottomContainer.appendChild(clan);
        
        
            const affiliation = document.createElement('p');
            affiliation.textContent = 'Affiliantion: ' + d.affiliation;
            bottomContainer.appendChild(affiliation);
        
            const link = document.createElement('a');
            link.textContent = 'Read More >';
            link.setAttribute('role','button');
            link.href = `/cards/${d.id}`;
            bottomContainer.appendChild(link);

            card.appendChild(topContainer);
            card.appendChild(bottomContainer);

            mainContent.appendChild(card);
        })
    } else {
        const emptyMessage = document.createElement('h2');
        emptyMessage.textContent = 'No Cards Available';
        mainContent.appendChild(emptyMessage);
    }

}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
  }
else {
    renderCards()
}

