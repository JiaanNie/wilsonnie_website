# get the ubuntu image
FROM ubuntu:latest

# update the continer
RUN apt-get update

# install curl and nginx and git

RUN apt-get install curl nginx git

# install node 16 distrubtion via curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -


# install nodejs in the container y flag is just you dont need to answer any prompt when installing apt
RUN apt-get install -y nodejs


# install quasar globally

# clone the project


# build the project




