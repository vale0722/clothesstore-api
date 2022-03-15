# Clothesstore API

## Description

Api in nodejs for electronic commerce LATAM clothing store (company -imaginary- dedicated to the
sale of fashion products).

---

## Requirements

For development, you will only need Node.js and a node global package, installed in your environement.

## Install

    $ git clone https://github.com/vale0722/clothesstore-api.git
    $ cd clothesstore-api
    $ npm install

## Configure app

You must set the environment variables, but first you must run the following command:

    $ cp .env.example .env

### Environment Variables

In the .env file you will find the following variables:

- NODE_ENV=development

- DB_CONNECTION=mysql
- DB_HOST=127.0.0.1
- DB_PORT=3306
- DB_DATABASE=
- DB_USERNAME=
- DB_PASSWORD=

- AWS_ID=
- AWS_SECRET=
- AWS_BUCKET_NAME=

You must enter all of them for the application to work correctly

## Bucket S3

This API requires an AWS s3 bucket for static storage. To create it, after assigning the environment variables:

- AWS_ID=
- AWS_SECRET=
- AWS_BUCKET_NAME=

You must execute the following command:

    $ node src/infrastructure/storage/bucket.js

## Running the API

    $ npm start

## Docs and Demo

Coming soon...

## Additional

Practical project developed in nodejs, using the express framework and sequelize as ORM. Its construction was based on a clean architecture, fully tested with jest.
