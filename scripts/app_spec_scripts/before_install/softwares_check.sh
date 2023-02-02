#!/bin/sh

sudo apt-get -y update
sudo apt-get -y upgrade

# check if docker exists otherwise install docker
if ! command --version docker
then
    sudo apt-get -y install docker.io

else
  docker --version
fi

# check if python exists otherwise install python
if ! command --version python3
then
    sudo apt-get -y install python
else
  sudo python3 --version
fi

# check if awscli exists otherwise install awscli
if ! command --version aws
then
    sudo apt-get -y install awscli

else
  sudo aws --version
fi

