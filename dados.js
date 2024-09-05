document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = ''; // Limpa os resultados anteriores

        const filteredFilmes = filmes.filter(filme => 
            filme.nome.toLowerCase().includes(query)
        );

        if (filteredFilmes.length === 0) {
            searchResults.innerHTML = '<p>Nenhum filme encontrado.</p>';
        } else {
            filteredFilmes.forEach(filme => {
                const filmeElement = document.createElement('div');
                filmeElement.classList.add('item-resultado');
                
                filmeElement.innerHTML = `
                    <h2><a href="#" target="_blank">${filme.nome}</a></h2>
                    <img src="${filme.capa}" alt="${filme.nome}" style="max-width: 200px;">
                    <p class="descricao-meta">${filme.sinopse}</p>
                    <a href="https://pt.wikipedia.org/wiki/${filme.nome.replace(/ /g, '_')}" target="_blank">Mais informações</a>
                `;
                
                searchResults.appendChild(filmeElement);
            });
        }
    });
});
