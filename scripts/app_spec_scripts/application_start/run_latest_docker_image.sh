#!/bin/sh
# run the docker image after pulling from the ECR
echo "Listing out images"
sudo docker images
echo "Run the new deploy image"
sudo docker run -d -p 80:80 "$(cat /home/ubuntu/app/temp.txt)"

# remove the temp file
sudo rm /home/ubuntu/app/temp.txt

