# [Categories](categories.index.html) > [Logic](logic.index.html) > rex_fncallpkg

## Introduction

Serialize [function call](https://www.scirra.com/manual/149/function) to a JSON string, or deserialize it to invoke the function call.

## Links

- [Plugin](https://rexrainbow.github.io/C2RexDoc/repo/rex_fncallpkg.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_fncallpkg.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-rex-fncallpkg_t106856)

----

[TOC]

## Dependence

- [Official function plugin](https://www.scirra.com/manual/149/function), or 
- [rex_function2 plugin](rex_function2.html)



## Usage

### Single function call

```mermaid
graph TB

subgraph Serialize
Serialize["Expression:FnCallPkg( function_name, parameter0, parameter1, ..)"] --- Result["JSON string:<br>[function_name,parameter0,parameter1, ...]"]
end
Result --> Deserialize["Action:Call function, or<br>Expression:Call"]

subgraph Deserialize
Deserialize --> OnFunction["Function object:<br>On function_name"]
end
```

#### Serialize

Serialize a function call by `Expression:FnCallPkg( function_name, parameter0, parameter1, ..)`. It returns a JSON string in this format

```json
[function_name,parameter0,parameter1, ...]
```

The interface of parameters is the same as `Expression:Call of [official function object](https://www.scirra.com/manual/149/function),

#### Deserialize

`Action:Call function` , or `Expression:Call` to deserialize JSON to invoke function call.

##### Assign function object

This plugin invokes function by one of these function object

1. [rex_function2](rex_function2.html)
2. [official function](https://www.scirra.com/manual/149/function)

Or assign function object by `Action:Setup callback`.

----

### Multiple function calls

```mermaid
graph TB

subgraph Serialize
AddQueue["Action:Clean<br>Action:Push<br>Action:Push<br>..."] --> FnQueue["Function calls queue"]
LoadQueue["Action:Load"] --> FnQueue

FnQueue --> Serialize["Expression:FnQueuePkg"]
Serialize --- Result["JSON string:<br>[[function_name,parameter0,parameter1, ...],<br>[function_name,parameter0,parameter1, ...],<br>  ... ]"]

Result --- LoadQueue
end

Result --> Deserialize["Action:Call function, or<br>Expression:Call"]

subgraph Deserialize
Deserialize --> OnFunction["Function object:<br>On function_name"]
end
```



#### Serialize

Multiple function calls are stored in a queue.

1. Push function calls into queue
   - `Action:Clean`, clean queue
   - `Action:Push` , push function call into queue.
2. `Expression:FnQueuePkg`, serialize function queue. It returns a JSON string in this format

```json
[[function_name,parameter0,parameter1, ...],[function_name,parameter0,parameter1, ...],...]
```

`Action:Load`, to load serialize result  `Expression:FnQueuePkg`, or `Expression:FnCallPkg`.

#### Deserialize

`Action:Call function` , or `Expression:Call` to deserialize JSON to invoke function call.

#### Retrieve function queue

```mermaid
graph TB

FnQueue["Function calls queue"] --> CondForEachCmd["+Condition:Foreach package"]

subgraph For each call
CondForEachCmd --- ExpCall["Expression:CurName,<br>Expression:CurParam( index )"]
ExpCall --> OverwriteParameter["-Action:Overwrite parameter, or<br>-Action:Add to parameter"]
end
```

1. `Condition:For each package` to retrieve parameters o function call in queue in order. 
   1. `Expression:CurName`, `Expression:CurParam`
   2. Modify parameter
      - `Action:Overwrite parameter`, 
      - `Action:Add to parameter`

### More samples

[Prefab](https://1drv.ms/u/s!Am5HlOzVf0kHk2gJq8tK7w5ZWPVf)

