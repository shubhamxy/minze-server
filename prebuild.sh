#!/usr/bin/env bash

# This script generates keys and .env file from env variables

FIREBASE_JSON_FILE=$APPCENTER_SOURCE_DIRECTORY/src/keys/service-account.json

echo "Creating an empty service-account.json file"
touch $FIREBASE_JSON_FILE

if [ -e "$FIREBASE_JSON_FILE" ]
then
    echo "Updating Google Json"
    echo "$FIREBASE_JSON" > $FIREBASE_JSON_FILE
    sed -i -e 's/\\"/'\"'/g' $FIREBASE_JSON_FILE

    echo "FIREBASE_JSON_FILE content: "
    cat $FIREBASE_JSON_FILE
    echo "Successfuly generated service-account.json"
fi

ENV_WHITELIST=${ENV_WHITELIST:-"^.*$"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n\n" $ENV_WHITELIST
set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" > .env.prod
printf "\n.env created with contents:\n"
cat .env.prod
