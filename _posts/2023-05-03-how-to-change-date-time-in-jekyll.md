---
layout: post
title:  "How to Change Date Time in Jekyll"
subtitle: "Changing date time back in Jekyll."
date: 2023-05-03 11:12:43 -0800
author: "David Molina"
categories: jekyll update
---

A few days ago I posted about my [grandfather's passing](https://davidmolina.github.io/2023/05/01/eusebio-lopez-chevio-flores-dies-at-90/) and shared it. Unfortunately the link,
```javascript
 https://davidmolina.github.io/2023/05/01/eusebio-lopez-chevio-flores-dies-at-90/
```
broke as soon as May 2nd rolled around. Why? The URL date automatically reverted to May 2nd instead of the original May 1st date that was used in the URL and shared across multiple channels.

My initial hunch was to update:
```javascript
- _config.yml
- Gemfile
- Ruby
```

When neither of these worked, I also broke the running server with outdated and deprecated files. I found [Ruby on Mac](https://www.rubyonmac.dev/) which at this point was worth investing to at least to get my machine in order as I hadn't pushed much to GitHub in several years. When discussing this w/ the developer [Moncef Belyamani](https://www.moncefbelyamani.com/) he suggested to give it a try and if by updating the machine we could launch a new Jekyll site do it. At least to get Ruby updated. The entire process was just a few commands and when it was all said and done I launched a new Jekyll site, re-created all the old blog posts, and re-deployed it. While I was happy with the results the old commits (previous work was gone) and the date was still broken.

Not content, I re-deployed the old code and while all my commits were back, the date for my grandfather's obituary was still indicating May 2nd.

To fix this, change UTC in our Jekyll blog post from:
```javascript
date: 2023-05-03 17:12:43 -0800
```
to:
```javascript
date: 2023-05-03 11:12:43 -0800
```

The UTC time for the first one puts the blog post to the next day. Special thanks to Moncef for pairing w/ me and and highlighting this key takeaway.

*An entrepreneur, strategist, and former Army Captain, David Molina owns Molinas, a government contracting firm specializing in equipment and material procurement for U.S. federal agencies in support of mission critical requirements.*
