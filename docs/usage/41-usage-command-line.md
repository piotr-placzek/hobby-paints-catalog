# Usage from command line

Just open your command line and run the command `npm start -- --help`

```
pplaczek@vms:~/hobby-paints-catalog$ npm start -- --help

> hobby-paints-catalog@1.0.0 start
> NODE_ENV=production node src/index.js "--help"

Usage: index.js <command> [options]

Commands:
  index.js credits           print credentials
  index.js find              find product by given name
  index.js license           print short license CC BY-NC-SA
  index.js predef [options]  insert predefined paints conversion into database
  index.js scrape [options]  scrape paints from web into database

Options:
      --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]

Piotr Płaczek <piotr@pplaczek> 2021 CC BY NC SA 4.0 License
```

As the application grows, you will see more commands available. Each of these can be called with the `-h` or `--help` option to learn how to use them.
