
  # **Express.js Note Taker** :memo:
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

  ## Table of Contents :books:
   1. [Description](#description)
   2. [Installation](#installation)
   3. [Project Usage](#Project-Usage)
   4. [License Information](#License-Information)
   5. [Contributors](#Project-Contributors)
   6. [Testing Instructions](#Testing-Instructions)
   7. [Further Development](#Further-Development)
   8. [Contact Info](#Questions)
   
  ## Description :clipboard:
  Utilizing Express.js on the backend, this application is designed to save and retrieve note data from a JSON file. A note taker application which allows a small business owner to submit, save and delete notes.

  ## Installation :hammer_and_wrench:	
  The following steps were completed in order to develop this application:
  1) Git repository was created which included the gitignore file (for node_modules and .DS_Store especially) and MIT License.
  2) Npm Init install was carried out to develop the package.json.  NPM packages installed & utilized for this project included the FS module, Express, and UUID.
  3) The Express Server and Initial PORT were they built out, in addition to the middleware necessary for the JSON data to handle the parsing when getting the POST request.
  4) The Express Listener (located at the base of the server.js file) was there constructed (to actually begin the note taker server).
  4) HTML Display Routes - 2 seperate HTML Routes were created using "app.get" to return the index.html and notes.html files.
  5) API (GET) Route as then built to handle the reading of the db.json file (notes written in by the user), and then returning that inputted data as saved notes in JSON format. 
  6) API (POST) Route was then created to save the users' notes and return the data to them (in the saved left column of the application).
  7) API (DELETE) Route was finally constructed which uses the FILTER FS method to go through the user's submitted noted by ID, and then delete accordinagly (based off the trash can visual on the application).

  ## Project Usage :pencil2:
  This project's purpose was to create a tool for any business owner or client, whom wants to keep track of their notes on an ongoing basis, while having them saved with the option to have an ongoing delete functionality option as well.  The project was to be hosted through a app via Heroku, so it could be accessed anywhere, while utilizing backend programming technology.

  ## License Information :ticket:
  The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.

  ## Project Contributors :computer::computer_mouse:		
  Adam Spiegel

  ## Testing Instructions :man_scientist:
  Follow these steps:
  1) Utilizing gitbash or the termianl, the project folder needs to be opened locally and the node server.js call must first be run, to establish the connection to the PORT.
  2) You can copy/paste the URL to go to the local web application to see functionality (pictured below).
  3) Heroku - Follow this link to access the application via the web:

  ## Further Development :man_technologist:	
  * More dry coding
  * Visuals could be cleaner
  
  ## Questions? :raising_hand_man:
  ### Please find my contact information below to reach out! 

  [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:adamspiegel23@gmail.com)  [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AdamSpiegel)  

  