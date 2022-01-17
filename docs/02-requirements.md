
# Requirements

The **HPC** (Hobby Paints Catalog) applications is written in  _JavaScript_, and the application data are stored in the _SQLite3_  database.

The only thing you need before running HPC is a JS engine (Node.js) version 16.10 or higher along with a package manager (npm). All other dependencies are described in the _package.json_ file, and npm will take care of them.

## Node.js installation

[Node.js](https://nodejs.dev/) is available for any operating system, and the latest version can be downloaded from [project page](https://nodejs.dev/).

Due to the multitude of released versions, I suggest installing it via the version manager (nvw).

### nvm installation (linux/mac)

- [nvm](https://github.com/nvm-sh/nvm)

Node version manager is a project hosted on GitHub, and the entire installation process is described in the [README] file(https://github.com/nvm-sh/nvm/tree/v0.39.1#installing-and-updating).

##### tl;dr

To install nvm you need to download and run [install script](https://github.com/nvm-sh/nvm/blob/v0.39.1/install.sh). This can be done by running one of the following commands in a terminal (wget or curl depending on your preference):
- `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`

### nvm installation (windows)

- [nvm-windows](https://github.com/coreybutler/nvm-windows)

Node version manager for windows is a project shared on GitHub, and the entire installation process is described in the [README] file(https://github.com/coreybutler/nvm-windows#installation--upgrades).

##### tl;dr

To install nvm on windows system you need to download and run [installation package](https://github.com/coreybutler/nvm-windows/releases) and follow the installer's instructions.

### Node.js version selection

Once the nvm installation is completed correctly, downloading the appropriate version of Node.js requires only a few commands.

Open a terminal (command line) and run the following commands:
- `nvm install 16.10.0`
- `nvm alias default 6.10.0`

```
pplaczek@vms:~$ nvm install 16.10.0
Downloading and installing node v16.10.0...
Downloading https://nodejs.org/dist/v16.10.0/node-v16.10.0-linux-x64.tar.xz...
################################################################################################## 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v16.10.0 (npm v7.24.0)
Creating default alias: default -> 16.10.0 (-> v16.10.0)
```