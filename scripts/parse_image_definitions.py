import json
image_definitions_uri = ""
print("Reading Image definitions file")
with open("/home/ubuntu/app/imagedefinitions.json", "r") as image_definitions_file:
  data = json.load(image_definitions_file)
  image_definitions_uri = data["imageUri"]

print("writing the uri to a temp file")
with open("/home/ubuntu/app/temp.txt", "w") as temp_file:
  temp_file.write(image_definitions_uri)
print("Finish writing the temp file")
