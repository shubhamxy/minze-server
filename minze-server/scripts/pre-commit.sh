#!/usr/bin/env bash

################################################################################
# PRE-COMMIT HOOK SCRIPT
################################################################################
################################################################################
# SECRETS FOR SIGNING AND OTHER THINGS
# symmetric cipher is used to encrypt the secrets.
# APP_SECRET_PASSPHRASE must be set in order to decrypt



while getopts ":e:p:" opt; do
  case $opt in
    e) APP_ENV="$OPTARG"
    ;;
    p) APP_SECRET_PASSPHRASE="$OPTARG"
    ;;
    \?) echo "❌ ${RED}Invalid option -$OPTARG${NO_COLOR}" >&2
    ;;
  esac
done

source scripts/common.sh
################################################################################
./scripts/secrets.sh -m pack -e ${APP_ENV} -p ${APP_SECRET_PASSPHRASE}
################################################################################

echo -e "${YELLOW}- - - - -"
echo -e "↪pre-commit script 🤖"
echo -e "- - - - -${NO_COLOR}"
echo -e "CURRENT APP_ENV: ${YELLOW}$APP_ENV${NO_COLOR}"
echo -e "Adding: encrypted secrets to git"
git add secrets
success "pre-commit succeed 📦"
