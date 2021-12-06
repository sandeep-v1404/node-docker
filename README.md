![[object Object]](https://socialify.git.ci/sandeep-v1404/node-docker/image?description=1&descriptionEditable=A%20Node.js%20%26%20Express%20app%20with%20a%20Mongo%20%26%20Redis%20database.%20Load%20Balancing%20with%20Nginx%0A&font=Inter&forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Dark)

# Node Docker Basic Template 
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

### Technologies Used

Node.js, Express.js, Docker, Redis, MongoDB, Nginx

### Development Setup

Before setting up the project make sure you have an IDE. 

1. Fork the repository. (Click Top Right in this Page)

2. Clone the repository which you have forked.

```
https://github.com/<YOUR_GITHUB_USERNAME>/node-docker.git
```

3. Go into the directory containing the project.

```sh
cd node-docker
```

4. Make sure you have Node.js Installed and run the below command. This command will spin up the application with required containers from docker-compose.yml & docker-compose.dev.yml files. 

```sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```
5. Run below command to get logs of the Application 

```sh
docker logs <CONTAINER_ID>/<CONTAINER_NAME> -f
```

6. Go to `localhost:3000` to verify the running Application

### Some Useful Commands 

1. To stop the application without removing volumes, run the below command. 

```sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
```

2. To spin up the application again after executing above command, run the below command 

```sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d -V
```

3. To stop the application and also remove the volumes, run the below command. 

```sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
```

4. If any new npm package is added, run the below command.

```sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build -V
```

5. To scale the express application, run the below command by specifing the number.

```sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --scale node-app=<number>
```