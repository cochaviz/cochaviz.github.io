---
title: 'Example post'
metaTitle: 'Example post'
metaDesc: 'An example post showing off all functionalities and styles'
date: '2022-02-14'
tags:
  - first
  - example 
  - test
---


[[toc]]

## Heading 2 ##

```markdown
## Heading 2 ##

-OR-

Heading 2
--------------- 
```

### Heading 3 ###

```markdown
### Heading 3 ###
```

#### Heading 4 ####
```markdown
#### Heading 4 ####
```

Common text
```markdown
Common text
```

_Emphasized text_

```markdown
_Emphasized text_ or *Emphasized text*
```

~~Strikethrough text~~

```markdown
~~Strikethrough text~~
```

__Strong text__

```markdown
__Strong text__ or **Strong text**
```

___Strong emphasized text___

```markdown
___Strong emphasized text___ or ***Strong emphasized text***
```

[Named Link](http://www.google.fr/ "Named link title") and http://www.google.fr/ or <http://example.com/>

```markdown
[Named Link](http://www.google.fr/ "Named link title") and http://www.google.fr/ or <http://example.com/>
```

[heading-2](#heading-2 "Goto heading-2")
    
```markdown
[heading-1](#heading-1 "Goto heading-1")
```

Table, like this one :

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

```markdown
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
```

Adding a pipe `|` in a cell :

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | \|

```markdown
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  |  \| 
```

Left, right and center aligned table

Left aligned Header | Right aligned Header | Center aligned Header
:---                | ---:                 | :---:
Content Cell        | Content Cell         | Content Cell
Content Cell        | Content Cell         | Content Cell

```markdown
Left aligned Header | Right aligned Header | Center aligned Header
:---                | ---:                 | :---:
Content Cell        | Content Cell         | Content Cell
Content Cell        | Content Cell         | Content Cell
```

`code()`

```markdown
`code()`
```

```javascript
var specificLanguage_code = 
{
    "data": {
        "lookedUpPlatform": 1,
        "query": "Kasabian+Test+Transmission",
        "lookedUpItem": {
            "name": "Test Transmission",
            "artist": "Kasabian",
            "album": "Kasabian",
            "picture": null,
            "link": "http://open.spotify.com/track/5jhJur5n4fasblLSCOcrTp"
        }
    }
}
```

~~~markdown
```javascript
var specificLanguage_code = 
{
    "data": {
        "lookedUpPlatform": 1,
        "query": "Kasabian+Test+Transmission",
        "lookedUpItem": {
            "name": "Test Transmission",
            "artist": "Kasabian",
            "album": "Kasabian",
            "picture": null,
            "link": "http://open.spotify.com/track/5jhJur5n4fasblLSCOcrTp"
        }
    }
}
```
~~~

* Bullet list
    * Nested bullet
        * Sub-nested bullet etc
* Bullet list item 2

```markdown
* Bullet list
    * Nested bullet
        * Sub-nested bullet etc
* Bullet list item 2

-OR-

- Bullet list
    - Nested bullet
        - Sub-nested bullet etc
- Bullet list item 2 
```

1. A numbered list
    1. A nested numbered list
    2. Which is numbered
2. Which is numbered

~~~markdown
1. A numbered list
    1. A nested numbered list
    2. Which is numbered
2. Which is numbered
~~~

- [ ] An uncompleted task
- [x] A completed task

~~~ markdown
- [ ] An uncompleted task
- [x] A completed task
~~~

- [ ] An uncompleted task
    - [ ] A subtask

```markdown
- [ ] An uncompleted task
    - [ ] A subtask
```

> Blockquote
>> Nested blockquote
```markdown
> Blockquote
    >> Nested Blockquote
```
_Horizontal line :_
- - - -
```markdown
- - - -
```

_Image with alt :_

![picture alt](https://via.placeholder.com/200x150 "Title is optional")

```markdown
![picture alt](http://via.placeholder.com/200x150 "Title is optional")
```

Foldable text:

<details>
  <summary>Title 1</summary>
  <p>Content 1 Content 1 Content 1 Content 1 Content 1</p>
</details>
<details>
  <summary>Title 2</summary>
  <p>Content 2 Content 2 Content 2 Content 2 Content 2</p>
</details>

```html
<details>
  <summary>Title 1</summary>
  <p>Content 1 Content 1 Content 1 Content 1 Content 1</p>
</details>
```

```html
<h3>HTML</h3>
<p> Some HTML code here </p>
```

Link to a specific part of the page:

[Go To TOP](#TOP)
```markdown
    [text goes here](#section_name)
              section_title<a name="section_name"></a>    
```   

Hotkey:

<kbd>⌘F</kbd>

<kbd>⇧⌘F</kbd>

```html
<kbd>⌘F</kbd>
```

Hotkey list:

| Key | Symbol |
| --- | --- |
| Option | ⌥ |
| Control | ⌃ |
| Command | ⌘ |
| Shift | ⇧ |
| Caps Lock | ⇪ |
| Tab | ⇥ |
| Esc | ⎋ |
| Power | ⌽ |
| Return | ↩ |
| Delete | ⌫ |
| Up | ↑ |
| Down | ↓ |
| Left | ← |
| Right | → |

Emoji:

:exclamation: Use emoji icons to enhance text. :+1:  Look up emoji codes at [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/)

```markdown
Code appears between colons :EMOJICODE:
```

Inline $\LaTeX$

```latex
$\LaTeX$
```

Block equation:

$$E = mc^2$$

```latex
$$E = mc^2$$
```

Footnotes:

Something to read for later[^1]

```markdown
Adding a footnote[^1]

[^1]: Content of the footnote
```

[^1]: [A Brief History of Time](https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxiaW1hbnNpcnBoeXNpY3N8Z3g6NDI1YjFjNzAwZjNjNzc4NA)
