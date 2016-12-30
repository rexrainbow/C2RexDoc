# [Categories](categories.index.html) > [Logic](logic.index.html) > rex_fnParam2array

## Introduction

Create an [official array](https://www.scirra.com/manual/108/array) and dump parameters of current function into this array, to preserve parameters of function after `system action:wait` , or `system action:wait for signal`. 

## Links

- [Plugin](https://dl.dropboxusercontent.com/u/5779181/C2Repo/Zip/plugins/rex_fnParam2array.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_fnparam2array.html)
- Discussion thread

----

[TOC]

## Dependence

- [official array plugin](https://www.scirra.com/manual/108/array) 
- [official function plugin](https://www.scirra.com/manual/149/function)


## Usage

### Motivation

Function parameters would not be preserved after any wait action, user need to save them manually.

### Dump parameters

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!1000&authkey=!AKDIynr8Ejm5qFo&ithint=file%2ccapx)

- `Action:Dump parameters into a new array`. to
  1. create an array object
  2. push parameters of current function call into this new array object