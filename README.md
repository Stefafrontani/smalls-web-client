# Smalls - The WEB CLIENT guide


## Description:
The app enables a user to:
- see the top posts listed in [reddit's][https://www.reddit.com/r/redditdev/top.json] api 
- save the posts you like using a custom api *(smalls-be)*
- removing the posts you fav before
- identify your favourite posts in the reddit's list
- see only your fav posts 
- dismiss a post
- refresh the page calling reddit's and custom api again


## Main techs used:
The techs used are:
`react`: as the main tech to build the user interface
`mobx`: as a state management tool 


## Project structure:
  ./public
    -- index.html\ 
    -- robots.txt\
  ./src\
    ./App\
      -- App.js\
      -- App.test.js\
      -- App.scss\
    ./posts\
    ./shared\
    -- index.js\
    -- index.scss\  
    -- normalize.scss\
    -- reset.scss\
    -- setupTests.js\
    -- variable.scss\
  -- gitignore
  -- package.json
  -- package.lock.json
  -- readme.md

- *index.html*
HTML served with all the react / js bundle 

- *robots.txt*
For google indexation purposes - really not neccesary

- *./App*
Main entry to the app components tree.

- *./posts*
The only domain the app will have
The domain will have: 
  *./api*: The services that consumed the reddi'ts and custom apis\
  *./store*: The class that keeps track of the state of the app\
  *./ui*: User interface related components\

.*/shared*\
Some things that is common to used between domains
The shared folder will have:
  *./components*: User interface related components\
  *./constants*\
  *./hooks*: Custom hooks\
  *./icons*: Some images\
  *./utils*\

- *index.js*
Entry point to the app's source code. Wrapper of App.js

- *index.scss*
- *normalize.scss*
- *reset.scss*
- *variable.scss*
Some general classes and rules to used along the whole project
These files includes some reset styles, general styles, variables and mixins

- *setupTests.js*
Some default basic testing configuration.
 
- *gitignore*

- *craco.config.js*
Some config used by the dependency with the same name craco to allow some webpack configs without ejecting the project

- *config.js*
Some general project's settings *(i.e.: aliases for importing)*

- *package.json*
- *package.lock.json*
The files that keep track of the dependency list used in the project

- *readme.md*
Hi there.

## Requirements and Installation:

1) Download and install python and pip:
[node][https://nodejs.org/es/download/]

2) Install all the project dependencies
In the root of the project run *$ npm install pipenv*

## Running the server

On the root of the project run: *$ npm start*
