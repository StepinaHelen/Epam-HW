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

class Audio extends Movie {
  async getMarcup(index, element, template) {
    await super.getMarcup(index, element, template);
  }
}

class Image extends Movie {
  async getMarcup(index, element, template) {
    await super.getMarcup(index, element, template);
  }
}

class Text extends Movie {
  async getMarcup(index, element, template) {
    await super.getMarcup(index, element, template);
  }
}

const video = new Video();
video.getMarcup(0, listRef[0], template.templateVideo);

const audio = new Audio();
audio.getMarcup(1, listRef[1], template.template);

const image = new Image();
image.getMarcup(2, listRef[2], template.templateImage);

const text = new Text();
text.getMarcup(3, listRef[3], template.templateText);

const inputRef = document.querySelector(".input-field-author");
const inputRefTitle = document.querySelector(".input-field");

inputRefTitle.addEventListener("input", (e) => {
  const titleRef = document.querySelectorAll(".blog-card-title ");
  let filter = e.target.value.toLowerCase();
  localStorage.setItem("filter", filter);
  let sum = 0;

  titleRef.forEach((item, index) => {
    if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
      listRef[index].style.display = "";
    } else if (item.innerHTML.toLowerCase().indexOf(filter) === -1) {
      listRef[index].style.display = "none";
      sum += 1;
    }
  });

  if (sum === titleRef.length) {
    showNotification({
      top: 30,
      right: 30,
      html: "Please enter a valid value!",
    });
  }
});

// inputRef.addEventListener("input", (e) => {
//   const authortsRef = document.querySelectorAll(".blog-personal-name ");
//   let filter = e.target.value.toLowerCase();
//   let sum = 0;

//   authortsRef.forEach((item, index) => {
//     if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
//       listRef[index].style.display = "";
//     } else if (item.innerHTML.toLowerCase().indexOf(filter) === -1) {
//       listRef[index].style.display = "none";
//       sum += 1;
//     }
//   });

//   if (sum === authortsRef.length) {
//     showNotification({
//       top: 30,
//       right: 30,
//       html: "Please enter a valid value!",
//     });
//   }
// });

function showNotification({ top = 0, right = 0, html }) {
  let notification = document.createElement("div");

  notification.className = "notification";

  notification.style.top = top + "px";
  notification.style.right = right + "px";

  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 3000);
}
