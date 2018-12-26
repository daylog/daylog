# ☀️📝 daylog

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[travis-image]: https://img.shields.io/travis/com/daylog/daylog.svg?style=flat-square
[travis-url]: https://travis-ci.com/daylog/daylog
[npm-image]: https://img.shields.io/npm/v/daylog.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/daylog
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CODE_OF_CONDUCT.md

## About

Write daily notes in markdown files with the help of a commandline tool.

`daylog` creates a directory structure that looks like:

```console
notes
├── 2018
│   ├── 01-january
│   │   ├── 01.md
│   │   ├── 02.md
│   │   ├── 03.md
...
│   │   ├── 31.md
│   │   ├── README.md
│   ├── quarters
│   ├── sprints
│   ├── weeks
│   ├── README.md
```

## Install

```console
npm i -g daylog
```

## Usage

Create a directory for your notes:

```console
mkdir ~/notes
cd ~/notes
```

Create a notes file for the current day:

```console
daylog day
```

You'll find a new file at `~/notes/2018/11-november/17.md`, with the current date instead of this example.

### Commands

```console
daylog 

Usage:
  daylog

Subcommands:
  daylog build                          create an html or json build of a daylog
                                        project
  daylog day                            create a new file for a day
  daylog month                          create a new file for a month
  daylog quarter                        create a new file for a quarter
  daylog sprint                         create a new file for a two week sprint
  daylog week                           create a new file for a week of the year
  daylog year                           create a new file for a year

See help for subcommands:
  daylog [command] --help
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Conduct

It's important that this project contributes to a friendly, safe, and welcoming environment for all. Read this project's [code of conduct](CODE_OF_CONDUCT.md).

## Change log

Read about the changes to this project in [CHANGELOG.md](CHANGELOG.md). The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## Contact

- **issues** – Please open issues in the [issues queue](https://github.com/daylog/daylog/issues)

## License

[ISC](LICENSE.md)
