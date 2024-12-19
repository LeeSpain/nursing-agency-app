import shutil

# Adjust the source path relative to the current directory
source_path = '../image.png'  # Adjust this path based on the actual location of your image file

# Destination path where you want to save the PNG file
destination_path = './saved_image.png'  # This will save the image in the current directory (src)

# Copy the PNG file to the destination
shutil.copy(source_path, destination_path)

print(f"Image saved to {destination_path}")