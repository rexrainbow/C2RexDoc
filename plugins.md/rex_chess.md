# [Categories](categories.index.html) > [Board](board.index.html) > rex_chess

## Introduction

This plugin provides some helper methods to get logical position of chess, or to pick chess, or to move chess, etc.

## Links

- [Plugin](https://dl.dropboxusercontent.com/u/5779181/C2Repo/Zip/behaviors/rex_chess.7z)

- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/behavior_rex_chess.html)

- [Discussion thread](https://www.scirra.com/forum/plugin-board-layout2board-behavior-grid-move_t69647)

  ​

----

[TOC]

## Dependence

None

## Usage

### Add

`Action:Add chess` adds this chess instance to a board object.

### Remove

`Action:Remove chess` removes chess instance from current board.

### Move

These actions change the logical position only, physical position won't be changed.

- `Action:Move chess`, or `Action:Move chess by UID` : move this chess to target tile, the logical z index will not be changed.

- `Action:Move chess to xyz` : moves chess to specific logical position.

- `Action:Swap chess by UID` : swaps the logical position with another chess by UID.

###Get logical position

Get the logical position of this chess by  (`Expression:LX`, `Expression:LY`, `Expression:LZ`). 

Get the board UID by `Expression:BoardUID`, return (-1) if chess instance is not on any board.

### Get other chess's UID

- `Expression:LZ2UID` : get other chess's UID which stands on the same logical XY position with specific z-index.
- `Expression:DIR2UID` : get UID of neighbor chess, return (-1) if no chess picked. 
  - The direction code could be presented by expressions of layout plugin ([rex_board_squareTx](rex_board_squaretx.html), or [rex_board_hexTx](rex_board_hextx.html)). 
  - Add 2nd parameter to indicate the z-index. 

### Test conditions

These test condition would return true if testing pass, these condition will also affect the current SOL.

- Logical position
  - `Condition:Compare LX`
  - `Condition:Compare LY`
  - `Condition:Compare LZ`,
- Is empty above 
  - `Condition:No chess above`, returns true if no chess is put above this chess. i.e. the count of z-index is 1. 
  - `Condition:No chess at LZ`, returns true if no other chess at the specific z-index.


- On the board
  - `Condition:On the board`, returns true if this chess instance is at the specific board. 

- Are neighbors
  - `Condition:Are neighbors (UID)` , returns true if this chess and another chess are neighbors.

- Is a tile

  - `Condition:Is a tile `, returns true if this chess is a tile (z=0).


----

## More samples

- Pick an empty cell randomly -- [Sample capx](https://1drv.ms/u/s%21Am5HlOzVf0kHhCXcWcXRP77I-oWc)
  - Mix `Condition:No chess at LZ` with other test conditions and finally pick a chess instance randomly by `system action: pick random instance`.
- Drag tile/chess on an isometric board -- [Sample capx](https://1drv.ms/u/s%21Am5HlOzVf0kHlChl6hq13rqvvjHH)
- Swap chess from two different board -- [Sample capx](https://1drv.ms/u/s%21Am5HlOzVf0kHk3SRlSLBM-TnaVRA)