# Installation

```
npm i -g @utkarsh1905/node-cli-project@latest

```
- [Link to NPM Package](https://www.npmjs.com/package/@utkarsh1905/node-cli-project)
---

# Inspiration

This CLI project is inspired to create daily developement and collaboration easy. We developers always live in the terminal, so why not create an assistant in the terminal?
Currently, this tool includes chat functionality, but it can be extended to include other features, for example:

- To bootstrap multiple type of projects - [functionality done]
- To call and test API's in a user friendly way with various options
- To track on going projects in an organization
- Add a local storage for user creadentials
- A focus mode to block certain websites/apps on pc

---
 # Commands

#### `dat help`
- It will list out all commands and relevant flags to get started.

 #### `dat joke`
 - It give a random chuck norris joke
 - Use `dat joke -a` to get all joke categories
 - Use `dat joke -j [category]` to get a joke from a specific category

 #### `dat chat -u [username] -r [room-name]`
 - It will start a chat with the user <username> in the room <room-name>
 - If the room is new, the user will be the admin of the room
 - Type `/help` to get all commands in the chat room
 (Heroku server might be sleeping, try with `dat ping`)

#### `dat generator`
 - It will bootstrap a new project 
 - It will create a new directory with all files

 ---

 # Languages/Frameworks
 - Node.js
 - Socket.io
 - chalk
 - axios
 - inquirer
 - create-node-cli

 # Credits
- This projects uses [Chuck Norris Jokes API](https://api.chucknorris.io/)
- This project was bootstrapped with [Create Node CLI](https://www.npmjs.com/package/create-node-cli) tool.

 # License
 - MIT

 # Author
 - Utkarsh Tripathi
 - [Github](https://github.com/utkarsh-1905)
 - [Linkedin](https://www.linkedin.com/in/utkarsh-tripathi-80a0ab192/)