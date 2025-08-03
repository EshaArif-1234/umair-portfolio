#!/bin/bash

# Create assets directory structure
mkdir -p public/assets/clients
mkdir -p public/assets/models

# Create placeholder files for client logos
touch public/assets/clients/healthcarepro.png
touch public/assets/clients/medsolutions.png
touch public/assets/clients/careplus.png
touch public/assets/clients/wellnessinc.png

# Create placeholder file for 3D model
touch public/assets/models/medical-icon.glb

 echo "Asset directories and placeholder files created successfully."
