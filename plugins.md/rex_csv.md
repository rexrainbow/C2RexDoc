# [Categories](categories.index.html) > [Data structure](datastructure.index.html) > rex_csv

## Introduction

Read 2d table from [csv](https://en.wikipedia.org/wiki/Comma-separated_values) string.

##Links

- [Plugin](https://dl.dropboxusercontent.com/u/5779181/C2Repo/Zip/plugins/rex_csv.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_csv.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-csv-csv2array-csv2dictionary_t64326)


----

[TOC]

## Dependence

None

## Usage

### Write

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!458&authkey=!AMDM0vaVccqGJVU&ithint=file%2c.capx)

#### Load table

- `Action:Load table`

  - Delimiter : property `Delimiter` or `Action:Set delimiter`

    - `Expression:Delimiter`

  - First row : 

    - First column : empty
    - Other columns : column keys

  - Other rows : 

    - First column : row key
    - Other columns : data

  - For example, table :

    |       | a    | b    |
    | ----- | ---- | ---- |
    | **c** | 10   | 20   |
    | **d** | 30   | 40   |

    exported csv string :

    ```JSON
    ,a,b
    c,10,20
    d,30,40
    ```

    2d table in JSON (`Expression:TableToString`)

    ```json
    {
      "a":{
        "c":10,
        "d":30
      },
      "b":{
        "c":20,
        "d":40
      }
    }
    ```

- Load multiple tables  ([Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!385&authkey=!ALJi0RhurTKXvRc&ithint=file%2c.capx))

  1. `Action:Turn page`
     - Default page name : `"_"`
  2. `Action:Load table`

##### Data type

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!456&authkey=!AEIL0KCaGGF7jks&ithint=file%2c.capx)

Property `Eval mode`

- `No` : string

  - Convert column or row to number type after load table
    - `Action:Convert row`
    - `Action:Convert col`

- `Yes` :  parse value by *eval* function of javascrpt

  - number: `10`
  - string: `'hi'`
  - javascript function: `Math.random()`

  For example, 

  ```json
  ,Name,HP,MP
  char1,'aaa',100,20
  char2,'bbb',80,30
  ```

  *Error message* will display on console when eval failed.

#### Set cell

- `Action:Set value`, `Action:Add to`  ([Sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHkjRnYBe0OSpa-FfI))
- `Action:Set value at page`, `Action:Add at page`
- `Action:Clear`, to clean all cells

#### Append column or row 

- `Action:Append a column`
- `Action:Append a row`

#### Remove column or row

- `Action:Remove a column`
  - Parameter `Col`
    - String : column name
    - Number : index of column
-  `Action:Remove a row`
  - Parameter `Row`
    - String : Row name
    - Number : index of row

#### Sort

[Sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHk3yUhLx9ylttS7fP)

- `Action:Sort items in col`
- `Action:Sort items in row`

### Read

#### Read cell

- `Expression:At(col, Row)`, `Expression:At(Col, Row, Page)`

  - Parameter `col` or `row`

    - String : column/row name
    - Number : index of column/row

    For example

    |       | a    | b    |
    | ----- | ---- | ---- |
    | **c** | 10   | 20   |
    | **d** | 30   | 40   |

    Expression:At("b", "d") = Expression:At(1, 1) = 40

  - Page, column, row of the last `Expression:At`

    - `Expression:AtPage`
    - `Expression:AtCol`
    - `Expression:AtRow`

#### Retrieve cells

```mermaid
graph TB

CondForEachPage["Condition:For each page<br> <br>Expression:CurPage"]

subgraph Col - Row
CondForEachCol["Condition:For each col<br> <br>Expression:CurCol"] --- CondForEachRowInCol["Condition:For each row in col<br> <br>Expression:CurRow<br>Expression:CurValue"]
end

subgraph Row - Col
CondForEachRow["Condition:For each row<br> <br>Expression:CurRow"] --- CondForEachColInRow["Condition:For each col in row<br> <br>Expression:CurCol<br>Expression:CurValue"]
end

CondForEachPage --- CondForEachCol
CondForEachPage --- CondForEachRow
```

- Retrieve pages
  - `Condition:For each page`
    - `Expression:CurPage`
- Retrieve columns
  - `Condition:For each col`
    - `Expression:CurCol`
    - `Condition:For each row in col`
      - `Expression:CurRow`
      - `Expression:CurValue`
  - `System condition: For`, from 0 to `Expression:ColCnt` -1
- Retrieve rows
  - `Condition:For each row`
    - `Expression:CurRow`
    - `Condition:For each col in row`
      - `Expression:CurCol`
      - `Expression:CurValue`
  - `System condition: For`, from 0 to `Expression:RowCnt` -1

#### Previous/next column or row

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!2372&authkey=!ANozengeKy28exs&ithint=file%2ccapx)

- Previous/ next column
  - `Expression:PreviousCol`
  - `Expression:NextCol`
- Previous/ next row
  - `Expression:PreviousRow`
  - `Expression:NextRow`

#### Is existed

- Has column or row
  - `Condition:Has col`
  - `Condition:Has row`
  - `Condition:Cell is valid`
- Data in column or row
  - `Condition:Data in col`
  - `Condition:Data in row`
- Query
  - Load csv to [rex_taffydb](rex_taffydb.html) to query rows.

#### Amount of column or row

- `Expression:ColCnt`
- `Expression:RowCnt`

#### Read csv string

[Sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHhRTROLGk4tG1IOZa)

- `Expression:TableToCSV`

----

### Save & load

- It supports official saving & loading feature.
- Manual save & load
  - Save & load a table
    - `Expression:TableToString` -> `Action:Load one table`
  - Save & load all tables
    - `Expression:AllTalbesToString` -> `Action:Load all tables`

------

### Debug panel

- Dump cells in a column `Col` at `Page`
  - Set cell value at respond cell