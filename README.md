pry-mirror
==========

A (nascent (but soon-to-be-awesome)) web-based interface to Pry.

Currently just has I/O with Pry, but the Sky's the limit.

Usage
-----

Get https://github.com/jasonLaster/pry-bot and run its `pry-bot-demo`

Then you should be able to hit localhost:4567

Imagine
-------

- Being able to pop in and out of a web UI from a Pry session
- Displaying all kinds of bits of info
- Doing so with modularity (such as peeling off a window alongside your main
  Pry session that shows you the reloaded & rendered results after each method
  redefinition)
- Interacting with the client-side state from your REPL session.
- Doing totally different types of things.

Security
--------

TODO: Make sure we (by default) only allow localhost to connect to DRb (port
9000) and pry-mirror (4567).
