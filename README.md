# NestJS Todo List task

An REST API based todo list application with NestJS and Auth System.

## Installation

```bash
   $ npm install
```

## Set Environment for secret key JWT

```bash
   $ cp .env.example .env
```

## Running the app
### Docker

There is a `docker-compose.yml` file for starting MySQL with Docker.

`$ docker-compose up`

After running, you can stop the Docker container with

`$ docker-compose down`

## Open http://localhost:3000/swagger-api/ to test application