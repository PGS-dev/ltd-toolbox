# typescript runner

This runner runs typescript files without previously compiling it using `tsx`.

It also loads `dotenv` variables so that they are available in your scripts.

This two operations can be also executed using both tools cli's, but such commands are not easy to use and are not very readable. Therefore functionalities of those two libraries were combined in one single executable, sprinkled with little bit of additional logic, like multiple .env file loading, and environment selection.

## Environment specific variables
By specifying `--env` or `-e` parameter when running `tsrun` you can choose environment

## Order of loading .env files

Assuming our file structure in our monorepo looks like this:

```
/
├── packages
│   └── packageA
│       ├── index.ts
│       ├── .env
│       ├── .env.local
│       └── .env.prod
├── .env
├── .env.local
└── .env.prod
```

### Default loading

runing 
```bash
cd packages/packageA 
$ tsrun index.ts
```
in `/packages/packageA` directory will load .env files in such order:

``` bash
# global definitions
/.env                             # Always loaded
/.env.local                       # Always loaded, ignored by git, overwrites previous

# local definitions
/packages/packageA/.env           # Always loaded, overwrites previous
/packages/packageA/.env.local     # Always loaded, ignored by git, overwrites previous
```

### With mode specified

You can also run typescript files with mode specified:
```bash
cd packages/packageA 
$ tsrun index.ts --mode [mode]
```

``` bash
# global definitions
/.env                             # Always loaded
/.env.local                       # Always loaded, ignored by git, overwrites existing variables

# local definitions
/packages/packageA/.env           # Always loaded, overwrites existing variables
/packages/packageA/.env.local     # Always loaded, ignored by git, overwrites existing variables

# mode specific definitions
/.env.[mode]                      # Loaded for given mode, overwrites existging variables 
/packages/packageA/.env.[mode]    # Loaded for given mode, overwrites existging variables
```







