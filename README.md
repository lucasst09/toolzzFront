1-Instalar o laravel https://laravel.com/docs/10.x/installation
2-configurar variáveis ambintes do PHP no caso do windows 
3-copiar o arquivo .env.example e renomer para .env
4-rodar os seguintes comandos 
  php artisan key:generate 
  php artisan serve 
5-pegar o ip local e colocar para ser consumido no front no arquivo login.js fetch('<local ip gerado>api/login')
6-por padrão é o ip 127.0.0.1:8000
