---
autoEqnLabels: false
autoSectionLabels: false
ccsDelim: ", "
ccsLabelSep:  —
ccsTemplate: $$i$$$$ccsLabelSep$$$$t$$
chapDelim: .
chapters: false
chaptersDepth: 1
codeBlockCaptions: true
cref: false
crossrefYaml: pandoc-crossref.yaml
date: "2022-02-14"
eqLabels: arabic
eqnBlockInlineMath: false
eqnBlockTemplate: |
  <table>
  <colgroup>
  <col style="width: 90%" />
  <col style="width: 10%" />
  </colgroup>
  <tbody>
  <tr class="odd">
  <td style="text-align: center;"><span
  class="math display"><em>t</em></span></td>
  <td style="text-align: right;"><span
  class="math display"><em>i</em></span></td>
  </tr>
  </tbody>
  </table>
eqnIndexTemplate: ($$i$$)
eqnInlineTemplate: $$e$$$$equationNumberTeX$${$$i$$}
eqnPrefix:
- eq.
- eqns.
eqnPrefixTemplate: $$p$$ $$i$$
equationNumberTeX: \qquad
figLabels: arabic
figPrefix:
- fig.
- figs.
figPrefixTemplate: $$p$$ $$i$$
figureTemplate: $$figureTitle$$ $$i$$$$titleDelim$$ $$t$$
figureTitle: Figure
lastDelim: ", "
linkReferences: false
listings: false
listingTemplate: $$listingTitle$$ $$i$$$$titleDelim$$ $$t$$
listingTitle: Listing
listItemTitleDelim: .
lofItemTemplate: |
  $$lofItemTitle$$$$i$$$$listItemTitleDelim$$ $$t$$  
lofTitle: |
  # List of Figures
lolItemTemplate: |
  $$lolItemTitle$$$$i$$$$listItemTitleDelim$$ $$t$$  
lolTitle: |
  # List of Listings
lotItemTemplate: |
  $$lotItemTitle$$$$i$$$$listItemTitleDelim$$ $$t$$  
lotTitle: |
  # List of Tables
lstLabels: arabic
lstPrefix:
- lst.
- lsts.
lstPrefixTemplate: $$p$$ $$i$$
metaDesc: An example post showing off all functionalities and styles
metaTitle: Example post
nameInLink: false
numberSections: false
pairDelim: ", "
rangeDelim: "-"
refDelim: ", "
refIndexTemplate: $$i$$$$suf$$
secHeaderDelim: 
secHeaderTemplate: $$i$$$$secHeaderDelim[n]$$$$t$$
secLabels: arabic
secPrefix:
- sec.
- secs.
secPrefixTemplate: $$p$$ $$i$$
sectionsDepth: 0
subfigGrid: false
subfigLabels: alpha a
subfigureChildTemplate: $$i$$
subfigureRefIndexTemplate: $$i$$$$suf$$ ($$s$$)
subfigureTemplate: $$figureTitle$$ $$i$$$$titleDelim$$ $$t$$. $$ccs$$
tableEqns: false
tableTemplate: $$tableTitle$$ $$i$$$$titleDelim$$ $$t$$
tableTitle: Table
tags:
- first
- example
- test
tblLabels: arabic
tblPrefix:
- tbl.
- tbls.
tblPrefixTemplate: $$p$$ $$i$$
title: Example post
titleDelim: ":"
---

\[\[toc\]\]

## Heading 2

``` markdown
## Heading 2 ##

-OR-

Heading 2
--------------- 
```

### Heading 3

``` markdown
### Heading 3 ###
```

#### Heading 4

``` markdown
#### Heading 4 ####
```

Common text

``` markdown
Common text
```

*Emphasized text*

``` markdown
_Emphasized text_ or *Emphasized text*
```

~~Strikethrough text~~

``` markdown
~~Strikethrough text~~
```

**Strong text**

``` markdown
__Strong text__ or **Strong text**
```

***Strong emphasized text***

``` markdown
___Strong emphasized text___ or ***Strong emphasized text***
```

[Named Link](http://www.google.fr/ "Named link title") and
http://www.google.fr/ or <http://example.com/>

``` markdown
[Named Link](http://www.google.fr/ "Named link title") and http://www.google.fr/ or <http://example.com/>
```

[heading-2](#heading-2 "Goto heading-2")

``` markdown
[heading-1](#heading-1 "Goto heading-1")
```

Table, like this one :

| First Header | Second Header |
|--------------|---------------|
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

``` markdown
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
```

Adding a pipe `|` in a cell :

| First Header | Second Header |
|--------------|---------------|
| Content Cell | Content Cell  |
| Content Cell | \|            |

``` markdown
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  |  \| 
```

Left, right and center aligned table

| Left aligned Header | Right aligned Header | Center aligned Header |
|:--------------------|---------------------:|:---------------------:|
| Content Cell        |         Content Cell |     Content Cell      |
| Content Cell        |         Content Cell |     Content Cell      |

``` markdown
Left aligned Header | Right aligned Header | Center aligned Header
:---                | ---:                 | :---:
Content Cell        | Content Cell         | Content Cell
Content Cell        | Content Cell         | Content Cell
```

`code()`

``` markdown
`code()`
```

``` javascript
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

```` markdown
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
````

- Bullet list
  - Nested bullet
    - Sub-nested bullet etc
- Bullet list item 2

``` markdown
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

1.  A numbered list
    1.  A nested numbered list
    2.  Which is numbered
2.  Which is numbered

``` markdown
1. A numbered list
    1. A nested numbered list
    2. Which is numbered
2. Which is numbered
```

- [ ] An uncompleted task
- [x] A completed task

``` markdown
- [ ] An uncompleted task
- [x] A completed task
```

- [ ] An uncompleted task
  - [ ] A subtask

``` markdown
- [ ] An uncompleted task
    - [ ] A subtask
```

> Blockquote \> Nested blockquote

``` markdown
> Blockquote
    >> Nested Blockquote
```

| \_H  | or  | iz  | ontal line :\_ |
|------|-----|-----|----------------|
| \`\` | \`m | ar  | kdown          |


    _Image with alt :_

    ![picture alt](https://via.placeholder.com/200x150 "Title is optional")

    ```markdown
    ![picture alt](http://via.placeholder.com/200x150 "Title is optional")

Foldable text:

<details>
<summary>
Title 1
</summary>
<p>
Content 1 Content 1 Content 1 Content 1 Content 1
</p>
</details>
<details>
<summary>
Title 2
</summary>
<p>
Content 2 Content 2 Content 2 Content 2 Content 2
</p>
</details>

``` html
<details>
  <summary>Title 1</summary>
  <p>Content 1 Content 1 Content 1 Content 1 Content 1</p>
</details>
```

``` html
<h3>HTML</h3>
<p> Some HTML code here </p>
```

Link to a specific part of the page:

[Go To TOP](#TOP)

``` markdown
    [text goes here](#section_name)
              section_title<a name="section_name"></a>    
```

Hotkey:

<kbd>⌘F</kbd>

<kbd>⇧⌘F</kbd>

``` html
<kbd>⌘F</kbd>
```

Hotkey list:

| Key       | Symbol |
|-----------|--------|
| Option    | ⌥      |
| Control   | ⌃      |
| Command   | ⌘      |
| Shift     | ⇧      |
| Caps Lock | ⇪      |
| Tab       | ⇥      |
| Esc       | ⎋      |
| Power     | ⌽      |
| Return    | ↩      |
| Delete    | ⌫      |
| Up        | ↑      |
| Down      | ↓      |
| Left      | ←      |
| Right     | →      |

Emoji:

:exclamation: Use emoji icons to enhance text. :+1: Look up emoji codes
at [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/)

``` markdown
Code appears between colons :EMOJICODE:
```

Inline $\LaTeX$

``` latex
$\LaTeX$
```

Block equation:

$$E = mc^2$$

``` latex
$$E = mc^2$$
```

Footnotes:

Something to read for later[^1]

``` markdown
Adding a footnote[^1]

[^1]: Content of the footnote
```

[^1]: [A Brief History of
    Time](https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxiaW1hbnNpcnBoeXNpY3N8Z3g6NDI1YjFjNzAwZjNjNzc4NA)
