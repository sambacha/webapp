#!/bin/sh
# git update-index --chmod=+x env-entrypoint.sh
echo "==> Injecting Global ENV Settings..."
echo -ne "GATSBY_TELEMETRY_DISABLED=1" >> .env
echo -ne "NPM_CONFIG_LOGLEVEL=OFF" >> .env 
echo -ne "NPM_CONFIG_PROGRESS=OFF" >> .env
