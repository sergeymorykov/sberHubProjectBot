FROM python:3.10-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем все файлы проекта
COPY . .

# Устанавливаем зависимости
RUN pip install --no-cache-dir -r requirements.txt

# Запускаем оба файла одновременно
CMD ["sh", "-c", "python start_api.py & python tg-bot.py"]
