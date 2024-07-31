# p5-tone-ts-starter

A quick and easy way to get up and running with a modern p5js project using typescript and tone.js in instance mode. I
spent quite a bit of time figuring this out, so I hope this helps someone.

Unfortunately, p5/sound does not appear to play nicely with instance mode, and instead expects you to import everything
into the global scope, so I switched to tone.js to get around this limitation. At build, your typescript file will be
transpiled and bundled into a single javascript file, which is referenced from index.html.

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` and click the link.
4. You should see a black canvas with a button. Press the button to hear the chime.

## Development

1. In your console, type `sudo rm -rf -f ./git` to remove the git history.
2. Enter `git init` to create a new git repository.
3. Edit package.json and readme.md to reflect your project.
4. Have fun.

## Building

1. Run `npm run build` to build the project. The output will be in the `dist/` directory.

### A Note on Typescript

A native typescript build check step is not included in this project. I have found so far that the built-in language
service in my IDE (Webstorm) has been sufficient to catch any errors. If you would like to add a build check step, you
will need to add this to the package.json file.

---
If you enjoy this repo, please star or fork it.