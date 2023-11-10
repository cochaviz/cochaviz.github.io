---
title: "CTF Challenge VulnTraining Writeup"
metaTitle: "CTF Challenge VulnTraining Writeup"
metaDesc: "A writeup for the VulnTraining challenge from ctfchallenge.com"
metaImg: "https://ctfchallenge.com/images/ctflogo-trans.png"
date: "2022-10-19"
tags:
  - ctf
  - web
  - writeup
  - wip
---

[[toc]]

## A Little Disclaimer

So you're looking for answers, are ya? Well, I've got them, but for a price...
Namely a little bit of your time and attention:

**Please try the challenges yourself before checking the answers.**

CTF's are notoriously 'NP' prone. Once you've seen the answer, it's easy
to think you could've come up with that. There is nothing wrong with looking up
answers, but try reflect on why you couldn't figure it out. I try to explain my
thought process as best and brief as possible, but figuring it out yourself is
just the best feeling, so please give it another go when you're reading this!
I'll not include any of the flags to avoid people simply copying and pasting
them.

Another note, I create these writeups as if speaking to myself. If my manner of
speaking seems a bit odd, you try talking to yourself without sounding
a little odd.

## Flags

In this challenge, the name of the game is enumeration. Can't find a flag? More
enumeration. When you think you've done enough enumeration, what do you do?
That's right, more enumeration. This one was the first in which I really
struggled to find all the flags, and it honestly came down to simply not having
exhausted all the possible options.

The order in which I give the flags is definitely not the order in which I've
found them, but, in hindsight, it seems the most logical. Before, I would have
said to first have a look at the root of the given domain. But after going
through this challenge it seems more sensible to first do some really easy recon
(enumerating domains for example) and only then have a manual look around.
Honestly, even while writing this, I am not sure if this generalizes well, but
I'll leave it in anyway. Take this perspective with a grain of salt.

### Digging Around (Enumeration)

First, simple recon of all the different subdomains. The best thing here is to
start with the places which will give you the quickest results, simply because
there is so much.

```console
$ dnsrecon -d vulntraining.co.uk -D <path_to_wordlists>/subdomains.txt -t brt

[...]
[+] 	A admin.vulntraining.co.uk 68.183.255.206
[+] 	A billing.vulntraining.co.uk 68.183.255.206
[+] 	A www.vulntraining.co.uk 68.183.255.206
[...]
```

Another source of useful information (which I of course forgot about) is
[crt.sh](https://crt.sh). This will use OSINT to find certificates associated with the given
domain. Therefore, it is a lot quicker than brute-force alternatives (such as
`dnsrecon`). This gives us another domain: `c867fc3a.vulntraining.co.uk`, which
contains the first flag.

### Enum Enum Tu Tuuu Tu-Du Du (Enumeration)

Returning to enumeration, let's see what the different domains contain. Having a
quick look at the roots of each gives a good indication which one we should
prioritize (i.e. run first). Both `admin` and `billing` show a login screen,
while `www` gives us the 'normal' web-page. My guess is that there is more to
see in the `www` page, so let's `ffuf` that first.

```console
$ ffuf -w <path_to_wordlists>/content.txt -t 1 -p .1 -H "Cookie: ctfchallenge=<your_ctf_cookie>" -recursion -recursion-depth 1 -u http://www.vulntraining.co.uk/FUZZ

[...]
.git                    [Status: 403, Size: 170, Words: 5, Lines: 7, Duration: 25ms]
.git/HEAD               [Status: 200, Size: 23, Words: 2, Lines: 2, Duration: 27ms]
.git/config             [Status: 200, Size: 288, Words: 19, Lines: 12, Duration: 25ms]
.git/index              [Status: 200, Size: 1381, Words: 8, Lines: 7, Duration: 25ms]
css                     [Status: 301, Size: 178, Words: 6, Lines: 8, Duration: 24ms]
[INFO] Adding a new job to the queue: http://www.vulntraining.co.uk/css/FUZZ
framework               [Status: 301, Size: 178, Words: 6, Lines: 8, Duration: 23ms]
[INFO] Adding a new job to the queue: http://www.vulntraining.co.uk/framework/FUZZ
js                      [Status: 301, Size: 178, Words: 6, Lines: 8, Duration: 27ms]
[INFO] Adding a new job to the queue: http://www.vulntraining.co.uk/js/FUZZ
robots.txt              [Status: 200, Size: 42, Words: 3, Lines: 2, Duration: 26ms]
server                  [Status: 302, Size: 3263, Words: 1457, Lines: 109, Duration: 26ms]
[...]
```

Now it's just a matter of systematically going through all the different results
and seeing what they give. I'll quickly list the different places where we can
find flags and how they are otherwise interesting.

#### [www] /

The root of the website shows an image and a _Home_ button which doesn't lead
anywhere. No forms, no user input, nada. Looking at the `<header>` tag in the
source code gives the second _FLAG_.

#### [www] robots.txt

Opening `robots.txt` shows us

#### [www] server
