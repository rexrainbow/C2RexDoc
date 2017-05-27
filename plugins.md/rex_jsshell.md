# [Categories](categories.index.html) > [Logic](logic.index.html) > rex_jsshell

## Introduction

Invoke javascript function.

## Links

- [Plugin](https://rexrainbow.github.io/C2RexDoc/repo/rex_jsshell.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_jsshell.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-rex-jsshell-invoke-javascript-function_t192080)


----

[TOC]

## Dependence

None

## Usage

```mermaid
graph TB

LoadJSCode["Action:Load API"] --> SetFnName["Action:Set function name"]
SetFnName --> AddParam["Action:Add value<br>Action:Add boolean<br>Action:Add null<br>Action:Add JSON<br>Action:Add callback"]
AddParam --> Invoke["Action:Invoke<br>Expression:ReturnValue"]

ExecJS["Action:Execute Javascript<br>(Official browser plugin)"] --> SetFnName

Invoke --> Callback["Condition:Callback<br>Expression:Param"]
```



1. Load javascript
   - `Action:Load API`  ([Sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHlw7eyf712LjnrFUD))
   - `Action:Execute Javascript`  ([Sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHlw3JugBBOi6bIQwm))
     - (Official browser plugin)
2. `Action:Set function name`
3. Add parameters
   - Action:Add value
   - Action:Add boolean
   - Action:Add null
   - Action:Add JSON
   - Action:Add callback
4. `Action:Invoke`
   - `Expression:ReturnValue`
   - `Expression:ReturnValue(key)`, to get property of return value
   - `Expression:ReturnValue(key, defaultValue)`
5. `Condition:Callback`, from callback parameter
   - `Expression:Param(n)`, to get nth parameter of callback
   - `Expression:Param(n, key)`, to get property of nth parameter of callback
   - `Expression:Param(n, key, defaultValue)`