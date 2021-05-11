# Favourite images

## Overview

A simple infinite-scroll web application that allows the user to browse images and favourite them. [Flickr API](https://www.flickr.com/services/api/flickr.photos.getRecent.html) is used for data retrieval. Code is written in vanilla JavaScript.

## Features

- Third-party API is used for data retrieval.
- Infinite scroll (additional data is loaded when a user scrolls down the screen).
- Responsive design with three breakpoints (mobile, tablet, desktop):
  ![image](https://user-images.githubusercontent.com/38878597/117756805-8634ad80-b227-11eb-8c80-3fc672e1a909.png)
  ![image](https://user-images.githubusercontent.com/38878597/117756847-951b6000-b227-11eb-9dec-d6d1852de217.png)
  ![image](https://user-images.githubusercontent.com/38878597/117756883-a8c6c680-b227-11eb-8d7b-6c260f17897b.png)
- Hover over an image, shows its title, owner, a button to favourite/unfavourite image:
  ![image](https://user-images.githubusercontent.com/38878597/117756908-b5e3b580-b227-11eb-9bd0-2960d37ae740.png)
- Possibility to favourite an image. Favourited images are saved in localStorage and not lost after a page reload. If the image is unfavourited, it is deleted from localStorage.

## Features and notes to improve/fix

- Implement image filtering: option to see all images or favourite ones.
