# Serverless Portfolio

## Core Stack

- **Node.js** v14.15.1
- **Serverless framework** 2.44.0
- **DynamoDb**

## Running project :

#### Copy environment variable

```sh
cp .env-sample .env
```

``` bash
$ npm start
```

### Project Structure
```sh
.
├── src/
│   └── config                # all configuration file here
│   └── logger                # contains pino logger
│   └── services              # contains services files
│   └── helpers.js            # helpers files
│   └── utils.js              # utils files
├── test/                     # unit test
├── .gitignore                # specifies intentionally untracked files to ignore
├── handler.js                # handler serverless
└── package.json              # build scripts and dependencies
```
## Unit testing
- **jestjs**

#### Run test

``` bash
$ npm run test
```
### Node JS Lib
* pino
* pino-pretty
* aws-sdk
* jest

### Node JS Lib dev
* serverless-offline

## Deploy
* sls deploy
### License

MIT
