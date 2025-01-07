#!/bin/bash
# set -x

source .env
source ci/sh/build.sh

show_help() {
    cat << EOF
Usage: bash scripts.sh [start|stop]

Helps lunch the project in localhost and develop.

    start          Start dev server
    stop           Stop dev server

Note:
Before running the scripts you need to have these tools
  * Docker
  * Docker Compose

Examples:
  bash scripts.sh start
  bash scripts.sh stop
EOF
}

case $1 in
  "start")
    start_dev_server
  ;;
  "stop")
    stop_dev_server
  ;;
  *)
    show_help >&2
    exit 1
  ;;
esac



