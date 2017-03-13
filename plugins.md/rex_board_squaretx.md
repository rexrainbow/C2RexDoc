# [Categories](categories.index.html) > [Board](board.index.html) > rex_board_squaretx

## Introduction

This plugin provides orthogonal or isometric. or staggered physical layout for [rex_board](rex_board.html) plugin.

## Links

- [Plugin](https://rexrainbow.github.io/C2RexDoc/repo/rex_board_squareTx.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_board_squaretx.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-board-layout2board-behavior-grid-move_t69647)

----

[TOC]

## Dependence

None

## Usage

### Connect to board

Assign this object as the parameter in `Action:Setup layout` in [rex_board](rex_board.html) plugin, to configure this board to be an orthogonal or isometric board. 

### Layout

The layout type is set at `Orientation` in properties table, or sets by `Action:Set orientation`, or `Action:Set orientation by number`.

### Position of each cell

In properties table, (`X at (0,0)`, `Y at (0,0)`) is the physical position of logical (0,0). `Width` and `Height` is the size of cell. Or uses `Action:Set position offset`, `Action:Set cell size` to set these properties.

----

### Directions

Property `Directions` is used to define the directions of neighbors. It will affect the result which related on the information of neighbors, like move-able area and moving path searching in [rex_slg_movement plugin](rex_slg_movement.html), wander result in [rex_grid_move behavior](rex_grid_move.html).

- Sets to `4 directions` would define the neighbors only at 
  - right side
  - down side
  - left side
  - up side
- Set to `8 directions` would define the neighbors at 
  - right side
  - down side
  - left side
  - up side
  - right-down side
  - left-down side
  - left-up side
  - right-up side

This property could be changed by `Action:Set directions` at run-time.

#### Direction code

These expressions are the code of directions.

- `Expression:DIRRIGHT` : 0
- `Expression:DIRDOWN` : 1
- `Expression:DIRLEFT` : 2
- `Expression:DIRUP` : 3
- `Expression:DIRRIGHTDOWN` : 4
- `Expression:DIRLEFTDOWN` : 5
- `Expression:DIRLEFTUP` : 6
- `Expression:DIRRIGHTUP` : 7

These could be used used in `Condition:Pick neighbor chess`, or `Action:Pick neighbor chess` in [rex_board](rex_board.html) plugin.

----

### Transfer physical position from logical position

Get physical position from logical position by ( `Expression:LXY2PX` , `Expression:LXY2PY` ).

