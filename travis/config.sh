#!/bin/bash
echo 'Adding key'
gem install travis
travis encrypt $HEROKU_TOKEN --add deploy.api_key
