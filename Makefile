# Makefile 
# 
all: env bom

env:
		@echo "GATSBY_TELEMETRY_DISABLED=1" >> .env
		@echo "LC_ALL=POSIX" >> .env
		@echo "NPM_CONFIG_LOGLEVEL=OFF" >> .env

bom: SHELL:=/bin/bash   # bash
bom:
		@bash -c ''


