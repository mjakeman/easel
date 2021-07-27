# Easel
[![CI Build](https://github.com/mjakeman/easel/actions/workflows/node.js.yml/badge.svg)](https://github.com/mjakeman/easel/actions/workflows/node.js.yml)
![Downloads](https://img.shields.io/github/downloads/mjakeman/easel/total)
![Version](https://img.shields.io/github/manifest-json/v/mjakeman/easel)
![Licence](https://img.shields.io/github/license/mjakeman/easel)


A suite of enhancements for watching lecture recordings at the University of Auckland.

**easel** (ea•sel ē′zəl)
*n.* An upright frame for displaying or supporting something, such as a [Canvas](https://canvas.auckland.ac.nz/).

![Screenshot](img/screenshot.png)

**Note:** This extension simply wraps the existing lecture recording interface. You must be a current student at the University of Auckland in order to use this tool.

## Get the Addon
Currently Easel is only available for Firefox. Chrome and Edge versions are planned - contributions welcome!

<a href="https://github.com/mjakeman/easel/releases/download/v0.2.1/easel-firefox.xpi" target="_blank">
  <img src="img/fx-addon.png" />
</a>

## How to Use
Open the lecture recordings tab on Canvas. If everything is set up correctly, you will see the following button:

![Open in Easel Button](img/screenshot2.png)

Click this and you're done! 

## For Developers
### Obtaining the Source
Clone the repository and install dependencies with `npm`. You will need either node.js 14 or 15 installed for this.

```
# Clone repository
$ git clone https://github.com/mjakeman/easel

# Install dependencies
$ npm install
```

### Development/Debugging
Run concurrently (in two separate terminals at the same time):
```sh
# Terminal 1
$ npm run watch

# Terminal 2
$ web-ext run -s src --no-config-discovery
```

### Building
```sh
$ npm run build
$ web-ext build -s src --no-config-discovery
```
