# Node Slack Bot

## Install

1. Clone the project and cd into the created folder

run the following command if you're using **ssh**

```bash
git clone git@github.com:muco-rolle/node-slack-bot.git

```

or if you're using **https** run the following command

```bash
git clone git@github.com:muco-rolle/node-slack-bot.git
```

2. Install Project dependencies

run the following commands in your terminal

```bash
cd node-slack-bot
yarn install
```

Notice that this project is using yarn if you want to use npm, remove yarn.lock file

```bash
cd node-slack-bot
rm yarn.lock
```

and run the following command:

```bash
npm install
```

3. Add ENV variables

Create a file and name it .env.development in root of the directory node-slack-bot
and then copy the content of .env.example into .env.development

4. Start development server

To start a development server you run the following command

```bash
yarn run start:dev
```
