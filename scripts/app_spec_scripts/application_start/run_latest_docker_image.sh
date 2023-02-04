#!/bin/sh
# run the docker image after pulling from the ECR
echo "Listing out images"
sudo docker images

export IMAGE_NAME="$(cat /home/ubuntu/app/temp.txt)"
sudo docker images -q $IMAGE_NAME > /home/ubuntu/app/image_id.txt
echo current image id is "$(cat /home/ubuntu/app/image_id.txt)"

export image_id="$(cat /home/ubuntu/app/image_id.txt)"
echo "Run the new deploy image"
# sudo docker run -d -p 80:80 "$(cat /home/ubuntu/app/temp.txt)"

# sudo docker run --detach --name nginx-proxy --publish 80:80 --publish 443:443 --volume certs:/etc/nginx/certs --volume vhost:/etc/nginx/vhost.d --volume html:/usr/share/nginx/html --volume /var/run/docker.sock:/tmp/docker.sock:ro nginxproxy/nginx-proxy

sudo docker run --detach --name nginx-proxy --publish 80:80 --publish 443:443 --volume certs:/etc/nginx/certs --volume vhost:/etc/nginx/vhost.d --volume html:/usr/share/nginx/html --volume /var/run/docker.sock:/tmp/docker.sock:ro nginxproxy/nginx-proxy
sudo docker run --detach --name nginx-proxy-acme --volumes-from nginx-proxy --volume /var/run/docker.sock:/var/run/docker.sock:ro --volume acme:/etc/acme.sh --env "DEFAULT_EMAIL=wilson.nie13@gmail.com" nginxproxy/acme-companion

sudo docker run --detach --name personal-site --env "VIRTUAL_HOST=wilsonnie.ca" --env "LETSENCRYPT_HOST=wilsonnie.ca" de7d28c8f8b4

#remove the temp file
sudo rm /home/ubuntu/app/temp.txt

