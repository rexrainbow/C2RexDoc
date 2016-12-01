# [Categories](categories.index.html) > [Board](board.index.html) > rex_tmx_json_parser

## Introduction

A parser of [tile map editor](http://www.mapeditor.org/) exported file in JSON format. 

## Links

- [Plugin](https://dl.dropboxusercontent.com/u/5779181/C2Repo/Zip/plugins/rex_tmx_JSON_parser.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_tmx_json_parser.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-rex-tmx-importer-v2_t103854)

----

[TOC]

## Dependence

None

## Usage

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!558&authkey=!AMbD2IBIdygRjWE&ithint=file%2c.capx)

### Get JSON exported file

Open the **File -> Export As** in menu bar in [tile map editor](http://www.mapeditor.org/). Then select the **Save as type** to **Json files(*.json)**.

### Parse tmx input string

Call `Action:Import tmx` in rex_tmx_importer_v2 object to load xml string, parameters of this action are

1. JSON string
2. This JSON parser object

### Supported layer format
The layer format is configured at **Map -> Map properties -> Layer format** from menu bar.

Here is the supported format 

- Base64(uncompressed) , default format  - [sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!2155&authkey=!AIcQjkrXondCnDA&ithint=file%2ccapx)
- Base64(gzip compressed) - [sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!2154&authkey=!AFZwQCc-mJEmcjQ&ithint=file%2ccapx)
- Base64(zlib compressed)
- CSV