// const searchButton = document.querySelector('#search-movie');

// searchButton.addEventListener('click', function () {
//     let search = document.querySelector('#find-movie')
//     fetch('http://www.omdbapi.com/?apikey=e2d656d2&s=' + search.value)
//         .then((response) => response.json())
//         .then(response => {
//             let hasil = response.Search.map(m => showCard(m));
//             document.querySelector('#list-movies').innerHTML = hasil
//             let modalButton = document.querySelectorAll('#show-detail')
//             modalButton.forEach(btn => {
//                 btn.addEventListener('click', function () {
//                     fetch("http://www.omdbapi.com/?apikey=e2d656d2&i=" + this.dataset.i)
//                         .then(response => response.json())
//                         .then((response) => {
//                             document.querySelector('#detail-movie').innerHTML = showDetail(response)
//                         })
//                     $("#modal-detail").modal('show')
//                 });
//             })
//         })
// })


const searchButton = document.querySelector('#search-movie');

searchButton.addEventListener('click', async function () {
    let search = document.querySelector('#find-movie')
    const movies = await getMovies(search.value)
    // console.log(movies);
    updateUI(movies)
    // const detail = await getDetail(movies.imdbID)
})

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


function getMovies(value) {
    return fetch('http://www.omdbapi.com/?apikey=e2d656d2&s=' + value)
        .then((response) => response.json())
        .then(response => response.Search)
}

function updateUI(movie) {
    let hasil = movie.map(m => showCard(m));
    document.querySelector('#list-movies').innerHTML = hasil
}

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