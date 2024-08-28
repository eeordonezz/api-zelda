document.addEventListener("DOMContentLoaded", () => {
    const listgame = document.getElementById('game-list');
    const itemsbtn = document.getElementById('ver_items');



    const fetchGames = async () => {
        try {
            const response = await fetch('https://zelda.fanapis.com/api/games');
            const info = await response.json();

            info.data.forEach((game, index) => {
                const gameCard = document.createElement('div');
                gameCard.classList.add('game-card');

                const imageUrl = imageUrls[index]?.imagen || game.image;

                gameCard.innerHTML = `
                    <img src="${imageUrl}" alt="${game.name}">
                    <h2>${game.name}</h2>
                    <p>${game.description || "Sin descripción disponible"}</p>
                `;

                listgame.appendChild(gameCard);
            });
        } catch (error) {
            console.error("Error al obtener los juegos:", error);
            listgame.innerHTML = '<p>Error al cargar la información de los juegos.</p>';
        }
    };

  

    fetchGames();
});
