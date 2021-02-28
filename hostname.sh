#!/bin/bash
hostname=$(hostname)
ip=$(hostname -I | awk '{print $1}')
curl -d '{"hostname": "'$hostname'","ip":"'$ip'"}' -H "Content-Type: application/json" http://127.0.0.1:3000/clients
