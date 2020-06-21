#!/bin/bash
echo 'Adding key'
travis encrypt $HEROKU_TOKEN --add deploy.api_key
