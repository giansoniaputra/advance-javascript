const searchButton = document.querySelector('#search-movie');

searchButton.addEventListener('click', async function () {
    try {
        let search = document.querySelector('#find-movie')
        const movies = await getMovies(search.value)
        updateUI(movies)
        document.querySelector('#find-movie').classList.remove('is-invalid')
    } catch (err) {
        document.querySelector('#find-movie').classList.add('is-invalid')
        document.querySelector('.invalid-search').innerHTML = err.message
    }
})

function getMovies(value) {
    return fetch('http://www.omdbapi.com/?apikey=e2d656d2&s=' + value)
        .then((response) => {
            if (response.oke === 401) {
                throw new Error(response.statusText);
            }
            return response.json()
        })
        .then(response => {
            if (response.Response === "False") {
                throw new Error(response.Error);
            }
            return response.Search

        })
}

function updateUI(movie) {
    let hasil = movie.map(m => showCard(m));
    document.querySelector('#list-movies').innerHTML = hasil
}

//Ketika Tombol Detail Di Klik
//Event Binding
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('show-detail')) {
        let modalButton = e.target
        let result = await getDetail(modalButton.dataset.i)
        updateUIModal(result)
        $("#modal-detail").modal('show')
    }
})

function getDetail(detail) {
    return fetch("http://www.omdbapi.com/?apikey=e2d656d2&i=" + detail)
        .then(response => response.json())
        .then((response) => response)
}

function updateUIModal(data) {
    document.querySelector('#detail-movie').innerHTML = showDetail(data)
}

function showCard(m) {
    return `
    <div class="col-sm-4 my-3">
        <div class="card" style="width: 18rem;">
            <img src="${m.Poster}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary show-detail" data-i="${m.imdbID}">Show Detail</a>
            </div>
        </div>
    </div>
    `;
}

function showDetail(response) {
    return `
    <div class="col-sm-4">
        <img src="${response.Poster}" class="img-fluid" alt="...">
        <div class="card-body">
            <h5 class="card-title">${response.Title}</h5>
            <p class="card-text">${response.Plot}</p>
        </div>
    </div>
    <div class="col-sm-8">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Rating: ${response.Rated}</li>
            <li class="list-group-item">Rating: ${response.Released}</li>
            <li class="list-group-item">Rating: ${response.Genre}</li>
            <li class="list-group-item">Rating: ${response.Actors}</li>
            <li class="list-group-item">Rating: ${response.Awards}</li>
        </ul>
    </div>
    `
}