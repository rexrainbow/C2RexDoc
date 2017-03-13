# [Categories](categories.index.html) > [System](system.index.html) > rex_comment

## Introduction

Get/set properties (x,y,angle,opacity,private variable) by UID without picking first.

## Links

- [Plugin](https://rexrainbow.github.io/C2RexDoc/repo/rex_uid2prop.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_uid2prop.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-rex-uid2prop-get-properties-by-uid_t109149)


----

[TOC]

## Dependence

None

## Usage

### Get property

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!636&authkey=!ABHbzQQ50xYFEjk&ithint=file%2c.capx)

- Position : (`Expression:X(UID)`, `Expression:Y(UID))`
- Angle : `Expression:Angle(UID)`
- Size : `Expression:Width(UID)`, `Expression:Height(UID)`
- Appear : `Expression:Opacity(UID)`, `Expression:Visible(UID)`
- Image point : `Expression:ImgptX(UID, ImagePoint)`, `Expression:ImgptY(UID, ImagePoint)`

  - Parameter `ImagePoint` : string name or number index of image point
- Private variable : `Expression:PV(UID, Alias)`

  - `Action:Define alia`, to define alias
- Distance between 2 instances : `Expression:DistanceTo(UIDA, UIDB)`
- Angle from an instance to another : `Expression:AngleTo(UIDA, UIDB)`


### Set property

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!1947&authkey=!AIC-c5WPK1ZT8z4&ithint=file%2ccapx)

- `Action:Destroy instance`
- Position
  - `Action:Set X`
  - `Action:Set Y`
  - `Action:Set position`
  - `Action:Set position to another object`
  - `Action:Move forward`
  - `Action:Move at angle`
- Angle
  - `Action:Set angle`
  - `Action:Rotate clockwise`
  - `Action:Rotate counter-clockwise`
  - `Action:Rotate toward angle`
  - `Action:Rotate toward position`
  - `Action:Set angle toward position`
- Appear
  - `Action:Set visible`
  - ``Action:Set opacity`
- Size
  - `Action:Set width`
  - `Action:Set height`
  - `Action:Set size`

