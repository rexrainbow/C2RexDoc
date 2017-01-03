# [Categories](categories.index.html) > [Input](input.index.html) > rex_dragdrop2

## Introduction

Drag and drop this object.

## Links

- [Plugin](https://dl.dropboxusercontent.com/u/5779181/C2Repo/Zip/behaviors/rex_dragdrop2.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/behavior_rex_dragdrop2.html)
- [Discussion thread](https://www.scirra.com/forum/behavior-moveto_t63156)


----

[TOC]

## Dependence

- [rex_touchwrap plugin](rex_touchwrap.html)

## Usage

```mermaid
graph TB

Idle --> |"Drag<br>Action:Try to drag"| CondOnDraggingStart["Condition:On dragging start"]

subgraph Dragging
CondOnDraggingStart --> Dragging["Dragging<br> <br>Condition:Is dragging"]
Dragging --- ExpDragging["Dragging start<br>----<br>Expression:DragStartX<br>Expression:DragStartY<br> <br> <br>Current dragging<br>----<br>Expression:X<br>Expression:Y<br>  <br> <br>Dragging distance and angle<br>----<br>Expression:DragDistance<br>Expression:DragAngle<br> <br> <br>Instance position<br>----<br>Expression:InstStartX<br>Expression:InstStartY"]
Dragging --> |Dragging moving| OnDraggingMoving["Condition:On dragging moving start<br>Condition:On dragging moving end"]
end

Dragging --> |"Drop<br>Action:Drop"| CondOnDrop["Condition:On dropped"]
CondOnDrop --> Idle

subgraph Idle
Idle
end
```

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!657&authkey=!AEaws3hcpNwYJ3c&ithint=file%2c.capx)

### Drag

- Drag-able
  - Property `Activated` is `Yes`, or
  - `Action:Set enable`
  - `Condition:Is enabled`


- Drag object, or `Action:Try to drag`  ([Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!652&authkey=!AHNRdP6Xe3_msMs&ithint=file%2c.capx))
  - `Condition:On dragging start`


- Dragging
  - `Condition:Is dragging`
  - Position
    - Touch position of dragging start : (`Expression:DragStartX`, `Expression:DragStartY`)
    - Position of current dragging : (`Expression:X`, `Expression:Y`)
    - Distance between dragging start to current dragging
      - `Expression:DragDistance`
      - `Condition:Compare drag-distance`
    - Angle between dragging start to current dragging
      - `Expression:DragAngle `
      -  `Condition:Compare drag-angle`
    - Instance position of dragging start : (`Expression:InstStartX`, `Expression:InstStartY`)
  - Dragging moving
    - `Condition:On dragging moving start`
    - `Condition:On dragging moving end`
    - `Condition:Is dragging moving`
  - Dragging axis  ([Sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHlHzP_M41kf5mgRZP))
    - Object moves along property `Axis angle`
      - `Both`
      -  `Horizontal` (0 degrees)
        - Spin axis
          - Property  `Axis angle`
          - `Action:Set angle`
          - `Expression:AxisAngle `
      - `Vertical` (90 degrees)

### Drop

- Drop (i.e. touch release), or `Action:Drop`.
  - `Condition:On dropped`