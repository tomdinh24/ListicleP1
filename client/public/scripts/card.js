

const renderCard = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/cards')
    const data = await response.json()

    const cardContent = document.getElementById('card-content')
    
    let card;

    card = data.find(card => card.id === requestedID)

    if (data) {
       document.getElementById('card-image').src = card.image;
       document.getElementById('card-name').textContent = card.name;
       document.getElementById('card-clan').textContent = "Clan: " + card.clan;
       document.getElementById('card-affiliation').textContent = "Affiliation: " + card.affiliation;
       document.getElementById('card-description').textContent = "Description: " + card.description;
    } 
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Cards Available!';
        cardContent.appendChild(message) 
    }
}

renderCard();