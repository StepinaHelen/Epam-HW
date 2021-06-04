function templateVideo(foto, name, title, description, day, url) {
  let marcup = `<div class="blog-list-item">
    <div class="blog-list-container">
              <video class="blog-list-image" poster="./images/blog1.png">
                Тег video не поддерживается вашим браузером.
                <a href="video/duel.mp4">Скачайте видео</a>.
              </video>
<button class="blog-card-button">
              <svg class="blog-card-svg">
                <use href="./images/symbol-defs.svg#icon-play"></use>
              </svg>
              </button>
            </div>

            <div class="blog-card">
              <div class="blog-pazzle">
                <div class="blog-pazzle-square">
                  <svg class="blog-pazzle-svg">
                    <use href="./images/symbol-defs.svg#icon-playmini"></use>
                  </svg>
                </div>
              </div>
              <div class="blog-card-description">
                <img
                  class="blog-card-image" width="54px"
                  src=${foto}
                  alt=${name} />
                <div>
                  <p class="blog-personal-name m-0">${name}</p>
                  <div class="blog-card-data">
                    <ul class="post-list post-list-item post-list--blog">
                      <li>${day}</li>
                      <li class="post-item">7 min read</li>
                      <li class="post-item">
                        <svg class="post-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-comment"
                          ></use>
                        </svg>
                        19
                      </li>
                      </ul>
                    <ul class="stars d-flex">
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-1"
                          ></use>
                        </svg>
                      </li>
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-1"
                          ></use>
                        </svg>
                      </li>
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use href="./images/symbol-defs.svg#icon-Group"></use>
                        </svg>
                      </li>
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-2"
                          ></use>
                        </svg>
                      </li>
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-2"
                          ></use>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h2 class="blog-card-title">
               ${title}
              </h2>
              <p class="card-description-text">
               ${description}
              </p>
              <form method="LINK"  action='${url}' target="_blank" >
              <button class="button-common button-secondary">Read more</button>
               </form>
            </div>
          </div>`;
  return marcup;
}

function template(foto, name, title, description, day, url) {
  let marcup = `<div class="blog-list-item">
    <img class="blog-list-image" src="./images/blog2.png" alt="table" />

            <div class="blog-card">
              <div class="blog-pazzle">
                <div class="blog-pazzle-square">
                  <svg class="blog-pazzle-svg">
                    <use href="./images/symbol-defs.svg#icon-melody"></use>
                  </svg>
                </div>
              </div>
              <div class="blog-card-description">
                <img
                  class="blog-card-image" width="54px"
                  src=${foto}
                  alt=${name}
                />
                <div>
                  <p class="blog-personal-name m-0">${name}</p>
                  <div class="blog-card-data">
                    <ul class="post-list post-list-item post-list--blog">
                      <li>${day}</li>
                      <li class="post-item">12 min read</li>
                      <li class="post-item">
                        <svg class="post-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-comment"
                          ></use>
                        </svg>
                        4
                      </li>
                    </ul>
                    <ul class="stars d-flex">
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-1"
                          ></use>
                        </svg>
                      </li>
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-2"
                          ></use>
                        </svg>
                      </li>
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-2"
                          ></use>
                        </svg>
                      </li>
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-2"
                          ></use>
                        </svg>
                      </li>
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-2"
                          ></use>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h2 class="blog-card-title blog-card-title-second">
                ${title}
              </h2>
              <div class="blog-card-audio-button">
              <audio  src="./images/audio.mp3" controls>
                Тег audio не поддерживается вашим браузером.
                <a href="audio/music.mp3">Скачайте музыку</a>.
              </audio>
              </div>
              <p class="card-description-text">
                 ${description}
              </p>

              <form method="LINK"  action='${url}' target="_blank" >
              <button class="button-common button-secondary">Read more</button>
               </form>
            </div>
          </div>`;
  return marcup;
}

function templateImage(foto, name, title, description, day, url) {
  let marcup = `<div class="blog-list-item">
          <img class="blog-list-image" src="./images/blog3.png" alt="room" />
            <div class="blog-card">
              <div class="blog-pazzle">
                <div class="blog-pazzle-square">
                  <svg class="blog-pazzle-svg">
                    <use href="./images/symbol-defs.svg#icon-picture"></use>
                  </svg>
                </div>
              </div>
              <div class="blog-card-description">
                <img
                  class="blog-card-image" width="54px"
                  src=${foto}
                  alt=${name} />
                <div>
                  <p class="blog-personal-name m-0">${name}</p>
                  <div class="blog-card-data">
                    <ul class="post-list post-list-item post-list--blog">
                      <li>${day}</li>
                      <li class="post-item">7 min read</li>
                      <li class="post-item">
                         <svg class="post-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-comment"
                          ></use>
                        </svg>
                        19
                      </li>
                      </ul>
                    <ul class="stars d-flex">
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-1"
                          ></use>
                        </svg>
                      </li>
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-1"
                          ></use>
                        </svg>
                      </li>
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use href="./images/symbol-defs.svg#icon-Group"></use>
                        </svg>
                      </li>
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-2"
                          ></use>
                        </svg>
                      </li>
                      <li class="stars-item">
                        <svg class="stars-svg">
                          <use
                            href="./images/symbol-defs.svg#icon-Star-2"
                          ></use>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h2 class="blog-card-title">
               ${title}
              </h2>
              <p class="card-description-text">
               ${description}
              </p>
              <form method="LINK"  action='${url}' target="_blank" >
              <button class="button-common button-secondary">Read more</button>
               </form>
            </div>
          </div>`;
  return marcup;
}

function templateText(foto, name, title, description, day, url) {
  let marcup = `<div>
  
          <div class="blog-pazzle">
            <div class="blog-pazzle-square">
              <svg class="blog-pazzle-svg">
                <use href="./images/symbol-defs.svg#icon-text"></use>
              </svg>
            </div>
          </div>
          <div class="blog-card-description">
            <img class="blog-card-image" src=${foto} alt=${name} />
            <div>
              <p class="blog-personal-name m-0">${name}</p>
              <div class="blog-card-data">
                <ul class="post-list post-list-item post-list--blog">
                  <li>${day}</li>
                  <li class="post-item">17 min read</li>
                  <li class="post-item">
                    <svg class="post-svg">
                      <use href="./images/symbol-defs.svg#icon-comment"></use>
                    </svg>
                    77
                  </li>
                </ul>
                <ul class="stars d-flex">
                  <li class="stars-item">
                    <svg class="stars-svg">
                      <use href="./images/symbol-defs.svg#icon-Star-1"></use>
                    </svg>
                  </li>
                  <li class="stars-item">
                    <svg class="stars-svg">
                      <use href="./images/symbol-defs.svg#icon-Star-1"></use>
                    </svg>
                  </li>
                  <li class="stars-item">
                    <svg class="stars-svg">
                      <use href="./images/symbol-defs.svg#icon-Star-1"></use>
                    </svg>
                  </li>
                  <li class="stars-item">
                    <svg class="stars-svg">
                      <use href="./images/symbol-defs.svg#icon-Star-2"></use>
                    </svg>
                  </li>
                  <li class="stars-item">
                    <svg class="stars-svg">
                      <use href="./images/symbol-defs.svg#icon-Star-2"></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h2 class="blog-card-title">
            ${title}
          </h2>
          <p class="card-description-text">
             ${description}
          </p>
          <form method="LINK"  action='${url}' target="_blank" >
              <button class="button-common button-secondary">Read more</button>
               </form>
          </div>`;
  return marcup;
}
export default { template, templateVideo, templateImage, templateText };
