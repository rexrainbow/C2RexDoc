# [Index](index.html) > [Board](board.index.html) > rex_slg_movement

## Introduction

Get move-able area, or moving path between two chess/tiles on an orthogonal or isometric, or hexagonal board.

## Links

- [Plugin](https://dl.dropboxusercontent.com/u/5779181/C2Repo/Zip/plugins/rex_slg_movement.7z)

- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_slg_movement.html)

- [Discussion thread](https://www.scirra.com/forum/plugin-slg-movement_t75938)

  ​

----

[TOC]

## Dependence

- [rex_board](rex_board.html)
- [rex_ginstgroup plugin](rex_ginstgroup.html)

## Usage##

### Get moveable area

```mermaid
graph TB

Start["Action:Get moveable area"] --> NextNeighbor[Get a neighbor]
NextNeighbor --> GetCost{"Get cost of this neighbor<br>---<br>parameter 'Moving cost' is a string?"}
GetCost --> |Yes| CondOnCost["+Condition:On cost<br>-Action:Set cost"]
CondOnCost --> |Get cost from events| Cost["Cost<br>Moving cost of this neighbor"]
GetCost --> |"No<br>Constant cost from parameter"| Cost
Cost --> SubRemainingCost["Remaining moving point =<br>Remaining moving point - cost"]
SubRemainingCost --> HasRemainingCost{Remaining moving point > 0}
HasRemainingCost --> |Yes| PutNeighbor[Put the neighbor into result group,<br>Push this neighbor into stack,<br>Move to this neighbor]
PutNeighbor --> NextNeighbor[Get a neighbor]

HasRemainingCost --> |No| BackToPreviousState{Pop up stack}
BackToPreviousState --> |Stack is not empty| NextNeighbor
BackToPreviousState --> |Stack is empty| Completed

Completed --> Filter["Filter result group<br>----<br>+Condition:On filter"]
```



### Get moving path

