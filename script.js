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

      picture.src = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`;
      //console.log(picture.src);  //some pictures repeat, but they have different id's

      //-----------------add new elements to container----------------------

      wrapper.append(picture);
      container.append(wrapper);
    });
  } catch (error) {
    console.log(error);
  }
  waitForResponse = false;
};
fetchData();
