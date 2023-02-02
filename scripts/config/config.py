import json
import subprocess

#open the imagedefinition file /home/ubuntu/app/
enviorment_variables = {
  "AWS_DEFAULT_REGION": "ca-central-1",
  "AWS_ACCOUNT_ID": "372197329908",
  "REPOSITORY_URI": "372197329908.dkr.ecr.ca-central-1.amazonaws.com/my-site",
  "IMAGEDEFINITIONURI": ""
}


with open("/home/ubuntu/app/imagedefinitions.json", "r") as image_definitions_file:
  data = json.load(image_definitions_file)
  enviorment_variables["IMAGEDEFINITIONURI"] = data["imageUri"]


for k, v in enviorment_variables.items():
  command=f"export {k}={v}"
  subprocess.run(command.split(), shell=True, capture_output=True)
