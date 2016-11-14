# [Index](index.html) > Board

## Board

- Core
  - [Board](rex_board.html)
  - SquareTx
  - HexTx
- Application
  - Chess
  - Grid Move
  - Path finding
  - Matching
  - Edge
  - Logic mask
  - Hex shape

```mermaid
graph LR

Core((Core)) --> Board
Board --- SquareTx
Board --- HexTx

Application((Application)) --> Chess
Application --> GridMove[Grid move]
Application --> SLGMovement[Path finding]
Application --> Matcher[Matching]
Application --> Monopoly
Application --> Edge
Application --> LogicMask[Logic mask]
Application --> HexShapeMap[Hex shape map]
```

## Mini board

```mermaid
graph LR
MiniboardRoot((Miniboard)) --> Miniboard[Mini board]
MiniboardRoot --> MiniboardMove[Move]
MiniboardRoot --> MiniboardRotate[Rotate]
MiniboardRoot --> MiniboardTouch[Touch]
```

## TMX

```mermaid
graph LR
TMX((TMX Importer v2)) --> TMXIMporter[TMX importer]
TMXIMporter --- JSONParser[JSON parser]
TMXIMporter --- XMLParser[XML parser]
```

## Random map

```mermaid
graph LR

RandomMap((Random map)) --> MazeGen[Maze gen]
RandomMap --> DungeonGen[Dungeon gen]
```

