#!/bin/sh
# run the docker image after pulling from the ECR
echo "Listing out images"
sudo docker images

export IMAGE_NAME="$(cat /home/ubuntu/app/temp.txt)"
image_id=sudo docker images -q $IMAGE_NAME

echo current image id is $image_id
echo "Run the new deploy image"
# sudo docker run -d -p 80:80 "$(cat /home/ubuntu/app/temp.txt)"

# sudo docker run --detach --name nginx-proxy --publish 80:80 --publish 443:443 --volume certs:/etc/nginx/certs --volume vhost:/etc/nginx/vhost.d --volume html:/usr/share/nginx/html --volume /var/run/docker.sock:/tmp/docker.sock:ro nginxproxy/nginx-proxy

sudo docker run --detach --name nginx-proxy --publish 80:80 --publish 443:443 --volume certs:/etc/nginx/certs --volume vhost:/etc/nginx/vhost.d --volume html:/usr/share/nginx/html --volume /var/run/docker.sock:/tmp/docker.sock:ro nginxproxy/nginx-proxy
sudo docker run --detach --name nginx-proxy-acme --volumes-from nginx-proxy --volume /var/run/docker.sock:/var/run/docker.sock:ro --volume acme:/etc/acme.sh --env "DEFAULT_EMAIL=wilson.nie13@gmail.com" nginxproxy/acme-companion

sudo docker run --detach --name personal-site --env "VIRTUAL_HOST=www.wilsonnie.ca" --env "LETSENCRYPT_HOST=www.wilsonnie.ca" cfe0f1b29e9a

sudo docker run --detach --name personal-site --env "VIRTUAL_HOST=www.wilsonnie.ca" --env "VIRTUAL_PORT=443" --env "VIRTUAL_PORT=80" --env "LETSENCRYPT_HOST=wilsonnie.ca" --env "LETSENCRYPT_EMAIL=wilson.nie13@gmail.com" grafana/grafana

#remove the temp file
sudo rm /home/ubuntu/app/temp.txt

