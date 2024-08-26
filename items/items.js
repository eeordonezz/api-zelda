document.addEventListener("DOMContentLoaded", () => {
    const itemList = document.getElementById('item-list');

    // Función para obtener la información de los ítems desde la API
    const fetchItems = async () => {
        try {
            const response = await fetch('https://zelda.fanapis.com/api/items');
            const data = await response.json();

            // Iterar sobre los ítems y crear tarjetas para cada uno
            data.data.forEach(item => {
                const itemCard = document.createElement('div');
                itemCard.classList.add('item-card');

                itemCard.innerHTML = `
                    <h2>${item.name}</h2>
                    <p>${item.description || "Sin descripción disponible"}</p>
                `;

                itemList.appendChild(itemCard);
            });
        } catch (error) {
            console.error("Error al obtener los ítems:", error);
            itemList.innerHTML = '<p>Error al cargar la información de los ítems.</p>';
        }
    };

    // Llamar a la función para obtener los ítems al cargar la página
    fetchItems();
});
