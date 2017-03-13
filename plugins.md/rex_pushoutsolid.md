# [Categories](categories.index.html) > [Movement](movement.index.html) > rex_pushoutsolid

## Introduction

Push object out from solid object.

## Links

- [Plugin](https://rexrainbow.github.io/C2RexDoc/repo/rex_pushoutsolid.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/behavior_rex_pushoutsolid.html)
- [Discussion thread](https://www.scirra.com/forum/behavior-moveto_t63156)

----

[TOC]

## Dependence

None

## Usage

### Obstacles

- Property `Obstacles`
  - `Solids` : instance with [official solid behavior](https://www.scirra.com/manual/104/solid).  ([sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E%21254&authkey=%21AKOYwGp-KA96yvA&ithint=file%2c.capx))
  - `Custom` : `Action:Add obstacle`
    - `Action:Clear obstacles`

### Push out

- Property `Activated`
  - `Yes` : push out nearest every tick
  - `No`  ([sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHlXT1d-j2YYvmJLkg))
    - `Action:Push out nearest`
    - `Action:Push out at angle`
    - `Action:Push out toward position`