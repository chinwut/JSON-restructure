# JSON Restructure and Github Search API


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Features

- Json restructure by parent and children level.
- Search repository on github.

## Tech

- [HapiJS] 
- [Ejs] 

## Installation CLI

Install the dependencies and devDependencies and start the server.

```sh
$ npm i
```
## Start Node server

```sh
$ npm start
```
Server listen at :
```
 http://localhost:9000
```
Api swagger
```
http://localhost:9000/swagger
```
## Start Node server with developmode (nodemon)

```sh
$ npm start:service:dev
```

## Run unittest with coverage report

```sh
$ npm test
```
```
coverage report after run unittest at :  ~/JSON-restructure/test-report.html
```

## Run with Docker 

```sh
$ docker-compose up --build
```

## Stop Docker

```sh
$ docker-compose down
```