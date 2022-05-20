#!/bin/bash

echo "Building with ping..."
docker build -f nginx-ping/Dockerfile -t nginx-ping nginx-ping
