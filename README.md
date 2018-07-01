# daylog

[![npm][npm-image]][npm-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/daylog.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/daylog
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CODE_OF_CONDUCT.md

## About

Write daily notes in markdown files with the help of a commandline tool.

`daylog` creates a directory structure that looks like:

```
notes
├── 2018
│   ├── 01-january
│   │   ├── 01.md
│   │   ├── 02.md
│   │   ├── 03.md
...
│   │   ├── 31.md
│   │   ├── README.md
```

## Install

```sh
npm i -g daylog
```

## Usage

Create a directory for your notes:

```
mkdir ~/notes
cd ~/notes
```

Create a notes file for today and open it in your favorite editor:

```
daylog today -e atom
```

### Additional commands

> arguments in brackets default to the current date.

#### day

Create a day file. Creates current day by default.

```
daylog day {dayNumberOfMonth} {month} {year}
```

#### month

Create a month directory and a README.md file in that directory. Creates current month by default.

```
daylog month {month} {year}
```

#### year

Create a year directory and a README.md file in that directory. Creates current year by default.

```
daylog year {year}
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
