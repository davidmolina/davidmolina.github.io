---
layout: default
title: All Posts
description: >
    A compilation of David Molina's blogs and posts since 2009. Welcome.  
author: "David Molina"
permalink: /archive/
---

<h1>All Posts</h1>

<ul class="archive-list">
  {% for post in site.posts %}

    {% assign ex = post.description | default: post.content %}

    {%- if ex contains '</blockquote>' -%}
      {%- assign ex = ex | split: '</blockquote>' | last -%}
    {%- endif -%}

    {%- if ex contains 'post-author-social' -%}
      {%- assign ex = ex | split: '</p>' | last -%}
    {%- endif -%}

    {%- assign ex = ex | strip_html | normalize_whitespace -%}
    {%- assign ex = ex | replace_first: '@davidcmolina ', '' -%}
    {%- assign ex = ex | replace: '?', '. ' | replace: '!', '. ' -%}

    {%- assign parts = ex | split: '.' -%}

    {%- assign s1 = parts[0] | strip -%}
    {%- assign s2 = parts[1] | strip -%}
    {%- assign s3 = parts[2] | strip -%}

    {%- assign preview = s1 -%}

    {%- if s2 and s2 != '' -%}
      {%- assign preview = preview | append: '. ' | append: s2 -%}
    {%- endif -%}

    {%- comment -%}
    If first sentence is short, add a third for weight.
    {%- endcomment -%}
    {%- if s1.size < 80 and s3 and s3 != '' -%}
      {%- assign preview = preview | append: '. ' | append: s3 -%}
    {%- endif -%}

    {%- if preview == '' -%}
      {%- assign preview = ex | truncate: 180 -%}
    {%- endif -%}

    <li class="archive-item">
      <h2 class="archive-title">
        <a href="{{ post.url | relative_url }}">
          {{ post.title }}
        </a>
      </h2>

      <p class="archive-meta">
        {{ post.date | date: "%b %-d, %Y" }}
      </p>

      <p class="archive-excerpt">
        {{ preview | strip | append: '… ' }}
        <a href="{{ post.url | relative_url }}">Read →</a>
      </p>
    </li>

  {% endfor %}
</ul>
