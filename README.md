## Stack:
- HTML/CSS
- Vanilla JS
- Node
- Express
- MySQL
## Prerequisites

- Download & install Node from https://nodejs.org
- Download and install MySQL Server from https://dev.mysql.com/downloads/installer/

## Project Setup
In the MySQL Workbench, initialize the database:
```
CREATE DATABASE yourdbname;  
```  
Then initialize the schema:
```
USE yourdbname;

CREATE TABLE `FORM_TABLE` (
  FormID INT AUTO_INCREMENT PRIMARY KEY,
  PatientID INT NOT NULL,
  `Input 2` TEXT,
  `Input 3` TEXT
);
```
Configure the .env file:
```
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=yourdbname
PORT=3000
```
Navigate to project root and install dependencies:
```npm install```

Start the server:
```npm start```

Open this link with browser:
http://localhost:3000/
