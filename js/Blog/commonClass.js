class Movie {
  async getMovieTrends() {
    let response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=bf08c0c07642287cbabe383c02818eb3&language"
    )
      .then((response) => response.json())
      .then((datas) => datas.results.slice(0, 4))
      .then((data) => data.map((movie) => movie.id));

    return response;
  }

  async getDataReviews(index) {
    let moviesID = await this.getMovieTrends();

    let data = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesID[index]}/reviews?api_key=bf08c0c07642287cbabe383c02818eb3&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => data);
    return data;
  }

  async getTitle(index) {
    let data = await this.getDataReviews(index);
    let fetchTitle = await fetch(
      `https://api.themoviedb.org/3/movie/${data.id}?api_key=bf08c0c07642287cbabe383c02818eb3&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => data);
    return fetchTitle;
  }

  async getMarcup(index, element, template) {
    let data = await this.getDataReviews(index);
    let getTitle = await this.getTitle(index);
    let foto = "./images/Neil.png";
    let name = "Grace Noh";
    let description =
      "The thing you’re doing now, reading prose on a screen, is going out of fashion…";
    let title = "In the Future We Will All Live in Star Wars";
    let day = `11 Aug, 2019`;
    let url = "https://www.themoviedb.org/";

    if (data.results.length >= 1) {
      foto = `${data.results[0].author_details.avatar_path.slice(1)}`;
      name = ` ${data.results[0].author}`;
      title = getTitle.original_title;
      description = `${data.results[0].content.slice(0, 150) + "..."}`;
      day = ` ${data.results[0].created_at.slice(0, 10)}`;
      url = `${data.results[0].url}`;
    }

    return element.insertAdjacentHTML(
      "beforeend",
      template(foto, name, title, description, day, url)
    );
  }
}

export default Movie;
