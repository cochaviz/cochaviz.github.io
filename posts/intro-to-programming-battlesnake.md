---
title: 'Intro to programming: implementing a snake AI 🐍'
metaTitle: 'Introduction to programming with snake AI'
metaDesc: 'An introduction to programming with the goal of implementing an AI that will compete in the developer game Battlesnake'
date: '2022-02-16'
tags:
  - wip
  - battlesnake
  - tutorial
  - beginner/novice
  - ai
---

[[toc]]

## Introduction

In this post I'll walk you through concepts of programming and application
development by example of an AI  that will play the game
[Battlesnake](https://play.battlesnake.com/). The aim of this tutorial is to
help you step beyond the 'programming a calculator' phase. You know what
language you want to learn, have a grasp of basic syntax and know how logic in
programming works (e.g. if statements). But what now? Well, writing an AI :sunglasses:. We
will cover:

- problem representation and solving (algorithms and data structures)
- version control ([git](https://git-scm.com) and
  [GitHub](https://www.github.com))
- some high-level concepts regarding web services
  ([APIs](https://en.wikipedia.org/wiki/API))
- setting up a server with [Heroku](https://www.heroku.com)


Battlesnake is a great place to start from. Firstly, because it touches upon a
lot of different concepts in software development.  Secondly, your AI will
battle against that of other people and there are leaderboards to show you how
well it performs. This means that you can see your snake improve with your
programming abilities!

I can hear you ask: "Great, but what language are we gonna be programming in?".
Since we are essentially  creating a [web
service](https://en.wikipedia.org/wiki/Web_service), you can do this in any
language you want!  The Battlesnake devs and the community have created some
[starter projects](https://docs.battlesnake.com/references/starter-projects)
which will help you get started in minutes. If you language is in there, great!
Otherwise, don't worry.  I'll be explaining everything in [Go](https://go.dev/),
but the concepts are the same so you can follow along in any language.  I
understand it might be confusing to understand what is language-specific and
what isn't, so I'll make sure keep concepts and  implementation separate.

### Prerequisites

The tutorial assumes that you are a beginner, but that you have some basic
knowledge about programming.  More specifically, you

- **have an environment** in which you can write and run code (i.e. an IDE)
- **know how use logic** in you programming language of choice (e.g. if-statements)
- know how to use any of: **classes/objects/structs** (if you language supports
  those)
- **have made a couple of small practice projects** (not necessary, but highly
  recommended for fluency)

If some of these don't apply to you, I would highly encourage you to pick up a
basic course on [codecademy](https://www.codecademy.com/) or follow some
tutorials on youtube. Create your first couple of little projects, and then come
back! Do feel free to keep on looking, maybe you're a lot smarter than you (or
I) think you are.

### Structure

We will cover a wide range of topics, so I will try to keep the structure as
consistent and easy to follow as possible.  Like mentioned before, while I will
be using Go to illustrate examples, I will try to keep all language-dependent
parts separate.

First, I'll introduce the game, Battlesnake, rules and the different tools we'll
need.  Then we'll touch upon web services and APIs; how our application will
communicate with the Battlesnake server.  Following that, I'll introduce
software to manage different versions of your code, and a platform to upload
your code to.  Finally, we will spin up a server which will use the code we've
uploaded previously to run our snake on!

You are, of course, free to stop at any moment and resume at a later date.
Actually, I highly encourage this! Take breaks regularly, especially if things
don't seem to work when they should... :bug:. We'll cover a lot of material, so
buckle up, grab some snacks, and let's get going :rocket:!

## Battlesnake

[Battlesnake](https://play.battlesnake.com/) is a developer-oriented game,
meaning that everything in, about, and around the game is made by developers,
for developers. This means that there are a lot of resources out there that can
help us out.  Best example is, of course, the original [Battlesnake
documentation](https://docs.battlesnake.com/), which I encourage you to read and
refer to whenever you're lost before trying to _DuckDuckGo_ it.

### How Battlesnake works

The Battlesnake game rules are simple. In the default game mode, the goal is to
be the last-snake-standing among a group of  three other snakes. Besides that,
the normal snake rules apply:

1. don't run into walls
2. don't run into snakes (you and others)
3. eating food makes you grow :apple:

There are some other edge-cases to consider (e.g. what do you do when heads
collide), but these don't matter much for our purposes. Please refer to the
official documentation if you want to learn more. 

### Creating our first snake

Enough talking! Let's create a snake! To do this, we'll first need to create an
account. One option is to create an account with GitHub. Choose this one. Like
mentioned before, we'll use this platform to host our code, so we need an
account for that anyway. [Create an account](https://github.com/signup) for
GitHub, then head over to Battlesnake to [create an
account](https://play.battlesnake.com/login/) and select the **Sign in with
GitHub** button.

Awesome, now we can head over to Battlesnake to [create a new
snake](https://play.battlesnake.com/account/snakes/create/ ). Give it a name (I
name my snakes after Lord of the Rings characters)! And... Huh? A URL? Yes, a
URL. This is where the fun begins. For now we'll cancel, since the URL is a
required field, but head to next section and I'll explain what's going on.

### How Battlesnake _actually_ works

The reason why we need to provide a URL when creating a snake, is because the
snake is essentially a [web service](https://en.wikipedia.org/wiki/Web_service).
I briefly mentioned this in the introduction, but now I'll elaborate on what
that actually means.

To put it concretely, our snake will run on its own remote computer (server),
the Battlesnake game server will send us the current state of the game (location
of all the snake, food, size of the field, etc.) and ask us what our next move
is.  We then send a response (indicated `{response}` in the diagram), this
simply contains the action: "up", "down", "left", or "right". But for the
Battlesnake server to reach us we to tell it our location, the URL. If you would
this manually, this is the equivalent of typing the URL, let's say
`my-awesome-snake.dev`, and appending `/move` to it, giving us
`my-awesome-snake.dev/move`. This is what we call an
[endpoint](https://en.wikipedia.org/wiki/Communication_endpoint). There is also
a endpoint for indicating that we want to start to game, which would be
`my-awesome-snake.dev/start`. And one for ending the game, `/end`. You get the
idea. 

![transaction
diagram](/images/post/intro-to-programming-battlesnake/transaction-diagram.svg
"Transaction diagram of the requests and responses made during a Battlesnake
game. Here to the endpoints **/start**, **/move**, and **/end**")

As you can imagine, there is no real need to send any info back to the
Battlesnake server when it send a web-request to our snake on `/end`, telling it
to end the game. But we do definitely need to send a response when we've been
asked to make a move. Just like we really need to receive some information about
the game, for example, what moves the others have made. The specification for
what type of requests we need to handle (does the request contain information?
Do we need to send anything back; give a response?), as well as the format that
the information is in (e.g. a two-dimensional array representing the board) is
called an [Application Programming Interface, or
API](https://en.wikipedia.org/wiki/API). 

Having an API is great, because it means that **two programs can
communicate, without them needing to know exactly how the other works**. Since
the only import thing is that they know what to expect when they ask the other
something. Just as they know what to provide in order to make sure the other can
successfully perform their required task. This is exactly the reason why you
should be able to program in any language you want! **As long as you adhere to
the API specification, you can implement your snake in anything you want**.

Of course, the Battlesnake documentation also [contains a specification for the
API of the snake](https://docs.battlesnake.com/references/api). Go and see if
you can find the endpoints mentioned before.  There is actually one more
endpoint I didn't mention, try to see if you can find it and figure out what it
does! 



