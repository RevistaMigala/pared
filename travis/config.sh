#!/bin/bash
echo 'Adding key'
echo 'y' | travis encrypt $HEROKU_TOKEN --add deploy.api_key
