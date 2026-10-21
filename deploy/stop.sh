#!/bin/sh
export PATH="$PATH:/usr/local/bin:/usr/bin"
pm2 delete ecom || true
