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

#clears the local repository of retrieved package files that are left in /var/cache
RUN apt-get clean -y


# install quasar globally

RUN npm install -g @quasar/cli


# installs project dependeinces
RUN npm install

# build quasar project to a SPA for production uses
Run quasar build


# Setting work dir
WORKDIR /var/www/html


#copy everything from the quasar build which is located in /app/dist/spa/* .

RUN cp -r /app/dist/spa/* .

#remove everything in the app folder after the production build copy over to the workdir
RUN rm -rf /app

CMD ["nginx", "-g", "daemon off;"]




# clone the project


# build the project




