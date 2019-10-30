#! /bin/bash
source scripts/common.sh

rm -rf build
mkdir -p build build/public
cp -a packages/minze-server/build/. build
cp -a packages/minze-web/build/. build/public

success "📦  Build and copy succeeded."
