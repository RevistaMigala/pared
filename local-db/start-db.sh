#!/bin/bash

export MONGODB_FOLDER=dbb/mongodb-local
export MONGODB_DATA_FOLDER=dbb/mongodb-local-data

echo $MONGODB_FOLDER
echo $MONGODB_DATA_FOLDER
echo "Starting MongoDB database"

sudo /Users/$USER/$MONGODB_FOLDER/bin/mongod --dbpath=/Users/$USER/$MONGODB_DATA_FOLDER
