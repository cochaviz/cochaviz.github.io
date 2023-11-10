---
author: Zohar Cochavi
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
date: "2023-11-06"
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
- reverse-engineering
- wip
tblLabels: arabic
tblPrefix:
- tbl.
- tbls.
tblPrefixTemplate: $$p$$ $$i$$
title: Baby’s First Reverse Engineering
titleDelim: ":"
---

\[\[ toc \]\]

## Introduction

A little while ago, my dad came to me with the request whether I would
be able to crack some long-forgotten abandon-ware. As it happened, I had
binged just about all of
[jeFF0Falltrades](https://www.youtube.com/@jeFF0Falltrades)’s content
which, together with a healthy dose of youthful over-confidence, made me
just about the only person who could solve this little challenge. Not
that I am well-equipped or any way more qualified than many other people
in the field of reverse engineering, I just didn’t tell them about the
challenge. **Don’t be the best, be the first**.

First, I should explain what we are exactly going to do, and why I would
consider cracking this software ethical. Then, I will walk you through
the different paths I took, both successful and unsuccessful. As I don’t
know much about reverse engineering but am very interested in it, I
think this might be useful for anyone who, too, is interested but does
not have much knowledge. With that said, I will cut the talk and show
how I solved this, admittedly simple, challenge.

## The Prompt and the Ethics

The program my dad worked with is an executable that takes geometric
data regarding a ship and allows you to modify it in some particular
ways. I won’t pretend like I know exactly why it’s useful, but he deemed
it very much so. The program itself is from about 2009 and the installer
will only complete when run in Windows Vista compatibility mode. Long
story short, there is nothing to be found about this software online and
the only reason it has not disappeared from the face of the earth is my
father’s questionable but meticulous back-up methodology. Sadly, though,
the backup was not meticulous enough and the license to use the program
got lost.

Installing the program for the first time shows the following window.

<figure id="fig:first_run">
<img
src="/images/post/babys-first-reverse-engineering/validate_this_installation.png"
alt="A program window showing that there are 7 free runs left." />
<figcaption>Figure 1: A program window showing that there are 7 free
runs left.</figcaption>
</figure>

Clearly, we can run this program and use it fully without a license. The
problem is that we can only use this 7 times, after which we get the
following message.

<figure id="fig:no_more_free_runs">
<img
src="/images/post/babys-first-reverse-engineering/no_more_free_runs.png"
alt="A program window showing that we are out of free runs and have to validate the program." />
<figcaption>Figure 2: A program window showing that we are out of free
runs and have to validate the program.</figcaption>
</figure>

The keen-eyed among you, might have already guessed that it has to keep
track of these free runs or trails, based on some process-independent
state, i.e. it has to write it to some file. If we can find a way to
manipulate this state or its processing, we can crack the software.

Still, cracking is generally considered unethical because it directly
interferes with the monetary interests of the software developer who
wrote the program. In this case, we could make the argument that my dad
simply lost the key and should therefore be allowed to use the program.
Still, you might say that publicizing a write-up like this goes further
than just allowing a person who bought the software to get what they
paid for. In which case I would say: “Good point!”.

In this case, however, I wouldn’t consider the monetary interests of the
author relevant anymore because the software is not publicly available
or sold anywhere. Therefore, cracking this software shouldn’t be
considered unethical. Additionally, I’m only publicizing *how* to crack
this software, not distributing a cracked version of this software. So
anyone thinking that copyright might be an issue need not worry.

If there is anyone that still thinks this is in some way not justified,
please let me know. I love a great discussion.

## Cracking

The goal of this challenge is therefore to somehow use the free trails
to crack the program and provide my dear old father with his equally
ancient software (love you).

### Registry Files and Procmon (Attempt)

My first thought was to use
[procmon](https://learn.microsoft.com/en-us/sysinternals/downloads/procmon)
to monitor the behavior of the executable and look for any interesting
registries that are written to. To do this, we launch procmon, open the
*Process Tree*, and filter on our program of interest `GFMv6.exe` and
its possible children.

<figure id="fig:procmon_pt">
<img
src="/images/post/babys-first-reverse-engineering/procmon_process_tree.png"
alt="Procmon Process Tree. Highlighted is the program we’re looking for. Using ‘Include Subtree’, we can include and apply a filter such that we only monitor this Process ID (PID) and any other processes it spawns." />
<figcaption>Figure 3: Procmon Process Tree. Highlighted is the program
we’re looking for. Using ‘Include Subtree’, we can include and apply a
filter such that we only monitor this Process ID (PID) and any other
processes it spawns.</figcaption>
</figure>

We can then return to the main procmon screen and select only the
registry operations button. We have to make sure procmon is started and
recording *before* we start the program.

<figure id="fig:procmon_reg">
<img
src="/images/post/babys-first-reverse-engineering/procmon_registries.png"
alt="Registries observed by procmon for GFMv6.exe. Notice the bar on the top-right where you can filter to show only registry operations." />
<figcaption>Figure 4: Registries observed by procmon for
<code>GFMv6.exe</code>. Notice the bar on the top-right where you can
filter to show only registry operations.</figcaption>
</figure>

I’ll spare you the details, but I spent some time looking through all
the registries that are written to, specifically filtering on events
that happened after initially opening the prompt shown in fig. 1. This
way, we should be able to see any registry files that are updated after
selecting **No**, but to no avail.

Even though it’s a very manual process, it’s not complicated; don’t let
low-hanging fruit go to waste. Furthermore, I guess there might be a
method of exporting the results from procmon to a csv and checking what
the differences are in the contents of the registries between one run
and another. If these trails were saved in some registry, the difference
should should be pretty obvious assuming the runs were saved in
plaintext.

### Brute-Forcing and Guessing (Attempt)

Then, onto the meat of the matter: Let’s open Ghidra! I did, however,
realize that there is no sense in just opening the program without some
sort of hook from where I would be able to determine what is going on.
The thing is that the prompt in fig. 1 somehow reads the number of
trails left while the sentence “full uses of this program before
validation is required” remains the same. So let’s go with that for now.

Create a new project in Ghidra and import the file (shortcut: `I`,
fig. 5). With more exotic programs or when analyzing firmware, you might
have to define some options. Here, we just go with the defaults.

<figure id="fig:ghidra_import">
<img
src="/images/post/babys-first-reverse-engineering/ghidra_import.png"
alt="Ghidra importing an executable. In this case, we just leave it as default. Do, however, have a look in the options! It can be surprising what kind of stuff you need to know to successfully decompile a binary." />
<figcaption>Figure 5: Ghidra importing an executable. In this case, we
just leave it as default. Do, however, have a look in the options! It
can be surprising what kind of stuff you need to know to successfully
decompile a binary.</figcaption>
</figure>

Then, Ghidra will as whether we would like to analyze the file. We
absolutely do, otherwise, a 1-day project might turn into a 1-year
project.

<figure id="fig:ghidra_analysis">
<img
src="/images/post/babys-first-reverse-engineering/ghidra_analysis.png"
alt="Analyzing Ghidra, just let it do its thing. If you know you’re using a WindowsPE app, it could be benefitial to tick the corresponding box. This will propagate the argument names as defined in the documentation to the rest of the program" />
<figcaption>Figure 6: Analyzing Ghidra, just let it do its thing. If you
know you’re using a WindowsPE app, it could be benefitial to tick the
corresponding box. This will propagate the argument names as defined in
the documentation to the rest of the program</figcaption>
</figure>

Then, we search for the string as mentioned before by selecting
`Search > For Strings...` in the menu bar. When we enter “full uses” we
immediately get the result we’re looking for!

<figure id="fig:ghidra_search_string">
<img
src="/images/post/babys-first-reverse-engineering/ghidra_search_strings.png"
alt="String search in Ghidra showing the results for the search “full uses”. This will only show strings as defined in the program (probably all in the .data section, but I’m not sure). If you’re looking for functions, variable names, or comments, you should use Search &gt; Program Text." />
<figcaption>Figure 7: String search in Ghidra showing the results for
the search “full uses”. This will only show strings as defined in the
program (probably all in the <code>.data</code> section, but I’m not
sure). If you’re looking for functions, variable names, or comments, you
should use <code>Search &gt; Program Text</code>.</figcaption>
</figure>

Double-clicking the string will redirect us to the place where the
string is located in the `.data` section. Luckily there is only one
cross-reference (denoted by the `XREF` tag/comment) to this string,
which we double click to got to. After letting Ghidra do it magic, we’re
left with the following if-statement in which the string is used:

``` cpp
// [...]
  if (0.0 < local_1c) {
    __vbaStrCat(L"You have ",local_18);
    uVar8 = (*pcVar11)();
    __vbaStrR4(local_1c);
    uVar10 = (*pcVar11)(uVar8);
    __vbaStrCat(uVar10,uVar8);
    uVar8 = (*pcVar11)();
    __vbaStrCat(L" full uses of this program before validation is required.  Select No to use this f ree full use now, or Cancel to exit."
                ,uVar8);
    uVar8 = (*pcVar11)();
    rtcBstrFromAnsi(0xd);
    uVar10 = (*pcVar11)(uVar8);
    __vbaStrCat(uVar10,uVar8);
    uVar8 = (*pcVar11)();
    rtcBstrFromAnsi(0xd);
    uVar10 = (*pcVar11)(uVar8);
    __vbaStrCat(uVar10,uVar8);
    uVar8 = (*pcVar11)();
    __vbaStrCat(L"Validate now?",uVar8);
    (*pcVar11)();
    __vbaFreeStrList(8,&local_30,&local_34,&local_38,&local_3c,&local_40,&local_44,&local_48,
                     &local_4c);
  } else {
    __vbaStrCat(L"You have used up your free full uses of this program.  Select No to run in demonst ration mode, or Cancel to exit."
                ,local_18);
    // [...]
    __vbaStrCat(L"Validate now?",uVar8);
    (*pcVar11)();
    __vbaFreeStrList(5,&local_30,&local_34,&local_38,&local_3c,&local_40);
  }
// [...]
```

While this is great, there are some quirks about this decompilation
which we’ll get to. First, this tells us a couple of things:

1.  This program was probably written in Visual Basic, as denoted by the
    `vba` prefix before all the functions.

2.  The variable `local_1c` determines whether the number of free uses
    have passed. This is indicated by `local_1c` being used to determine
    whether the text “You have `local_1c` full uses left” or “You have
    used up your free full uses of this program” is shown to the user.
    Also, the variable is converted to a string from a number in
    `__vbaStrR4(local_1c)` in between “You have” and “full uses”.

3.  The fact that these strings are built here, probably indicates that
    this is also where the windows will be built. If that’s the case,
    this function should therefore be called by some other function
    which might perform the actual check. But this is definitely more
    speculation than anything.

There is something weird happening with the function calls and the
complete lack of return values or pointers as arguments. The assembly
code definitely tells us a little more, but is hard to read.

``` asm
                      LAB_005492d1                                    XREF[1]:     00549262(j)  
005492d1 68 78 2c        PUSH       u_You_have_00432c78                              = u"You have "
          43 00
005492d6 ff d7           CALL       EDI=>MSVBVM60.DLL::__vbaStrCat
005492d8 8b d0           MOV        EDX,EAX
005492da 8d 4d d4        LEA        ECX=>local_30,[EBP + -0x2c]
005492dd ff d6           CALL       ESI=>MSVBVM60.DLL::__vbaStrMove
005492df 8b 4d e8        MOV        ECX,dword ptr [EBP + local_1c]
005492e2 50              PUSH       EAX
005492e3 51              PUSH       ECX
005492e4 ff 15 b4        CALL       dword ptr [->MSVBVM60.DLL::__vbaStrR4]           = 727803a4
          11 40 00
005492ea 8b d0           MOV        EDX,EAX
005492ec 8d 4d d0        LEA        ECX=>local_34,[EBP + -0x30]
005492ef ff d6           CALL       ESI=>MSVBVM60.DLL::__vbaStrMove
005492f1 50              PUSH       EAX
005492f2 ff d7           CALL       EDI=>MSVBVM60.DLL::__vbaStrCat
005492f4 8b d0           MOV        EDX,EAX
005492f6 8d 4d cc        LEA        ECX=>local_38,[EBP + -0x34]
005492f9 ff d6           CALL       ESI=>MSVBVM60.DLL::__vbaStrMove
005492fb 50              PUSH       EAX
005492fc 68 4c 2d        PUSH       u__full_uses_of_this_program_befor_00432d4c      = u" full uses of this program b
          43 00
00549301 ff d7           CALL       EDI=>MSVBVM60.DLL::__vbaStrCat
```

### Finding User Settings (Success)

- Delete `WMG.ini`

### Subtract by Zero (Success)

- Change `FSUB dword ptr [DAT_00401db0]` to `NOP dword ptr 0x00401d`

### Verification Prompt Begone (Success)

## Conclusion
