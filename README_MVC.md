# I. MVC
@(devNotes)

## A. TLDR

Too Long Don't Read
| Question | Answer |
| :-- | :-- | 
| What is this used for? |   |
| How frequently is it used? |   |
| Jobs related to knowing this? |     |


----
# II. Table of Contents

[TOC]

----

# III. Video Notes

### 1. MVC Handlebars Intro

#### Vocabulary
- `MVC` - stands for Model View Controller, which is an architectural pattern that adheres to the `separation of concerns` principle.
- `model` - stores data and data related logic
- `view` - is in charge of UI/UX concerns, or what a user will see and interact with.
- `controller` - is the interface between Models and Views. It processes requests from the View, uses the Model to manipulate data and sends data to the View to render.
- `template engine` - software that allows us to combine data with a static template to generate dynamic HTML. Reduce the amount of code we have. Most template engines offer the following features:
	- placeholders for data that we wish to include
	- functions
	- conditional rendering and looping
	- text replacement
- benefits of template engine:
	-  help us follow separation of concerns principle and MVC by separating HTML & JavaScript
	-  offer tools that reduce reptition in code
	-  templates are easy to create and maintain
	-  improve SEO and make fewer client-to-server requests.
-  `handlebars.js - template engine` - extension of templating language Mustache
	-  logicless templating language that separates code from the View
	-  compiles templates into a single resource and then returns the HTML after replacing variables with data.
	-  pure rendering engine - no built-in support for event handling, accessing back-end services or making incremental DOM updates.


#### Why are we learning Handlebars.js?
 - gives us a great introduction to template engines since its easy to use and offers tons of functionality. great place to start!
 - prepares us to encounter other languages that have this sort of templating built into them, suchas `return here and add other templating languages`
 - helps us follow separation of concerns and the MVC framework
 - step towards learning to use heavier frameworks like React.js to build single-page applications.



### 3. Handlebars Expressions

### 5. Built-In Helpers

[https://handlebarsjs.com/guide/builtin-helpers.html#each](https://handlebarsjs.com/guide/builtin-helpers.html#each)

### 7. Data Serialization

### 9. Handlebars FE Logic

### 11. Partials

Source [https://handlebarsjs.com/guide/partials.html](https://handlebarsjs.com/guide/partials.html)

## Handlebars are templates

### 13. Custom Helpers

> Folder Structure
	-  config
	- controllers
	- db
	- models
	- public
	- seeds
	- utils
	- views
	- .env
	- package.json
	- server.js

----
> Server.js

	const path = require('path');
	const express = require('express');
	const exphbs = require('express-handlebars');
	
	const routes = require('./controllers');
	const sequelize = require('./config/connection');
	// Import the custom helper methods
	const helpers = require('./utils/helpers');
	
	const app = express();
	const PORT = process.env.PORT || 3001;
	
	// Incorporate the custom helper methods
	const hbs = exphbs.create({ helpers });
	
	app.engine('handlebars', hbs.engine);
	app.set('view engine', 'handlebars');
	
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.static(path.join(__dirname, 'public')));
	
	app.use(routes);
	
	sequelize.sync({ force: false }).then(() => {
	  app.listen(PORT, () => console.log('Now listening'));
	});

Dependencies

    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-handlebars": "^5.2.0",
    "handlebars": "^4.7.6",
    "mysql2": "^2.2.5",
    "sequelize": "^6.3.5"

Script

    "start": "node server.js",
    "seed": "node seeds/index.js"
    
### 15. Sessions

What is a session?
time-based valid / invalid unit

express-session

session will restart whenever your server gets restarted.
amazon will never have their server restart. 

### 17. Cookies

### 19. Middleware

-------

# IV. Notes Summary

## A. Commands
` example command`
This will run a command
## B. Syntax
It would be best to type here 10 of the most common syntax patterns

## C. Refactoring Knowledge
If this knowledge actually refactors something we previously learned, share an example in this format:

*** REFACTOR **
We use to write this in JS
` JS Syntax`

Now we can write it like this
` NEW JS Syntax`

## D. Real-Life Applicaitons
Top 5 uses for this language/programming skill (provide link)
- Application 1:
- Application 2:
- Application 3:
- Application 4:
- Application 5:

## E. Practice Questions
10 questions to help retain the information we just learned.
1. Question
2. Question
3. Question
4. Question
5. Question
6. Question
7. Question
8. Question
9. Question
10. Question

## F. Additional Videos
5 videos related to this topic
- Video
- Video
- Video
- Video
- Video

----

# V. Study Resources (From Student Success Manager)

### A. Server-Side APIs
- [Introduction to server-side APIs](https://www.codenewbie.org/blog)
- [An Illustrated Introduction to APIs](https://medium.com/epfl-extension-school/an-illustrated-introduction-to-apis-10f8000313b9)
- [List of free public APIs](https://github.com/public-apis/public-apis)

### B. The Client-Server Model
- Simple video summary from Fast Tech Skills: Client and Server Model
- Summary of the client-server model from Geeks for Geeks

### C. HTTP Response Codes
- Know your HTTP Status—A Cheat Sheet for HTTP Status Codes
- HTTP Status Cheatsheet
- Shouldn’t We All Have Seamless Micropayments By Now?

### D. JSON
- JSON Crash Course 
- List of free JSON datasets
- Free JSON Generator

### E. Asynchronous JavaScript
- The Fetch API: A Modern Replacement for XMLHttpRequest
- The XHR History Lesson You Never Wanted