const searchButton = document.querySelector('#search-movie');

searchButton.addEventListener('click', function () {
    let search = document.querySelector('#find-movie')
    fetch('http://www.omdbapi.com/?apikey=e2d656d2&s=' + search.value)
        .then((response) => response.json())
        .then(response => {
            let hasil = response.Search.map(m => showCard(m));
            document.querySelector('#list-movies').innerHTML = hasil
        })
})

document.querySelector('#list-movies').addEventListener('click', function (ev) {
    const detail = ev.target;
    fetch("http://www.omdbapi.com/?apikey=e2d656d2&i=" + detail.getAttribute('data-i'))
        .then(response => response.json())
        .then((response) => {
            document.querySelector('#detail-movie').innerHTML = showDetail(response)
        })
    $("#modal-detail").modal('show')
});

function showCard(m) {
    return `
    <div class="col-sm-4 my-3">
        <div class="card" style="width: 18rem;">
            <img src="${m.Poster}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary" id="show-detail" data-i="${m.imdbID}">Show Detail</a>
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