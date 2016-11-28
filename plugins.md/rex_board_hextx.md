# [Categories](categories.index.html) > [Board](board.index.html) > rex_board_hextx

## Introduction

This plugin provides hexagonal physical layout for [rex_board](rex_board.html) plugin.

## Links

- [Plugin](https://dl.dropboxusercontent.com/u/5779181/C2Repo/Zip/plugins/rex_board_hexTx.7z)

- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_board_hextx.html)

- [Discussion thread](https://www.scirra.com/forum/plugin-board-layout2board-behavior-grid-move_t69647)

  ​

----

[TOC]

## Dependence

None

## Usage

### Connect to board

Assign this object as the parameter in `Action:Setup layout` in [rex_board](rex_board.html) plugin, to configure this board to be an orthogonal or isometric board. 

### Layout

There are 4 kinds of layout mode set by properties `Axis` and `Indent`,

- Left-Right
- Left-Right + Indent first
- Up-Down
- Up-Down + Indent first

Or sets by `Action:Set layout`, `Action:Set layout by number`.

### Position of each cell

In properties table, (`X at (0,0)`, `Y at (0,0)`) is the physical position of logical (0,0). `Width` and `Height` is the size of cell. Or uses `Action:Set position offset`, `Action:Set cell size` to set these properties.

---

### Direction

These expressions are the code of direction.

- Left-Right axis
  - `Expression:DIRLRRIGHT` : 0
  - `Expression:DIRLRDOWNRIGHT` : 1
  - `Expression:DIRLRDOWNLEFT` : 2
  - `Expression:DIRLRLEFT` : 3
  - `Expression:DIRLRUPLEFT` : 4
  - `Expression:DIRLRUPRIGHT` : 5
- Up-Down axis
  - `Expression:DIRUDDOWNRIGHT` : 0
  - `Expression:DIRUDDOWN` : 1
  - `Expression:DIRUDDOWNLEFT` : 2
  - `Expression:DIRUDUPLEFT` : 3
  - `Expression:DIRUDUP` : 4
  - `Expression:DIRUDUPRIGHT` : 5

These could be used used in `Condition:Pick neighbor chess`, or `Action:Pick neighbor chess` in [rex_board](rex_board.html) plugin.

----

### Transfer physical position from logical position

Get physical position from logical position by ( `Expression:LXY2PX` , `Expression:LXY2PY` ).

