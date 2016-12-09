# [Categories](categories.index.html) > [Board](board.index.html) > rex_miniboard_touch

## Introduction

A behavior of [mini board](rex_miniboard.html), which drag & drop chess on mini board.

## Links

- [Plugin](https://dl.dropboxusercontent.com/u/5779181/C2Repo/Zip/behaviors/rex_miniboard_touch.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/behavior_rex_miniboard_touch.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-mini-board_t116865)


----

[TOC]

## Dependence

- [rex_miniboard](rex_miniboard.html)
- [rex_touchwrap](rex_touchwrap.html)

## Usage

```mermaid
graph TB

Idle --> |"Drag"| PullOut["Property: Drag Pull<br>----<br>Pull out from main board"]
PullOut --> CondOnDraggingStart["+Condition:On dragging start"]

subgraph Dragging
CondOnDraggingStart --> Dragging["Dragging"]
Dragging --- AlignPhysicalPosition["Property: Align to grids<br>----<br>Align physical position<br>with main board"]

AlignPhysicalPosition --- CondOnDragAtMB["+Condition:On dragging at main board"]
end

Dragging --> |"Drop"| CondOnDrop["+Condition:On dropped"]
CondOnDrop --> Idle

subgraph Idle
Idle
end
```

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!983&authkey=!AL0vlJ5K9x1ukr4&ithint=file%2ccapx)

### Drag

- Drag-able
  - Property `Enable` is `Yes`, or
  - `Action:Set enable`


- Dragging start any chess of this mini board, or `Action:Try to drag`
  - Pull out from main board, if property `Drag Pull` is `Yes`.
  - `Condition:On dragging start`


- Dragging
  - Move all chess with mini board, if property `Pin mode` of [mini board](rex_miniboard.html) is `Yes`.
  - If any chess of this mini board is overlapped with the main board,
      - Align the physical position of all chess to main board
          - property `Align to grids` is `Yes`, or
          - `Action:Set align mode`
      - `Condition:On dragging at main board`


### Drop

- Drop (i.e. touch release), or `Action:Force to drop`.
  - `Condition:On dropped`
  - `Condition:On dropped at main board`
###Logical position at overlapped main board


- If any chess of mini board is overlapping with a main board
  - `Expression:MBUID`, overlapped main board.
  - (`Expression:LX`, `Expression:LY`), logical position of mini board on overlapped main board
- Else
  - `Expression:MBUID` = -1
  - (`Expression:LX`, `Expression:LY`) = (-1, -1)

Trigger `Condition:On logical position changed` when logical position (`Expression:LX`, `Expression:LY`)  is changed.