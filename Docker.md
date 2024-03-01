# DOCKER - ALL IN ONE
## Docker Basics
* Docker is a platform that enables us to package applications and dependencies into lightweight, portable containers. These containers making easier to build, ship, and run applications.
* Docker uses contenarization technology which allows applications and their dependencies to be isolated from the hosts environment.
* Containers are built from Docker images, which contain everything needed to run an application, including code, libraries, and system tools with their.
#### Container : runnable instance of a Docker image. It encapsulates an application and its dependencies, ensuring consistency and isolation.
#### Registery : repository for Docker images. It stores Docker images, allowing us to share and distribute them. Docker Hub is a public registry, while companies can use private registries for internal use.

#### Docker Networking :  enables communication between containers and external networks. It basically creates virtual networks to connect containers together or to connect containers to the host network.

Step by step examle to make it clear; with two Docker containers: a web server container and a database container, we want the web server container to communicate with the database container over a network.

1. Create a Docker network; creating Docker network named 'my_network';
   
   `docker network create my_network`
2. Run the database container ; run the db_container and attach it to my_network;

   `docker run --name db_contianer --network my_network -d database_image`

   This command creates a database container named db_container using the database_image and attaches it to the my_network network.
3. Run the web server container ; run the web server container (web_container) and again attach it to the my_network network:

   `docker run --name web_container --network my_network -d web_image`

   Similarly, this command creates a web_container using the web_image and attaches it to the my_network.
4. Communication between containers; With both containers attached to the same network, they can communicate with each other using their container names as hostnames.
5. Accessing services from hosts; to access services running in the containers from the host system or external networks, publish ports from the containers to the host using port mapping. For example, if the web server container exposes port 80, you can map it to port 8080 on the host:

   `docker run --name web_container --network my_network -p 8080:80 -d web_image`

   This command maps port 80 in the web server container to port 8080 on the host system, allowing you to access the web server from localhost:8080 on the host.


