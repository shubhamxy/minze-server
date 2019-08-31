#! /bin/bash
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


while getopts ":e:d:m:" opt; do
  case $opt in
    e) APP_ENV="$OPTARG"
    ;;
    d) DEV=1
    ;;
    \?) echo "❌ ${RED}Invalid option -$OPTARG${NO_COLOR}" >&2
    ;;
  esac
done

source scripts/common.sh


# [[ -z $(git status -s) ]] || warn 'Please make sure you deploy with no changes or untracked files. You can run *git stash --include-untracked*.'

# check_environment $APP_ENV
rm -rf build
mkdir -p build build/public
cp -a packages/minze-server/build/. build
cp -a packages/minze-web/build/. build/public
cp -a packages/minze-server/.env . 2>/dev/null || :

source .env
success "📦  Build and copy succeeded."
