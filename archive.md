---
layout: default
title: All Posts
permalink: /archive/
---

<h1>All Posts</h1>

<ul class="archive-list">
  {% for post in site.posts %}

    {% assign ex = post.excerpt %}

    {%- if ex contains '</blockquote>' -%}
      {%- assign ex = ex | split: '</blockquote>' | last -%}
    {%- endif -%}

    {%- assign ex = ex | strip_html | normalize_whitespace -%}
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