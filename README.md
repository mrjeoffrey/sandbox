# Express.js Tutorial

## 1. Initializing project

Initialize npm to create a package.json

    npm init -y

Then install express

    npm install express OR npm i express

----

## 2. Setting up server

Now that we have our projected initilized and packages installed, create a server file 

    index.js || app.js || server.js 

### i. Basic structure for server

    // imports express package
    const express = require("express"); 

    // assigns package to variable to use
    const app = express(); 

    // server will run
    app.listen();
    
### ii. Identify a port for testing/deployment

Add a `PORT` variable and assign port number. Use pipes and add `process.env.PORT` for deployment purposes in the future. This will render the deployment link instead of the localhost.

> CODE CHECK the script should look like this **. 


    // Imports express package
    const express = require("express"); 

    // Assigns package to variable to use
    const app = express(); 

    // ** Assign port
    const PORT = process.env.PORT || 5001;

    // Server will run
    app.listen();
    
### iii. Share PORT parameters in app.listen

add the `PORT` in the `first parameter` and a `callback function` in the `second parameter`. New code will look like this: 

    // ** Server will runn
    app.listen(PORT, () => console.log(`Server started on port ${PORT}));

### iv. Run the server

In terminal, run the following code to run the server.

    node index.js

Open up your localhost in the browser with the port number.

    localhost:5001

Few things to note. This is basic syntax for server, but it does not have any routing so the page will display `cannot GET` by default. With this, we can begin creating our routes.

----


## 3. Setup Routes

We will create routes for going to a webpage, which is handled by a `GET` request. The `first parameter` will be a `/` and then a `function` for `second paremeter`. Every route we create will have access to the `req, res` objects.

    // basic syntax for GET Request
    app.get()

Add `parameters`

    app.get("/", function(){});

Add the `response` and `request`

    app.get("/", function(res, req){})

Can modify to use an arrow function if desired

    app.get("/", (req,res) => {})

> CODE CHECK Updated code should look like this **:

    // Imports express package
    const express = require("express"); 

    // Assigns package to variable to use
    const app = express(); 

    // ** Create route
    app.get("/", (req,res) => {})

    // Assign port
    const PORT = process.env.PORT || 5001;

    // Server will runn
    app.listen(PORT, () => console.log(`Server started on port ${PORT}));

----

## 4. `Request` and `Response` Object

We will use the `.send` method on the `response` object

    // Create route
    app.get("/", (req,res) => {
        res.send('Hello World');
    })

This will print Hello world, and actually we can print HTML in this `.send` method

>Let's test this on the server. Actually, the server doesn't automatically refresh, so you will need to kill the server and restart it again in order to work rerun your code.

use ctrl+c in terminal and run node index.js

----

### i. Install `nodemon` package

Use `nodemon` to automatically refresh the server whenever you make changes. The next steps will show you how to setup the package.

Run

    npm i -D nodemon

Go to `package.json`
In scripts

    "start":"node index",
    "dev": "nodemon index"

Now run

    npm run dev

----

## 5. What can we send as a response?

The `response` object has many methods we can send to the server. 
- `send` is one but not used too much
- `json` with `res.json`
- `render` with `res.render` if we have a template engine where it can render an html template and we can place variables inside
    - template examples:
    - PUG (weird syntax, normally we use handlebars or EJS)
- `sendFile` - which points to files

### i. How to use `sendFile` method?

To use the `file` method for your response, you need to import `path` into your server file by typing

    const path = require("path");

> CODE CHECK: With that command, the code should now look like this **:

    // Imports express package
    const express = require("express"); 
    // **Imports file package
    const path = require("path");

    // Assigns package to variable to use
    const app = express(); 

    // Create route
    app.get("/", (req,res) => {})

    // Assign port
    const PORT = process.env.PORT || 5001;

    // Server will runn
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

Once we import `path`, now we modify the res method to 

    res.sendFile();

Inside `res.sendFile()`, we'll use `path.join()`, reference node course to review.

    res.sendFile(path.join());

From here you can use the `__dirname` parameter and identify the `folders` and the `filename` right after like this:

    res.sendFile(path.join(__dirname, "public", "index.html"));

> At this point in the code, we would need to setup the `index.html` file in the `public` folder.

> CODE CHECK: Your server code should look like this:

    // Imports express package
    const express = require("express"); 
    // **Imports path package
    const path = require("path");

    // Assigns package to variable to use
    const app = express(); 

    // ** Create route
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "public", "index.html"));
    });

    // Assign port
    const PORT = process.env.PORT || 5001;

    // Server will runn
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

> NOTE: If we do the `path` method, we'd have to put a route manually for every single page.