//access files - File Handling

const fileSystem = require("fs/promises");

//create a file

fileSystem.writeFile("First.txt", "Hello World");

//delete file
//fileSystem.unlink("First.txt");

fileSystem.appendFile("First.txt", "\nHello Again!!!");

//create a folder/ directory
//fileSystem.mkdir("Second");

//remove a floder/directory
//fileSystem.rmdir("Second");

//use case i.e. Why are we learning about accessing the file system
//1. CLI (Command Line Interface) Application
//2. logging

//npm init- package.json