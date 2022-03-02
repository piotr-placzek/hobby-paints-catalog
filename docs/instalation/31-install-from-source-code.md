# Instalation from source code

## Download

Navigate to the available [releases](https://github.com/piotr-placzek/hobby-paints-catalog/releases) and download source code of selected version.



## Preparation

Before start you should be sure that you hav got valid Node.js and npm version.

```
pplaczek@vms:~$ node -v
v16.10.0
pplaczek@vms:~$ npm -v
8.3.0
```

If something goes wrong you should [read this article](https://github.com/piotr-placzek/hobby-paints-catalog/blob/develop/docs/02-requirements.md).

## Downloading

It is essential to start your HPC adventure by downloading the latest possible version of the code. You can do this by downloading/cloning the [repository](https://github.com/piotr-placzek/hobby-paints-catalog) or by selecting one of the [released versions](https://github.com/piotr-placzek/hobby-paints-catalog/releases).

If you want to use `develop` version you can just clone this repository.
```
pplaczek@vms:~$ git clone https://github.com/piotr-placzek/hobby-paints-catalog.git
Cloning into 'hobby-paints-catalog'...
remote: Enumerating objects: 397, done.
remote: Counting objects: 100% (125/125), done.
remote: Compressing objects: 100% (92/92), done.
remote: Total 397 (delta 57), reused 61 (delta 29), pack-reused 272
Receiving objects: 100% (397/397), 389.23 KiB | 1.35 MiB/s, done.
Resolving deltas: 100% (178/178), done.
```

## Dependencies

All dependencies are listed int _package.json_ file.
Just navigate to project's root directory and use:
- `npm i`.

```
pplaczek@vms:~/hobby-paints-catalog$ npm i
npm WARN read-shrinkwrap This version of npm is compatible with lockfileVersion@1, but package-lock.json was generated for lockfileVersion@2. I'll try to do my best with it!

> puppeteer@11.0.0 install /tmp/ramdisk/hobby-paints-catalog/node_modules/puppeteer
> node install.js

Downloading Chromium r901912 - 140.9 Mb [====================] 100% 0.0s
Chromium (901912) downloaded to /tmp/ramdisk/hobby-paints-catalog/node_modules/puppeteer/.local-chromium/linux-901912

> sqlite3@5.0.2 install /tmp/ramdisk/hobby-paints-catalog/node_modules/sqlite3
> node-pre-gyp install --fallback-to-build

added 789 packages from 591 contributors and audited 791 packages in 21.046s

85 packages are looking for funding
  run `npm fund` for details
```

## Environment config

You have to remember that you need some environment variables. All of them are described in `.env.template` file.
You can set them in different ways, but the simplest way is renaming `.env.template` file into `.env`.

## Preparing database

Before first use you have to run database migrations. Be sure that you are using correct nodejs environment _(NODE_ENV=production)_.
Start migration process with:
- `npm run migration`.

```
pplaczek@vms:~/hobby-paints-catalog$ npm run migration

> hobby-paints-catalog@1.0.0 migration
> npx sequelize-cli db:migrate --config src/config/db.json --migrations-path src/migrations --seeders-path src/seeders --models-path src/models


Sequelize CLI [Node: 16.10.0, CLI: 6.3.0, ORM: 6.12.0-alpha.1]

Loaded configuration file "src/config/db.json".
Using environment "development".
== 20211122132603-create-game-workshop-paint: migrating =======
== 20211122132603-create-game-workshop-paint: migrated (0.045s)

== 20211122132818-create-vallejo-paint: migrating =======
== 20211122132818-create-vallejo-paint: migrated (0.033s)

(...)
```

### Filling database with initial data

Shortly after the migration is first performed, your database will be created but it will be empty; it will not contain any records describing paint.

To initialize the database with the paint information:
- Make sure that your `.env` file contains the correct configuration.
- Make sure you are connected to the internet.
- Run `npm start -- scrape` with the appropriate options for you.

After downloading the paint information, you can register replacements from predefined conversion charts.
Simply run the `npm start -- predef` command with the options appropriate for you.

## Building

Also you can use these scripts for building your executable file:
- for linux: `npm run build:linux`;
- for windows: `npm run build:windows`;
- for macos: `npm run build:macos`.

Ready executable file, you can find in `./dist` directory.