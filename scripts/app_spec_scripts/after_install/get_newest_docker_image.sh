#!/bin/sh
python3  /home/ubuntu/app/scripts/parse_image_definitions.py
sudo docker pull "$(cat /home/ubuntu/app/temp.txt)"
