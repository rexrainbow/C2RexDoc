# [Categories](categories.index.html) > [Board](board.index.html) > rex_tmx_xml_parser

## Introduction

A parser of [tile map editor](http://www.mapeditor.org/) exported file.

## Links

- [Plugin](https://rexrainbow.github.io/C2RexDoc/repo/rex_tmx_XML_parser.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_tmx_xml_parser.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-rex-tmx-importer-v2_t103854)

----

[TOC]

## Dependence

None

## Usage

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!557&authkey=!ALw-6j39_T7BKX8&ithint=file%2c.capx)

### Get XML exported file

The saved file of [tile map editor](http://www.mapeditor.org/) is XML format.

### Parse tmx input string

Call `Action:Import tmx` in rex_tmx_importer_v2 object to load xml string, parameters of this action are

1. XML string
2. This XML parser object

### Supported layer format

The layer format is configured at **Map -> Map properties -> Layer format** from menu bar.
Here is the supported format 

- Base64(uncompressed) , default format
- Base64(gzip compressed)
- Base64(zlib compressed)
- CSV