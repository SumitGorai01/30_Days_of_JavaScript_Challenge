const apikey = "your api key"
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${query}`)
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('results-container');
            resultsContainer.innerHTML = '';
            if (data.Search) {
                data.Search.forEach(movie => {
                    const movieElement = document.createElement('div');
                    movieElement.classList.add('movie');
                    movieElement.innerHTML = `
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <h2>${movie.Title}</h2>
                        <p>${movie.Year}</p>
                        <button class="more-info-button" data-imdbid="${movie.imdbID}">More Info</button>
                    `;
                    resultsContainer.appendChild(movieElement);
                });
                document.querySelectorAll('.more-info-button').forEach(button => {
                    button.addEventListener('click', function() {
                        const imdbID = this.getAttribute('data-imdbid');
                        fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${imdbID}`)
                            .then(response => response.json())
                            .then(movie => {
                                const modalContent = `
                                    <div class="modal">
                                        <div class="modal-content">
                                            <span class="close-button">&times;</span>
                                            <h2>${movie.Title}</h2>
                                            <img src="${movie.Poster}" alt="${movie.Title}">
                                            <p><strong>Release Year:</strong> ${movie.Year}</p>
                                            <p><strong>Director:</strong> ${movie.Director}</p>
                                            <p><strong>Actors:</strong> ${movie.Actors}</p>
                                            <p><strong>Plot:</strong> ${movie.Plot}</p>
                                        </div>
                                    </div>
                                `;
                                document.body.insertAdjacentHTML('beforeend', modalContent);
                                const modal = document.querySelector('.modal');
                                const closeButton = document.querySelector('.close-button');
                                closeButton.addEventListener('click', () => {
                                    modal.remove();
                                });
                            })
                            .catch(error => {
                                console.error('Error fetching movie details:', error);
                            });
                    });
                });
            } else {
                resultsContainer.innerHTML = '<p>No results found</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
