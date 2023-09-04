$("#search-movie").on("click", () => {
  let search = $("#find-movie").val();
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=e2d656d2&s=" + search,
    success: (response) => {
      const movies = response.Search;
      const listMovies = movies.map((m) => {
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
      });
      $("#list-movies").html(listMovies);
    },
    error: (response) => {
      log.error(response.responseText);
    },
  });
});

$("#list-movies").on("click", "#show-detail", function () {
  let id = $(this).attr("data-i");
  // console.log(id);
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=e2d656d2&i=" + id,
    success: (response) => {
      // console.log(response);
      let detail = `
      <div class="col-sm-4">
          <img src="${response.Poster}" class="card-img-top" alt="...">
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

      $("#detail-movie").html(detail)
      $("#modal-detail").modal('show');
    },
    error: (response) => {
      log.error(response.responseText);
    },
  });
});
