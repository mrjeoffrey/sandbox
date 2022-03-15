# 1 ORM

## Use Sequelize Setup && DotEnv

initialize a package.json

    npm install -y

add sequelize, mysql2, and dotenv

    npm i sequelize
    npm i mysql2
    npm i dotenv

now add a .env file

Also there should be a folder like `config` that has a way to route `connection.js`. This by default will have variables to input confidential information. This is a NONO to fill out if you were to upload to GITHUB

So what you want to do is create a `.env` file. Add the following code to the `.env` file

    DB_NAME=library_db
    DB_USER=root
    DB_PASSWORD=yourpassword

Then you want to 

## Now Let's Use Models

run

    npm install

look at .env file and update password

Table same as sequelize model, primary key

Books.js

    book_id: {
        type: DataTypes.INTERGER,
        primaryKey:true,
        autoIncrement:true
    }

now run 

    npm start

subtle thing. mysql table with same name as Sequlize model

    freezeTableName: true,

There's a lot of subtle thing you can do with sequelize

## Let's CREATE - READ

    npm install
    npm start

Creates a table 
Now we can access via insomnia to POST

    Book.create

    POST JSON
    {
        "title": "Don't Make Me Think",
        "author" : "Steve Krug"

    }
    
Let's create multiple books

    Book.bulkCreate


## Let's UPDATE - DELETE

## Let's ASYNC - AWAIT