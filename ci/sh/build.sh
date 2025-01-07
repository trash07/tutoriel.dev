#!/bin/bash

source ci/sh/target.sh

function start_dev_server {
  mkdir_target
  docker compose up --build -d --remove-orphans
}

function stop_dev_server {
  docker compose down
}
