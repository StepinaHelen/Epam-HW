import template from "./template.js";
let listRef = document.querySelectorAll(".blog-list-item-container");

let foto = "./images/Neil.png";
let name = "Grace Noh";
let description =
  "The thing you’re doing now, reading prose on a screen, is going out of fashion. The defining narrative of our online moment concerns the decline of text, and the exploding reach and power of audio and video …";
let title = "In the Future We Will All Live in Star Wars";
let day = `11 Aug, 2019`;
let video, poster;

fetch(
  "https://api.themoviedb.org/3/trending/movie/week?api_key=bf08c0c07642287cbabe383c02818eb3&language"
)
  .then((response) => response.json())
  .then((datas) => datas.results.slice(0, 4))
  .then((data) => data.map((movie) => movie.id))
  .then((movie) => {
    listRef.forEach((item, index) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movie[index]}/reviews?api_key=bf08c0c07642287cbabe383c02818eb3&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          if (item.classList.contains("blog-list-item--audio")) {
            getVideoData(data, item);
          }
          if (item.classList.contains("blog-list-item--melody")) {
            getAudioData(data, item);
          }

          if (item.classList.contains("blog-list-item--picture")) {
            getImageData(data, item);
          }
          if (item.classList.contains("blog-card--text")) {
            getTextData(data, item);
          }
        });
    });
    return movie;
  })
  .then((datas) => {
    listRef.forEach((item, index) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${datas[index]}?api_key=bf08c0c07642287cbabe383c02818eb3&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          let title = document.querySelectorAll(".blog-card-title")[index];
          title.textContent = `${data.original_title}`;
        });
    });
  });

function getVideo(data, item) {
  fetch(
    `https://api.themoviedb.org/3/movie/${data}/videos?api_key=bf08c0c07642287cbabe383c02818eb3&language=en-US`
  )
    .then((response) => response.json())
    .then((datas) => {
      return item.insertAdjacentHTML(
        "afterbegin",
        ` <div class="blog-list-container"> <iframe class="blog-list-image"
           width="560px"
           height="379px"
           src='https://www.youtube.com/embed/${datas.results[0].key}'
           title="YouTube video player"
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen
        ></iframe>  </div>`
      );
    });
}

function getPoster(data, item) {
  fetch(
    `https://api.themoviedb.org/3/movie/${data}?api_key=bf08c0c07642287cbabe383c02818eb3&language=en-US`
  )
    .then((response) => response.json())
    .then((datas) => {
      return item.insertAdjacentHTML(
        "afterbegin",
        `<img class="blog-list-image" height="379px" src=https://image.tmdb.org/t/p/original/${datas.backdrop_path} alt="table"/>`
      );
    });
}

function getVideoData(data, item) {
  if (data.results.length === 0) {
    video = "sV6VNNjBkcE";
  }

  if (data.results.length >= 1) {
    foto = `${data.results[0].author_details.avatar_path.slice(1)}`;
    name = ` ${data.results[0].author}`;
    title = `${data.results[0].name}`;
    description = `${data.results[0].content.slice(0, 210) + "..."}`;
    day = ` ${data.results[0].created_at.slice(0, 10)}`;
    video = getVideo(`${data.id}`, item);
  }

  return item.insertAdjacentHTML(
    "beforeend",
    template.templateVideo(foto, name, title, description, day)
  );
}

function getAudioData(data, item) {
  if (data.results.length === 0) {
    poster = "./images/blog2.png";
    item.insertAdjacentHTML(
      "afterbegin",
      `<img class="blog-list-image" src=${poster} alt="table"/>`
    );
  }
  if (data.results.length >= 1) {
    if (data.results[0].author_details.avatar_path === null) {
      foto = "./images/Neil.png";
    } else {
      foto = `${data.results[0].author_details.avatar_path.slice(1)}`;
    }
    name = ` ${data.results[0].author}`;
    title = `${data.results[0].name}`;
    description = data.results[0].content.slice(0, 100) + "...";
    day = ` ${data.results[0].created_at.slice(0, 10)}`;
    poster = getPoster(data.id, item);
  }
  return item.insertAdjacentHTML(
    "beforeend",
    template.template(foto, name, title, description, day)
  );
}

function getImageData(data, item) {
  if (data.results.length === 0) {
    poster = "./images/blog2.png";
    item.insertAdjacentHTML(
      "afterbegin",
      `<img class="blog-list-image" src=${poster} alt="table"/>`
    );
  }
  if (data.results.length >= 1) {
    foto = `https://image.tmdb.org/t/p/original/${data.results[0].author_details.avatar_path.slice(
      1
    )}`;
    name = ` ${data.results[0].author}`;
    title = `${data.results[0].name}`;
    description = `${data.results[0].content.slice(0, 210) + "..."}`;
    day = ` ${data.results[0].created_at.slice(0, 10)}`;
    poster = getPoster(data.id, item);
  }

  return item.insertAdjacentHTML(
    "afterbegin",
    template.templateImage(foto, name, title, description, day)
  );
}

function getTextData(data, item) {
  if (data.results.length >= 1) {
    foto = `${data.results[0].author_details.avatar_path.slice(1)}`;
    name = ` ${data.results[0].author}`;
    title = `${data.results[0].name}`;
    day = ` ${data.results[0].created_at.slice(0, 10)}`;
    description = `${data.results[0].content.slice(0, 210) + "..."}`;
  }

  return item.insertAdjacentHTML(
    "beforeend",
    template.templateText(foto, name, title, description, day)
  );
}
