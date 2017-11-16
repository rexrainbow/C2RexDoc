# [Categories](categories.index.html) > [Text](text.index.html) > rex_tagtext

## Introduction

Displays text with multi-color, font face, or font size with tags.

## Links

- [Plugin](https://rexrainbow.github.io/C2RexDoc/repo/rex_TagText.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_tagtext.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-tag-text_t92363)

----

[TOC]

## Dependence

None

## Usage

### Predefined tag

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!431&authkey=!AB6u_vnpZZk1Vo8&ithint=file%2c.capx)

1. Define tag

   - `Condition:Define tag (class)`

     - `Action:Set font face`
     - `Action:Set font size`
     - `Action:Set font color`
     - `Action:Set font style`
     - `Action:Set stroke`
     - `Action:Set shadow`
     - `Action:Set underline`
     - `Action:Insert image`

   - `Action:Add by CSS`  ([sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!2143&authkey=!AHOZDrQ8WROWrfQ&ithint=file%2ccapx))

     - For example, add "red" tag by

     ```CSS
     red {
         color:#F00;
         font-size:20pt;
         text-shadow:2px 2px 2px #000;
         underline:yellow 5px 0px;
         stroke: blue 2px;
     }
     ```

     - Color: `color:color`
     - Stroke: `stroke:color lineWidth`
     - Font size: `font-size:size`
     - Font: `font:font-weight font-size font-family`
       - `font:900 20pt arial,sans-serif`
     - Text shadow: `text-shadow:offsetX offsetY blur color`
     - Underline: `underline:color thickness offsetY`
     - Insert image: `image:key`

2. Use tags in text

   - `<class=tag_name> characters </class>`

Tags are *private* for each tag text instance.

#### Manage images

- `Action:Add image`, to add image with a key
  - Parameter `Key`: any character except `]`
  - Parameter `Image` : [official sprite object](https://www.scirra.com/manual/115/sprite)
    - Image size is equal to sprite size, i.e. set sprite size before added  ([Sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHlhMpTLQ2_V8goUkq))


- `Action:Remove image`
- `Action:Remove all`

Images are *shared* for all tag text and bbcode text.

----

### Inline style

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!432&authkey=!AKGgARJjJ8IFd68&ithint=file%2c.capx)

- Color: `<style="color:#F00;">Some text</style>`
- Stroke color: `<style="stroke:blue 2px;">Some text</style>`
- Font family: `<style="font-family:Georgia;">Some text</style>`
- Font size: `<style="font-size:20px;">Some text</style>`
- Font weight: `<style="font-weight:bold;">Some text</style>`
- Font style: `<style="font-style:italic;">Some text</style>`
- Font: `<style="font:900 20pt arial,sans-serif">Some text</style>`
- Text shadow: `<style="text-shadow:2px 2px 2px #000">Some text</style>`
- underline: `<style="underline:yellow 5px 0px">Some text</style>`
- Insert image: `<style="image:smile;"></style>`

or mix them

- `<style="color:#F00;font-size:20px">Some text</style>`

----

### Baseline

- Property `Baseline` is `Top`
  - The same as [official text object](https://www.scirra.com/manual/116/text)
- Property `Baseline` is `Alphabetic`
  - Used when text with multiple sizes
  - Set property `Shift down` to pull down text

----

### Lock canvas

[Sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHlXWDvVvubsxoUlkc)

When resizing text object,

- resize characters, if property `Lock canvas size` is `Yes`, or `Action:Lock canvas size`
- keep size of characters to render more or less characters of a line, if property `Lock canvas size` is `No`, or `Action:Unlock canvas size`

----

### Save & load

It supports official saving & loading feature, but it will not save images.