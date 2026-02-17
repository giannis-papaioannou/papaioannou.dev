#!/bin/bash


eval $(ssh-agent -s)
ssh -t $SERVER_USERNAME@$SERVER_IP "cd $PROJECT_PATH && git pull && docker compose build && docker compose down && docker compose up -d"
