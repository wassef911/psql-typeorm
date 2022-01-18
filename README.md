# psql-node

a postgresql database with TypeORM 

## folder structure 

```
├── index.html
├── src/
│   ├── index.ts
│   ├── config/...
│   ├── models/...
│   ├── controllers/
│       ├── banker/...
│       ├── client/...
│       ├── transaction/...
│   ├── entities/...
│       ├── utils/...
│   ├── loader/...
│   ├── services/...
│   ├──routes/
│       ├── v1/...
│   └── utils/
│       ├── customError.ts
│       ├── customSuccess.ts
```

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Install

    $ git clone https://github.com/wassef911/psql-typeorm
    $ cd psql-typeorm
    $ npm install

## Running the project

    $ npm run start:dev
