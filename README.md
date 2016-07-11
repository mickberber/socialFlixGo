#SocialFlixGo

This is a project using React, Webpack and a Go server

make sure you install go https://golang.org/doc/install

To set GOPATH:

From root directory
1. Create a directory for go packages:
  `$ mkdir gopackages`
  `$ mkdir gopackages/src/`

2. Set GOPATH from command line
  `$ export GOPATH=$HOME/gopackages/`

3. Change into src directory
  `$ cd gopackages/src/`

3. Clone Gorilla Websocket Repository:
  `$ git clone https://github.com/gorilla/websocket.git`




To get it running:

`git clone https://github.com/mickberber/socialFlixGo.git`

`cd socialFlixGo`

`npm install`

`webpack --watch --progress --colors`

`go run goServer/server.js`


#RESOURCES:

Websockets && Golang Primer
https://www.youtube.com/watch?v=CIh8qN7LO8M
