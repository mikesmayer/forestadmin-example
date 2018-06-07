# Forest with Express - MongoDB Example

Your're in the good place if you have an application (in any language) that have a MongoDB database and you would like to have a Forest admin interface built on top.

- [Requirements](#requirements)
- [Installation](#installation)
- [How it works](#how-it-works)
- [Need help](#need-help)

![Screenshot](screenshot.png?raw=true "Screenshot")

## Requirements
- Git
- Nodejs & NPM
- MongoDB client
- Docker & Docker Compose

## Installation

#### 1. Clone this repository
```
$ git clone https://github.com/ForestAdmin/forest-examples.git
$ cd forest-examples/examples/mongodb-database/simple/
```

#### 2. Create the mongodb database
```
$ docker-compose up
```

#### 3. Restore the database dump
```
$ mongoimport --db restaurants --drop --file ../../../sample-data/dump-mongodb/restaurants.json
```

#### 4. Install NPM packages

```
$ npm install
```

#### 5. Export the required environment variables
Open the file `.env` and set the following environment variables:

```
DATABASE_URL=mongodb://localhost/restaurants
FOREST_AUTH_SECRET=
FOREST_ENV_SECRET=
```

`FOREST_ENV_SECRET` and `FOREST_AUTH_SECRET` values will be set in the next step.

#### 6. Create your Forest Admin Account
Create your account at [https://www.forestadmin.com](https://www.forestadmin.com) and select the stack "Express/Mongoose".

**NOTICE**: The *forest-express-mongoose* and the code snippet steps are already done for you in this example.

Set the correct `FOREST_ENV_SECRET` and `FOREST_AUTH_SECRET` in the `.env` file.

#### 7. Launch your admin

```
$ node bin/www
```

#### 8. You're good to go

Finally, click *Next*, choose a project name and finalize your Forest account creation.

## How it works

Most of the code is simply based on the [Sequelize generator repository](https://github.com/expressjs/generator) and [Mongoose models](http://mongoosejs.com/).

#### Directory: `models/`

This directory contains all your [Mongoose models](http://mongoosejs.com) that mapped your MongoDB collections.

#### File: `app.js`

The most important part in this file is where we configure the `forest-express-mongoose` Express middleware. This is where your Admin API is automatically generated.

## Need help?

Simply post an issue in this repository.


