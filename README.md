# E-Commerce-Backend

<h1 align="center">E-Commerce_BackEnd</h1>

<a name="Description" />
## Description
E-Commerce_BackEnd is a node / SQL based project that allows the user to create, read, update, and delete database information related to the products, tags, and categories of their e-commerce site.

<a name="Installation-Instructions"></a>   
## Installation Instructions
In order to be able to run this project, you must have the following installed:
- mySQL
- mySQL Workbench
- Node Package Manager (npm)

Once those are installed you must set up your database
1. Set up your project by opening the terminal and running 'npm install' at the root of the project files.
2. Open the terminal and make sure mySQL server is started by running the following command
     'sudo /usr/local/mysql/bin/mysqld_safe'
3. Open mySQL Workbench and create a new connection, taking note of the name of the connection you set and the username and password you have selected.
4. Duplicate the .env.sample and rename it to .env
5. Populate the .env file with the values you established when creating your new database schema (connection name, username, password).
6. Navigate to the db folder and open the schema.sql file and paste the contents into mySQL Workbench to generate the database.
7. In the terminal, run 'npm run seed' at the root of the project files to generate database data.



<a name="Usage-Information"></a>   
## Usage Information
Open up the terminal and navigate to the root of your project files and run 'npm run start' to start the application.
Use your API testing platform of choice (insomnia, postman) to connect to the various endpoints provided.
A video for using the project can be found [here](TODO ADD URL TO VIDEO).
