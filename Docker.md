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

#### Network Drivers (NDs) ; components that are responsible for managing the networking aspects of containers. There few of them with different uses for various needs. Some common network drivers include Bridge ND, Host ND, Overlay ND,Macvlan ND and None ND, so on..

Each network driver has its own configuration options, performance characteristics, and suitability for different use cases. Docker users can choose the appropriate network driver based on their application requirements, scalability needs, and network infrastructure.

Here are some examples I pick for myself;

**1.Bridge Network Driver**; default network driver used by Docker. It creates an internal network bridge on the host system, allowing containers to communicate with each other and with the host. Bridge networks provide isolation and secure communication between containers on the same Docker daemon.

Example usage;

- Create a bridge network; `docker network create my_bridge_network` 

- Run a container attached to the bridge network; `docker run --name my_container --network my_bridge_network -d nginx`

**2.Overlay Network Driver**; enables communication between containers across multiple Docker hosts or nodes in a Docker Swarm cluster. It creates an overlay network that spans multiple hosts, allowing containers to communicate seamlessly regardless of their physical location.

  Example usage;

  - Create an overlay network; `docker network create --driver overlay my_overlay_network`
  - Run a service attached to the overlay network; `docker service create --name my_service --network my_overlay_network nginx

#### Container Network ; it's a networking infrastructure that allows communication between Docker containers and externaş networks. Container networking enables containers to interact with each other and with external services, facilitating the development of distributed applications and microservices architectures. Here are some of the aspects;

   - Isolation: each container has its own network stack, this isolation ensures that containers cannot interfere with each other's network configurations or communications.

   - Virtual Networks: Docker allows users to create virtual networks to connect containers together or to connect containers to the host network. Virtual networks act as isolated environments, enabling communication between containers within the same network while providing network isolation from external networks.

   - Port Mapping: Docker enables port mapping to expose container ports to the host system or to external networks. Users can specify port mappings when running containers to redirect traffic from specific ports on the host to ports within the container.

   The example above is also an example for container networking!!



