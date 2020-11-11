#!/usr/bin/env bash

if [ ! "$1" ]; then
  echo "Usage: publish.sh <version>       See 'npm version --help' for version conventions"
  exit 1
fi

if [ -z "$REGISTRY_URL" ]; then
  REGISTRY_URL=$(npm config get registry)
fi

PACKAGE_NAME=$(node -p "require('./package.json').name")

BOLD='\033[1m'
NORMAL='\033[00m'

echo -e "🚀 Publishing ${BOLD}$PACKAGE_NAME${NORMAL} to $REGISTRY_URL\n"

if [ $REGISTRY_URL == 'https://registry.npmjs.org/' ]; then
  echo "❌ npmjs registry is not supported at the moment"
  exit 1
fi

echo "⏫ Bumping $1 version ..."
npm version --no-git-tag-version "$1" || exit 1

echo "📡 Publishing ..."
npm publish --registry $REGISTRY_URL || exit 1

echo "✅ DONE"