#!/bin/bash
echo "--- АВТОМАТИЧЕСКАЯ СИНХРОНИЗАЦИЯ ЗАПУЩЕНА ---"
while true; do
  # Следим за изменениями в текущей папке
  git add .
  # Проверяем, есть ли что-то новое для коммита
  if ! git diff-index --quiet HEAD; then
    echo "[$(date +%T)] Обнаружены изменения. Отправка..."
    git commit -m "Auto-update: $(date +%Y-%m-%d_%H:%M:%S)"
    git push origin main --force
    echo "[$(date +%T)] Готово. Жду новых правок..."
  fi
  # Спим 5 секунд перед следующей проверкой
  sleep 5
done