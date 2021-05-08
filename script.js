//-----------------------------global variables-------------------------------

const container = document.querySelector(".container");
let waitForResponse = false; //to prevent double load on infinite scroll
let favourited = [];

//----------------------------fetch data--------------------------------------

const fetchData = async () => {
  waitForResponse = true;

  try {
    const res = await fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ec114db0625f8a03bb2e846a62be60bd&extras=owner_name&per_page=18&format=json&nojsoncallback=1"
    );
    const img = await res.json();
    const images = img.photos.photo;

    images.forEach((photo) => {
      //------------------create new elements in container------------------

      const wrapper = document.createElement("div");
      const picture = document.createElement("img");
      const wrapper_over = document.createElement("div");
      wrapper_over.innerHTML = `<h2>${photo.title.slice(0, 18)}</h2><hr><p>${
        photo.ownername
      }</p><button class="favourite">Favourite</button>`;

      picture.src = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`;
      //console.log(picture.src);  //some pictures repeat, but they have different id's

      //-----------------add new elements to container----------------------

      wrapper.classList.add("wrap");
      wrapper_over.classList.add("img-over");
      wrapper.append(picture, wrapper_over);
      container.append(wrapper);
    });

    document.querySelectorAll(".favourite").forEach((item) => {
      item.addEventListener("click", () => {
        if (item.innerText === "Favourite") {
          //change button favourite/unfavourite according to it's innerText
          item.innerText = "Unfavourite";

          favourited = localStorage.getItem("favourited");
          /*that items saved in localStorage won't be lost after the webpage is refreshed, 
               checks if there is data (then returns it),
               if not, then gives an empty array*/
          favourited = favourited ? JSON.parse(favourited) : [];
          favourited.push(item.parentNode.parentNode.firstChild.src);
          localStorage.setItem("favourited", JSON.stringify(favourited));
        } else {
          item.innerText = "Favourite";

          for (let i = 0; i < favourited.length; i++) {
            if (favourited[i] === item.parentNode.parentNode.firstChild.src) {
              localStorage.clear();
              favourited.splice(i, 1);
              localStorage.setItem("favourited", JSON.stringify(favourited));
            }
          }
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
  waitForResponse = false;
};
fetchData();

//------------------------------infinite scroll-------------------------------

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight > scrollHeight - 5 && !waitForResponse) {
    fetchData();
  }
});
