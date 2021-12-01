#!/usr/bin/env bash

if [ -f .env ]; then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

YEAR="${1}"
DAY="$(echo $2 | sed 's/^0*//')"
URL="https://adventofcode.com/${YEAR}/day/${DAY}/input"
DIR="${YEAR}/${DAY}"
FILE="${DIR}/input"

mkdir -p "${YEAR}/${DAY}"
curl "${URL}" -H "cookie: session=${AOC_SESSION_COOKIE}" -o "${FILE}"

