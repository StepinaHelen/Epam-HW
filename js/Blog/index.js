let listRef = document.querySelectorAll(".blog-list-item-container");
import template from "./template.js";
import Movie from "./commonClass.js";

class Video extends Movie {
  async getMarcup(index, element, template) {
    await super.getMarcup(index, element, template);
    let data = await super.getDataReviews(index);
    const buttonRef = document.querySelector(".blog-card-button");
    const videoTemplate = document.querySelector(".blog-list-container");

    buttonRef.addEventListener("click", (e) => {
      if (data.results.length >= 1) {
        fetch(
          `https://api.themoviedb.org/3/movie/${data.id}/videos?api_key=bf08c0c07642287cbabe383c02818eb3&language=en-US`
        )
          .then((response) => response.json())
          .then((datas) => {
            videoTemplate.innerHTML = "";
            return videoTemplate.insertAdjacentHTML(
              "afterbegin",
              ` <div class="blog-list-container"> <iframe class="blog-list-image" 
               width="560px"
               height="379px"
               src='https://www.youtube.com/embed/${datas.results[0].key}?autoplay=1'
               title="YouTube video player"
              frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen
            ></iframe>  </div>`
            );
          });
      } else {
        console.log("You press on the video-button");
      }
    });
  }
}

const video = new Video();
video.getMarcup(0, listRef[0], template.templateVideo);

class Audio extends Movie {
  async getMarcup(index, element, template) {
    await super.getMarcup(index, element, template);
  }
}
const audio = new Audio();
audio.getMarcup(1, listRef[1], template.template);

class Image extends Movie {
  async getMarcup(index, element, template) {
    await super.getMarcup(index, element, template);
  }
}
const image = new Image();
image.getMarcup(2, listRef[2], template.templateImage);

class Text extends Movie {
  async getMarcup(index, element, template) {
    await super.getMarcup(index, element, template);
  }
}

const text = new Text();
text.getMarcup(3, listRef[3], template.templateText);
