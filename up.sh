#!/bin/bash
git add .
git commit -m "Force update $(date +%T)"
git push origin main --force
echo "--- ДАННЫЕ ОТПРАВЛЕНЫ НА GITHUB ---"