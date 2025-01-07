#!/bin/bash

function mkdir_target {
  if [ -d $TARGET_DIR ]; then
    rm -fr "$TARGET_DIR"
  fi
  mkdir $TARGET_DIR
}

function delete_target {
  rm -fr $TARGET_DIR
}
