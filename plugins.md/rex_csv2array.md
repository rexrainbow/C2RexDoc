# [Categories](categories.index.html) > [Data structure](datastructure.index.html) > rex_csv2array

## Introduction

Load content of official array object from [csv](https://en.wikipedia.org/wiki/Comma-separated_values) string.

##Links

- [Plugin](https://rexrainbow.github.io/C2RexDoc/repo/rex_csv2array.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_csv2array.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-csv-csv2array-csv2dictionary_t64326)


----

[TOC]

## Dependence

None

## Usage

### Load to array

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!216&authkey=!AEhykUbiHXz44ys&ithint=file%2c.capx)

- `Action:Put csv data into array`

  - Delimiter : property `Delimiter` or `Action:Set delimiter`

    - `Expression:Delimiter`

  - Format of csv :

    ```
    data00,data01,data02,data03,...
    data10,data11,data12,data13,...
    data20,data21,data22,data23,...
    ...
    ```


#### Data type

Property `Eval mode`

- `No` : string

- `Yes` :  parse value by *eval* function of javascrpt

  - number: `10`
  - string: `'hi'`
  - javascript function: `Math.random()`


### Retrieve cells

```mermaid
graph TB

CondForEachCell["Condition:For each cell"] --> ExpCell["(Expression:CurX, Expression:CurY) = Expression:CurValue<br> <br>Expression:Width<br>Expression:Height"]
```

- `Condition:For each cell`
  - (`Expression:CurX`, `Expression:CurY`) = `Expression:CurValue`
    - Property `Eval mode`
  - `Expression:Width`, width of csv cells
  - `Expression:Height`, height of csv cells

### More examples

- [Split string](https://onedrive.live.com/redir?resid=7497FD5EC94476E!2070&authkey=!AJYQ_pH59qfgLhs&ithint=file%2ccapx)