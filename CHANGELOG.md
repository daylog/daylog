# daylog change log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
- _nothing yet_

## [v2.2.1] - 2018-12-31

### Fixed
- better handle date for week, sprint, and quarter near new year.
- fix typos for month and quarter

## [v2.2.0] - 2018-12-26

### Added
- added `--next` and `--previous` flags to day, week, month, quarter, and sprint commands

## [v2.1.0] - 2018-11-17

### Added
- added week, sprint, and quarter commands
- updated readme

## [v2.0.1] - 2018-11-10

### Fixed
- Fixed types in args

## [v2.0.0] - 2018-11-03

### Removed
- `today` and `tomorrow` commands

### Changed

- automatic help text using directory-command
- changed root command to show help text

### Added

- added first draft of `daylog build` command
- updated dependencies

## [v1.1.0] - 2018-07-07

### Added

- `tomorrow` command that works like the `today` command. It opens the next day's file in the editor of your choice.

## [v1.0.0] - 2018-07-01

### Added
- initial release with `day`, `month`, `year`, and `today` commands.

[v2.2.1]: https://github.com/daylog/daylog/compare/v2.2.0...v2.2.1
[v2.2.0]: https://github.com/daylog/daylog/compare/v2.1.0...v2.2.0
[v2.1.0]: https://github.com/daylog/daylog/compare/v2.0.1...v2.1.0
[v2.0.1]: https://github.com/daylog/daylog/compare/v2.0.0...v2.0.1
[v2.0.0]: https://github.com/daylog/daylog/compare/v1.1.0...v2.0.0
[v1.1.0]: https://github.com/daylog/daylog/compare/v1.0.0...v1.1.0
[v1.0.0]: https://github.com/daylog/daylog/compare/v1.0.0
