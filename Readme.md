# Installation

```
npm i -g @utkarsh1905/node-cli-project

```
- [Link to NPM Package](https://www.npmjs.com/package/@utkarsh1905/node-cli-project)
---

# Inspiration

This CLI project is inspired to create daily developement and collaboration easy. We developers always live in the terminal, so why not create an assistant in the terminal?
Currently, this tool includes chat functionality, but it can be extended to include other features, for example:
- To bootstrap multiple type of projects
- To call and test API's in a user friendly way with various options
- To track on going projects in an organization 
- Add a local storage for user creadentials
- A focus mode to block certain websites/apps on pc

---
 # Commands

 #### `dat joke`
 - It give a random chuck norris joke
 - Use `dat joke -a` to get all joke categories
 - Use `dat joke -j [category]` to get a joke from a specific category

 #### `dat chat -u [username] -r [room-name]`
 - It will start a chat with the user <username> in the room <room-name>
 - If the room is new, the user will be the admin of the room
 - Type `/help` to get all commands in the chat room
 (Heroku server might be sleeping, try with `dat ping`)

 ---

 # Languages/Frameworks
 - Node.js
 - Socket.io
 - chalk
 - axios
 - create-node-cli