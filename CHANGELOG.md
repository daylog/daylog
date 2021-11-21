# daylog change log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Changed
- Minimum node version of 14.13.0

## [v4.0.0] - 2020-09-07

### Added
- introduce .daylog config folder
  - add config for choosing which date file types to use, 
  - move templates directory into .daylog
- add startMonth and endMonth to quarter template data

### Changed
- custom templates are now stored in `.daylog/templates` rather than `_templates`

## [v3.0.0] - 2019-02-02

### Added
- JS API for creating files
- add `daylog now` command that creates the current day, week, sprint, month, quarter, and year file if it does not yet exist

## [v2.2.3] - 2019-01-12

### Fixed
- use week.numberZeroFilled for week filename

## [v2.2.2] - 2018-12-31

### Fixed
- make sure day filename is zero-filled
- fix typo in quarter command

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

[v4.0.0]: https://github.com/daylog/daylog/compare/v3.0.0...v4.0.0
[v3.0.0]: https://github.com/daylog/daylog/compare/v2.2.3...v3.0.0
[v2.2.3]: https://github.com/daylog/daylog/compare/v2.2.2...v2.2.3
[v2.2.2]: https://github.com/daylog/daylog/compare/v2.2.1...v2.2.2
[v2.2.1]: https://github.com/daylog/daylog/compare/v2.2.0...v2.2.1
[v2.2.0]: https://github.com/daylog/daylog/compare/v2.1.0...v2.2.0
[v2.1.0]: https://github.com/daylog/daylog/compare/v2.0.1...v2.1.0
[v2.0.1]: https://github.com/daylog/daylog/compare/v2.0.0...v2.0.1
[v2.0.0]: https://github.com/daylog/daylog/compare/v1.1.0...v2.0.0
[v1.1.0]: https://github.com/daylog/daylog/compare/v1.0.0...v1.1.0
[v1.0.0]: https://github.com/daylog/daylog/compare/v1.0.0
