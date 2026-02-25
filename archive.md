---
layout: default
title: All Posts
permalink: /archive/
---

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="post-meta"> — {{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>