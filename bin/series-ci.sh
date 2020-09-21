#!/bin/bash
curl \
  --header "Authorization: Token ebeb85ba-9108-4295-9377-1e66ad00d58c" \
  --header "Content-Type: application/json" \
  --data "{
    \"value\":\"42 %\",
    \"sha\":\"${TRAVIS_COMMIT}\"
  }" \
  https://seriesci.com/api/freight-trust/webapp/:series/one
