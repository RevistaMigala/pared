#!/bin/bash

export MONGODB_FOLDER=mongobongo
export MONGODB_DATA_FOLDER=mongo-data

echo $MONGODB_FOLDER
echo $MONGODB_FOLDER
echo "Starting MongoDB database"

sudo /Users/$USER/$MONGODB_FOLDER/bin/mongod --dbpath=/Users/$USER/$MONGODB_DATA_FOLDER
