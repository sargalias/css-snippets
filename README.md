# 100 Days CSS

My attempt at recreating some of the [100 Days CSS](https://100dayscss.com) frames, with some extra features.

## Commands

`npm start` - Runs the project on a local server for development.

`npm run build` - Builds the project for uploading to a server.

## Features

- **Responsiveness**: I tried to make these as responsive as possible. For some of them, if you manually change the size of the frame the image should resize accordingly. E.g. with "095 - Pig drawing" and 072 - Animated rings. Unfortunately this wasn't possible for things which required absolute sizes, such as font.

- **Custom properties and / or Sass variables for easy changes to each frame**. For example with 097 person, you can change the value of the "person-height" variable and the person will change to that height while still being centered in the frame.

- **CSS animations pause when they're not visible on screen.** This was essential because mobile performance greatly deteriorated as I built more of these.

- **Pre-rendered with Gatsby.**

- **Lazy loading of CSS frames further down the page.**
