# A. Express.js Tutorial

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

> The syntax used in the second parameter is called a `callback function`

Can modify to use an `arrow function` if desired

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
    // ** Imports path package
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

> NOTE: If we do the `path` method, we'd have to put a route manually for every single page if we wanted like an about or contact page, etc. If you want a static server that serves html css etc., express has functionality that will make a certain folder a `static` folder.

## 6. Setting up a `Static` folder

To setup the static folder, we will need to modify the `app.get` code. Replace with

    // Set static folder
    app.use();

`use` is the method to include middleware. continue using the `static` method: 

    // Set static folder
    app.use(express.static());

Now point to the `public` directory:

    // Set static folder
    app.use(express.static(path.join(__dirname, "public")));

> CODE CHECK: Your server code should look like this:

    // Imports express package
    const express = require("express"); 
    // ** Imports path package
    const path = require("path");

    // Assigns package to variable to use
    const app = express(); 

    // ** Set static folder **
    app.use(express.static(path.join(__dirname, "public")));

    // Assign port
    const PORT = process.env.PORT || 5001;

    // Server will runn
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

> NOTE: Once you have the folder static, you are able to create more html pages and css and use relative links to link them. In node.js, there was much to set up just to get this functionality working on a server, but with express, it's much faster. This is just to create a static server, this is not what you'd use express for.

# B. So What is Express Really USED for?

Express is used to build JSON APIs to connect to a front-end like react. Or render templates where you can insert dynamic data so you can create a dynamic app rather than a static website.

## 1. Creating a REST API with Routing

We'll be creating a simple `REST API`. The following code will not deal with databases, we will use a hardcoded array to understand the tutorial. However it's the same principle when we deal with routes and responses in Express.

So add the following in the code:

    app.get('/api/members');

Now lets add our `request` and `response` parameters in an arrow function.

    app.get('/api/members', (req, res) => {
    });

Now let's create an array of `members`

    const members = [
        {
            id:     1,
            name:   'John Doe',
            email:  'john@gmail.com',
            status: 'active'
        },
        {
            id:     2,
            name:   'Bob Williams',
            email:  'bob@gmail.com',
            status: 'inactive'
        },
        {
            id:     3,
            name:   'Shannon Jackson',
            email:  'shannon@gmail.com',
            status: 'active'
        }
    ]

Now I want to return that `members` array to `JSON`. So in the code: 

    app.get('/api/members', (req, res) => {
        res.json(members);
        });

> NOTE: We don't have to do JSON.stringify even though these are JS objects because the `res.json` will take care of that.

> CODE CHECK Your code should look like this:

    // Imports express package
    const express = require("express"); 
    // Imports path package
    const path = require("path");

    // Assigns package to variable to use
    const app = express(); 

    // ** Members array **
    const members = [
        {
            id:     1,
            name:   'John Doe',
            email:  'john@gmail.com',
            status: 'active'
        },
        {
            id:     2,
            name:   'Bob Williams',
            email:  'bob@gmail.com',
            status: 'inactive'
        },
        {
            id:     3,
            name:   'Shannon Jackson',
            email:  'shannon@gmail.com',
            status: 'active'
        }
    ]

    // ** Gets All Members
    app.get('/api/members', (req, res) => {
        res.json(members);
        });

    // Set static folder
    app.use(express.static(path.join(__dirname, "public")));

    // Assign port
    const PORT = process.env.PORT || 5001;

    // Server will runn
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


Congratulations, we've been able to code a simple REST API. Let's test it out with `postman` or `Nocturnal`

Run the following code as a `GET` response: 

    http://localhost:5001/api/members

> This is only one expression inside an arrow function so there's no need to use curly braces. You can refactor to the following:

    // Gets All Members
    app.get('/api/members', (req, res) => res.json(members));
     
After you clean up, your code should look like this:

    // Imports express package
    const express = require("express"); 
    // Imports path package
    const path = require("path");

    // Assigns package to variable to use
    const app = express(); 

    // Members array
    const members = [
        {
            id:     1,
            name:   'John Doe',
            email:  'john@gmail.com',
            status: 'active'
        },
        {
            id:     2,
            name:   'Bob Williams',
            email:  'bob@gmail.com',
            status: 'inactive'
        },
        {
            id:     3,
            name:   'Shannon Jackson',
            email:  'shannon@gmail.com',
            status: 'active'
        }
    ]

    // ** Gets All Members
     app.get('/api/members', (req, res) => res.json(members));

    // Set static folder
    app.use(express.static(path.join(__dirname, "public")));

    // Assign port
    const PORT = process.env.PORT || 5001;

    // Server will runn
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

### i. Let's Refactor

First, we'll put the array inside a file called `"Members.js"` because it is essentially our model.

    const members = [
        {
            id:     1,
            name:   'John Doe',
            email:  'john@gmail.com',
            status: 'active'
        },
        {
            id:     2,
            name:   'Bob Williams',
            email:  'bob@gmail.com',
            status: 'inactive'
        },
        {
            id:     3,
            name:   'Shannon Jackson',
            email:  'shannon@gmail.com',
            status: 'active'
        }
    ];

 Next we'll add `export` code:

    module.exports = members

Then in `index.js`, add the following code:

    const members = require("./Members");

> We cleaned up the file because we didn't want to clog up the file with a lot of code.

> CODE CHECK

    / Imports express package
    const express = require("express"); 
    // Imports path package
    const path = require("path");
    // ** Imports members model
    const members = require("./Members");

    // Assigns package to variable to use
    const app = express(); 

    // Gets All Members
     app.get('/api/members', (req, res) => res.json(members));

    // Set static folder
    app.use(express.static(path.join(__dirname, "public")));

    // Assign port
    const PORT = process.env.PORT || 5001;

    // Server will run
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


## 2. Using Middleware Functions

We're going to create a simple middle ware function

To get started, let's type the following:

    const logger = (req, res, next)

When you take in middleware, it takes in `request`, `response`, and `next`. And you always want `next` last. So that you can move to the next function in the stack. Let's continue with the arrow function.

    const logger = (req, res, next) => {}

Now let's add console.log ('Hello');

    const logger = (req, res, next) => {
        console.log('Hello');
        next();
    };

Everytime we make a request, the middleware above will run.
So let's log the URL that's hit and the date.
We have access to the URL

    const logger = (req, res, next) => {
        console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
        next();
    };

Go to postman/insomnia and send a request (http://localhost:5000/api/members)
So the console.log should show the link.

Now let's add date/timestamp. run 

    npm i moment

then import

    const moment = require("moment");

## With Middleware we can create our own APIs

This needs to be rewatched and reviewed 30:25 https://www.youtube.com/watch?v=L72fhGm1tfE