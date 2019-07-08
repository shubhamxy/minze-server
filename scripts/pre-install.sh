#!/usr/bin/env bash

# This script generates keys and .env file from env variables

FIREBASE_JSON_FILE=src/keys/service-account.json
if [[ ! -e $FIREBASE_JSON_FILE ]]; then
  echo "Creating an empty service-account.json file"
  touch $FIREBASE_JSON_FILE
  if [ -e "$FIREBASE_JSON_FILE" ]; then
    echo "Updating Google Json"
    echo "$FIREBASE_JSON" >$FIREBASE_JSON_FILE
    sed -i -e 's/\\"/'\"'/g' $FIREBASE_JSON_FILE

    # echo "FIREBASE_JSON_FILE content: "
    # cat $FIREBASE_JSON_FILE
    echo "Successfuly generated service-account.json"
  fi
fi
if [[ ! -e .env.production ]]; then
  touch .env.production
  ENV_WHITELIST=${ENV_WHITELIST:-"^.*$"}
  printf "Creating an .env.production file with the following whitelist:\n"
  printf "%s\n\n" $ENV_WHITELIST
  set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" > .env.production
fi

if [[ ! -e .env.development ]]; then
  touch .env.development
  ENV_WHITELIST=${ENV_WHITELIST:-"^.*$"}
  printf "Creating an .env.test file with the following whitelist:\n"
  printf "%s\n\n" $ENV_WHITELIST
  set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" > .env.development
fi

if [[ ! -e .env.test ]]; then
  touch .env.test
  ENV_WHITELIST=${ENV_WHITELIST:-"^.*$"}
  printf "Creating an .env.test file with the following whitelist:\n"
  printf "%s\n\n" $ENV_WHITELIST
  set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" > .env.test
fi
