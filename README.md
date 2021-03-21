Dev Setup:

1. Make sure Apache is running on your machine
1. Enable PHP in Apache 
1. Set up MYSQL
1. Set up phpMyAdmin
1. Make a copy of `.env-example` and name it `.env`.
    * Edit the environment variables for your dev setup.
    * See the section on [environment variables](#environment-variables)  for more info.

Resource (Mac): https://machiine.com/2013/how-to-install-apache-and-php-on-a-mac-with-osx-10-8-mamp-part-1/

Resource (Windows): https://faq.programmerworld.net/web_publishing/apache_php.htm


## Environment Variables
`DATABASE_NAME`: The name of the mysql server

`DATABASE_USER`: The login username for the mysql server

`DATABASE_PASSWORD`: The password for the mysql login

`DATABASE_HOST`: The host address of the mysql server (optional, defaults to localhost)

`DATABASE_PORT`: The port number of the mysql server (optional, defaults to 5432)

`NODE_ENV`: `prod` for production environment, `dev` for local / development.


You may add more environment variables if you would like. You can access them through process.env.ENV_VAR_NAME

