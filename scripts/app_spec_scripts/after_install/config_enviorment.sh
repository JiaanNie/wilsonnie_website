#!/bin/bash

source /home/ubuntu/app/scripts/config/config.sh
echo $AWS_DEFAULT_REGION
echo $AWS_ACCOUNT_ID
echo $REPOSITORY_URI

#  login into ecr
echo "Logining into ECR..."
aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $REPOSITORY_URI
