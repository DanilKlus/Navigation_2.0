# Navigate.
1. Включить OpenServer и создать через _phpmyadmin_ базу данных с назвнием **db_videos** (кодировка *utf8_general_ci*)
3. в папкие **client* вызвать: **npm install**
4. в папке **server** вызвать: **npm install**
5. в папке **server** запустить сервер: **npm run dev**
6. открыть еще одну консоль _(уже в папке client)_, вызвать npm **start**
7. Готово



_*Изменить инфу о бд на свои можно в файле .env (папка сервер)*_:


  PORT="Порт на котором будет работать сервер (можно поставить 5000)"
  DB_NAME="название вашей бд (в моем случае 'db_videos')"
  DB_USER= "имя юзера (в OpenServer по умолчанию 'root')"
  DB_PASSWORD="парол (в OpenServer по умолчанию его нету)"
  DB_HOST="хост (в OpenServer по умолчанию 'lockalhost')" 
  DB_PORT="порт хоста (в OpenServer по умолчанию '3306')" 
