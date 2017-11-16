# BBcode text

## Introduction

Displays text with [BBCode](https://www.scirra.com/forum/faq.php?mode=bbcode) encode.

## Links

- [Plugin](https://rexrainbow.github.io/C2RexDoc/repo/rex_bbcodeText.7z)
- [ACE table](https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_bbcodetext.html)
- [Discussion thread](https://www.scirra.com/forum/plugin-bbcode-text_t169377)

----

[TOC]

## Dependence

None

## Usage

### BBCode

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E%212222&authkey=%21AAB0NF6Omx-yS7w&ithint=file%2ccapx)

- Bold: `[b]text[/b]`
- Italic: `[i]text[/i]`
- Color: `[color=red]text[/color]`
- Stroke: `[stroke=red]text[/stroke]`
- Size: `[size=18]text[/text]`
- Underline: `[u]text[/u]`
- Underline with color setting: `[u=red]text[/u]`
- Shadow: `[shadow]text[/shadow]`
- Insert image: `[img=key]`
- Transparent text filling: `[color=none]text[/color]`

#### Stroke

- Property `Stroke line width`, or `Action:Set line width`

#### Underline

[Sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!2321&authkey=!AJgGSLeKNaRgPCE&ithint=file%2ccapx)

- Property `Underline thickness`, or `Action:Set thickness`
- Property `Underline offset Y`, or `Action:Set offset Y`

#### Shadow

- Properties `Shadow offset X`, `Shadow offset Y`, `Shadow blur`,  `Shadow color`, or `Action:Set shadow`

#### Manage images

- `Action:Add image`, to add image with a key
  - Parameter `Key` : any character except `]`
  - Parameter `Image` : [official sprite object](https://www.scirra.com/manual/115/sprite)
    - Image size is equal to sprite size, i.e. set sprite size before added  ([Sample capx](https://1drv.ms/u/s!Am5HlOzVf0kHlXdpmyObSIGPFO8P))


- `Action:Remove image`
- `Action:Remove all`

Images are *shared* for all tag text and bbcode text.

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

---

### Save & load

It supports official saving & loading feature, but it will not save images.

----

### Scrolling and typing

- Scrolling: [sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!2220&authkey=!ANln0i7QKMx47Y0&ithint=file%2ccapx)
- Typing: [sample capx](https://onedrive.live.com/redir?resid=7497FD5EC94476E!2221&authkey=!AEbaSrVnNXlyF40&ithint=file%2ccapx)