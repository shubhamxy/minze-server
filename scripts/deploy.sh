#! /bin/bash
source scripts/common.sh
source .env

################################################################################
# DEPLOY SCRIPT
################################################################################

check_environment(){
  CURRENT_BRANCH=`git rev-parse --abbrev-ref HEAD`

  if [ "$CURRENT_BRANCH" != "$REPO_GIT_BRANCH" ]
  then
    warn "Wrong branch, checkout $REPO_GIT_BRANCH to deploy to $APP_ENV."
  else
    success "Deploying to $APP_ENV."
  fi
}

DEPLOY_TYPE='soft'
while getopts ":e:o:t:d:m:" opt; do
  case $opt in
    e) APP_ENV="$OPTARG"
    ;;
    o) APP_OS="$OPTARG"
    ;;
    t) DEPLOY_TYPE="$OPTARG"
    ;;
    d) DEV=1
    ;;
    \?) echo "❌ ${RED}Invalid option -$OPTARG${NO_COLOR}" >&2
    ;;
  esac
done

[[ -z $(git status -s) ]] || warn 'Please make sure you deploy with no changes or untracked files. You can run *git stash --include-untracked*.'

check_environment $APP_ENV
git push heroku master
success "📦  Deploy succeeded."
