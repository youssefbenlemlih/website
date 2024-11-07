#!/bin/bash

# directory containing images
input_dir="../public/images"
#input_dir="../public/images/posts/008-react-map/cover.png"

# for each png in the input directory
for img in $( find $input_dir -type f -iname "*.png" );
do
  optipng $img -out ${img%.*}.png
done