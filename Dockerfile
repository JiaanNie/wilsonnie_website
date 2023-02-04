# get the ubuntu image
FROM ubuntu:latest

# update the continer
RUN apt-get -y update

# install curl and nginx and git

RUN apt-get install -y curl nginx git


# install node 16 distrubtion via curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -

COPY nginx/default.conf /etc/nginx/default.conf
COPY nginx/default2.conf  /etc/nginx/conf.d/default

# install nodejs in the container y flag is just you dont need to answer any prompt when installing apt
RUN apt-get install -y nodejs

#clears the local repository of retrieved package files that are left in /var/cache
RUN apt-get clean -y

# setting up a work dir
WORKDIR /app

# Copy our source code into the container
COPY . .


# install quasar globally

RUN npm install -g @quasar/cli


# installs project dependeinces
RUN npm install

RUN ls

# build quasar project to a SPA for production uses
Run quasar build


# Setting work dir
WORKDIR /var/www/html

#copy everything from the quasar build which is located in /app/dist/spa/* .

RUN cp -r /app/dist/spa/* .

#remove everything in the app folder after the production build copy over to the workdir
RUN rm -rf /app

EXPOSE 80
EXPOSE 443


CMD ["nginx", "-g", "daemon off;"]
