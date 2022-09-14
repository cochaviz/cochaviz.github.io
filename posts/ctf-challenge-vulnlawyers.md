---
title: 'CTF Challenge VulnLawyers Writeup'
metaTitle: 'CTF Challenge VulnLawyers Writeup'
metaDesc: 'A writeup for the VulnLawyers challenge from ctfchallenge.com'
metaImg: 'https://ctfchallenge.com/images/ctflogo-trans.png'
date: '2022-09-14'
tags:
  - ctf
  - writeup
  - wip
---

[[toc]]

## A Little Disclaimer

So you're looking for answers, are ya? Well, I've got them, but for a price...
Namely a little bit of your time and attention:

***Please try the challenges yourself before checking the answers.**

CTF's are notoriously 'NP' prone. Once you've seen the answer, it's easy
to think you could've come up with that. There is nothing wrong with looking up
answers, but try reflect on why you couldn't figure it out. I try to explain my
thought process as best and brief as possible, but figuring it out yourself is
just the best feeling, so please give it another go when you're reading this!
I'll not include any of the flags to avoid people simply copying and pasting
them.

With the mommy'ing out of the way, let's get pwning.

> At the time of writing, I have already completed the challenge and I'm not
> sure what number was associated with which flag (as the website does not allow
> me to re-enter flags). These are the flags in the order I found them.

## Flag 1 - Data Baby (Enumeration)

The first flag can be found by performing a standard recon of the subdomains of
`vulnlawyers.co.uk`.
```bash
$ dnsrecon -d vulnlawyers.co.uk -D ~/path/to/wordlists/subdomains.txt -t brt

[*] Using the dictionary file: /home/zohar/Documents/Playground/wordlists/subdomains.txt (provided by user)
[*] brt: Performing host and subdomain brute force against vulnlawyers.co.uk...
[+] 	A data.vulnlawyers.co.uk 68.183.255.206
[+] 	A www.vulnlawyers.co.uk 68.183.255.206
[+] 2 Records Found
```

Doing a http request with `curl`, or opening the domain in your browser returns
some info about the API and the first flag.
```bash
$ curl http://data.vulnlawyers.co.uk -H "Cookie: <your_ctf_cookie>"

{"name":"VulnLawyers Website API","version":"2.1.04","flag":"[^FLAG^1337-DIY-1337^FLAG^]"}
```

## Flag 2 - Browsers are Evil (Enumeration)

Now that we know the different domains that are available to us, let's do some
recon on the different files and folders we have access to.
```bash
$ ffuf -w ~/Documents/Playground/wordlists/content.txt -t 1 -p 0.1 -H "Cookie: ctfchallenge=<your_ctf_cookie>" -u http://www.vulnlawyers.co.uk/FUZZ


        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

[...]
________________________________________________
css                     [Status: 301, Size: 178, Words: 6, Lines: 8, Duration: 15ms]
denied                  [Status: 401, Size: 1020, Words: 178, Lines: 30, Duration: 15ms]
images                  [Status: 301, Size: 178, Words: 6, Lines: 8, Duration: 15ms]
js                      [Status: 301, Size: 178, Words: 6, Lines: 8, Duration: 14ms]
login                   [Status: 302, Size: 1119, Words: 197, Lines: 31, Duration: 16ms]
```

Since we are (always) looking to escalate privileges, the `login` endpoint looks
especially interesting. Entering `http://www.vulnlawyers.co.uk/login` in your
browser will lead to a page that says **Acess is denied from your IP address**.
Shit. But take a look at where we are `http://www.vulnlawyers.co.uk/denied`,
we've been rerouted. 

Let's take a look at what happens with our request in the browser by opening the
developer tab (often <kbd>F12</kbd>, but if you didn't know that, you might want
to look into some other challenges). Opening the 'Network' tab (on
Firefox, might be different on Chrome, Safari, etc.) shows that we got a `302`
code from the `/login` endpoint. This code specifically tells a *browser* to
reroute to a URL given by the `Location` header [^1].

Browsers can do weird stuff, so let's try to ask `curl` what's up.
```bash
$ curl www.vulnlawyers.co.uk/login -H "Cookie: ctfchallenge=<your_ctf_cookie>"

[...]
  <div class="alert alert-info">
      <p>Access to this portal can now be found here <a href=/lawyers-only">/lawyers-only</a></p>
      <p>[^FLAG^TRY_ME_B*TCH^FLAG^]</p>
  </div>
[...]
```
Well, would you look at that, a flag and a hidden endpoint :eyes:! Christmas
came early this year.

Opening the URL `http://www.vulnlawyers.co.uk/lawyers-only` will bring us to a
login screen. Now the fun stuff can begin!

## Flag 3 - A Bit of This and A Bit of That (Enumeration/Exploitation)

The current goal is to log in, but we lack any user data.

[^1]: [302 Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)
