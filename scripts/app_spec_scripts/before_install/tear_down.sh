#!/bin/sh
sudo docker stop $(sudo docker ps -a -q)
sudo docker system prune -a -f
