#!/bin/sh
# git update-index --chmod=+x env-entrypoint.sh
echo "==> Injecting Global ENV Settings..."
echo "GATSBY_TELEMETRY_DISABLED=1" >> .env
