---
layout: default
title: Writing
description: >
    Ideas on systems, entrepreneurship, leadership, ownership, lifestyle medicine, and building organizations that endure.
author: "David Molina"
permalink: /writing/
redirect_from:
  - /archive/
---

<style>
  .writing-header {
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 2rem;
    max-width: 680px;
    padding: 0.75rem 0 1rem;
    position: sticky;
    top: 0;
    z-index: 5;
  }

  .writing-kicker,
  .writing-card-category {
    color: #666;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .writing-header h1 {
    margin-bottom: 0.6rem;
  }

  .writing-header p {
    color: #333;
    font-size: 1.05rem;
    line-height: 1.55;
  }

  .theme-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 0.9rem;
    margin: 1.4rem 0 0;
  }

  .theme-nav a,
  .theme-nav a:visited {
    color: #075a9c;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
  }

  .theme-nav a:hover {
    text-decoration: underline;
  }

  .writing-section {
    margin-top: 2.4rem;
  }

  .writing-section h2 {
    border-top: 1px solid #e8e8e8;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    padding-top: 1.15rem;
  }

  .theme-section {
    scroll-margin-top: 1.5rem;
  }

  .featured-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: minmax(0, 1.35fr) minmax(220px, 0.75fr);
  }

  .featured-stack {
    display: grid;
    gap: 1rem;
  }

  .writing-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .writing-card {
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    padding: 1rem;
  }

  .writing-card-featured {
    padding: 1.25rem;
  }

  .writing-card h3 {
    font-size: 1.08rem;
    line-height: 1.25;
    margin: 0.35rem 0 0.35rem;
  }

  .writing-card-featured h3 {
    font-size: 1.55rem;
    line-height: 1.18;
    margin-top: 0.45rem;
  }

  .writing-card h3 a,
  .writing-card h3 a:visited {
    color: #222;
    text-decoration: none;
  }

  .writing-card h3 a:hover {
    color: #075a9c;
    text-decoration: underline;
  }

  .writing-card-date {
    color: #777;
    font-size: 0.84rem;
    margin-bottom: 0.55rem;
  }

  .writing-card-excerpt {
    color: #333;
    font-size: 0.94rem;
    line-height: 1.5;
    margin-bottom: 0.6rem;
  }

  .writing-card-read,
  .writing-card-read:visited {
    color: #0984e3;
    font-weight: 600;
    text-decoration: underline;
  }

  @media (max-width: 760px) {
    .featured-grid,
    .writing-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

{% assign featured_lead_path = "_posts/2026-08-16-the-moral-imperative-of-forest-management.md" %}
{% assign featured_paths = "|_posts/2026-08-16-the-moral-imperative-of-forest-management.md|_posts/2026-08-15-its-you-vs-you-four-years-ago.md|_posts/2026-05-15-patterns-and-common-toolkits.md|_posts/2023-12-14-huddles-to-build-momentum.md|" %}
{% assign featured_leadership_paths = "|_posts/2026-08-16-the-moral-imperative-of-forest-management.md|_posts/2026-08-15-its-you-vs-you-four-years-ago.md|" %}
{% assign featured_systems_paths = "|_posts/2026-05-15-patterns-and-common-toolkits.md|_posts/2023-12-14-huddles-to-build-momentum.md|" %}

<header class="writing-header">
  <p class="writing-kicker">Writing</p>
  <h1>Writing</h1>
  <p>Ideas on systems, entrepreneurship, leadership, ownership, lifestyle medicine, and building organizations that endure.</p>

  <nav class="theme-nav" aria-label="Writing themes">
    <a href="#systems">#systems</a>
    <a href="#entrepreneurship">#entrepreneurship</a>
    <a href="#leadership">#leadership</a>
    <a href="#ownership">#ownership</a>
    <a href="#lifestyle-medicine">#lifestyle-medicine</a>
  </nav>
</header>

<section class="writing-section" aria-labelledby="featured-writing-heading">
  <h2 id="featured-writing-heading">Featured</h2>

  <div class="featured-grid">
    <div class="featured-stack">
      {% for post in site.posts %}
        {% if featured_leadership_paths contains post.path %}
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

          {%- if s1.size < 80 and s3 and s3 != '' -%}
            {%- assign preview = preview | append: '. ' | append: s3 -%}
          {%- endif -%}

          {%- if preview == '' -%}
            {%- assign preview = ex | truncate: 180 -%}
          {%- endif -%}

          {% if post.theme %}
            {% assign category_label = post.theme | replace: "-", " " | capitalize %}
          {% else %}
            {% assign category_label = "" %}
            {% if post.categories contains "lifestyle-medicine" %}
              {% assign category_label = "Lifestyle Medicine" %}
            {% elsif post.categories contains "systems" or post.categories contains "business" or post.categories contains "patterns" %}
              {% assign category_label = "Systems" %}
            {% elsif post.categories contains "sales" or post.categories contains "entrepreneurship" or post.categories contains "startups" %}
              {% assign category_label = "Entrepreneurship" %}
            {% elsif post.categories contains "leadership" or post.categories contains "planning" %}
              {% assign category_label = "Leadership" %}
            {% elsif post.categories contains "ownership" or post.categories contains "investing" %}
              {% assign category_label = "Ownership" %}
            {% endif %}
          {% endif %}

          <article class="writing-card{% if post.path == featured_lead_path %} writing-card-featured{% endif %}">
            {% if category_label != "" %}
              <p class="writing-card-category">{{ category_label }}</p>
            {% endif %}
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p class="writing-card-date">{{ post.date | date: "%b %-d, %Y" }}</p>
            {% if post.path == featured_lead_path %}
              <p class="writing-card-excerpt">{{ preview | strip | truncatewords: 34 }}</p>
            {% else %}
              <p class="writing-card-excerpt">{{ preview | strip | truncatewords: 18 }}</p>
            {% endif %}
            <a class="writing-card-read" href="{{ post.url | relative_url }}">Read →</a>
          </article>
        {% endif %}
      {% endfor %}
    </div>

    <div class="featured-stack">
      {% for post in site.posts %}
        {% if featured_systems_paths contains post.path %}
          {% assign ex = post.description | default: post.content %}

          {%- if ex contains '</blockquote>' -%}
            {%- assign ex = ex | split: '</blockquote>' | last -%}
          {% endif %}

          {% if ex contains 'post-author-social' %}
            {%- assign ex = ex | split: '</p>' | last -%}
          {% endif %}

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

          {%- if s1.size < 80 and s3 and s3 != '' -%}
            {%- assign preview = preview | append: '. ' | append: s3 -%}
          {%- endif -%}

          {%- if preview == '' -%}
            {%- assign preview = ex | truncate: 180 -%}
          {%- endif -%}

          {% if post.theme %}
            {% assign category_label = post.theme | replace: "-", " " | capitalize %}
          {% else %}
            {% assign category_label = "" %}
            {% if post.categories contains "lifestyle-medicine" %}
              {% assign category_label = "Lifestyle Medicine" %}
            {% elsif post.categories contains "systems" or post.categories contains "business" or post.categories contains "patterns" %}
              {% assign category_label = "Systems" %}
            {% elsif post.categories contains "sales" or post.categories contains "entrepreneurship" or post.categories contains "startups" %}
              {% assign category_label = "Entrepreneurship" %}
            {% elsif post.categories contains "leadership" or post.categories contains "planning" %}
              {% assign category_label = "Leadership" %}
            {% elsif post.categories contains "ownership" or post.categories contains "investing" %}
              {% assign category_label = "Ownership" %}
            {% endif %}
          {% endif %}

          <article class="writing-card">
            {% if category_label != "" %}
              <p class="writing-card-category">{{ category_label }}</p>
            {% endif %}
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p class="writing-card-date">{{ post.date | date: "%b %-d, %Y" }}</p>
            <p class="writing-card-excerpt">{{ preview | strip | truncatewords: 18 }}</p>
            <a class="writing-card-read" href="{{ post.url | relative_url }}">Read →</a>
          </article>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="writing-section" aria-labelledby="browse-by-theme-heading">
  <h2 id="browse-by-theme-heading">Browse by Theme</h2>

  {% assign theme_slugs = "systems|entrepreneurship|leadership|ownership|lifestyle-medicine" | split: "|" %}

  {% for theme_slug in theme_slugs %}
    {% assign theme_title = theme_slug | replace: "-", " " | capitalize %}
    {% if theme_slug == "lifestyle-medicine" %}
      {% assign theme_title = "Lifestyle Medicine" %}
    {% endif %}

    <section class="theme-section" id="{{ theme_slug }}" aria-labelledby="{{ theme_slug }}-heading">
      <h3 id="{{ theme_slug }}-heading">#{{ theme_slug }}</h3>

      <div class="writing-grid">
        {% for post in site.posts %}
          {% if post.theme %}
            {% assign post_theme_slug = post.theme %}
          {% else %}
            {% assign post_theme_slug = "" %}
            {% if post.categories contains "lifestyle-medicine" %}
              {% assign post_theme_slug = "lifestyle-medicine" %}
            {% elsif post.categories contains "systems" or post.categories contains "business" or post.categories contains "patterns" %}
              {% assign post_theme_slug = "systems" %}
            {% elsif post.categories contains "sales" or post.categories contains "entrepreneurship" or post.categories contains "startups" %}
              {% assign post_theme_slug = "entrepreneurship" %}
            {% elsif post.categories contains "leadership" or post.categories contains "planning" %}
              {% assign post_theme_slug = "leadership" %}
            {% elsif post.categories contains "ownership" or post.categories contains "investing" %}
              {% assign post_theme_slug = "ownership" %}
            {% endif %}
          {% endif %}

          {% if post_theme_slug == theme_slug %}
            <article class="writing-card">
              <p class="writing-card-category">{{ theme_title }}</p>
              <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              <p class="writing-card-date">{{ post.date | date: "%b %-d, %Y" }}</p>
              <a class="writing-card-read" href="{{ post.url | relative_url }}">Read →</a>
            </article>
          {% endif %}
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</section>

<section class="writing-section" aria-labelledby="latest-writing-heading">
  <h2 id="latest-writing-heading">Latest Writing</h2>

  <div class="writing-grid">
    {% for post in site.posts %}
      {% unless featured_paths contains post.path %}
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

        {%- if s1.size < 80 and s3 and s3 != '' -%}
          {%- assign preview = preview | append: '. ' | append: s3 -%}
        {%- endif -%}

        {%- if preview == '' -%}
          {%- assign preview = ex | truncate: 180 -%}
        {%- endif -%}

        {% if post.theme %}
          {% assign category_label = post.theme | replace: "-", " " | capitalize %}
        {% else %}
          {% assign category_label = "" %}
          {% if post.categories contains "lifestyle-medicine" %}
            {% assign category_label = "Lifestyle Medicine" %}
          {% elsif post.categories contains "systems" or post.categories contains "business" or post.categories contains "patterns" %}
            {% assign category_label = "Systems" %}
          {% elsif post.categories contains "sales" or post.categories contains "entrepreneurship" or post.categories contains "startups" %}
            {% assign category_label = "Entrepreneurship" %}
          {% elsif post.categories contains "leadership" or post.categories contains "planning" %}
            {% assign category_label = "Leadership" %}
          {% elsif post.categories contains "ownership" or post.categories contains "investing" %}
            {% assign category_label = "Ownership" %}
          {% endif %}
        {% endif %}

        <article class="writing-card">
          {% if category_label != "" %}
            <p class="writing-card-category">{{ category_label }}</p>
          {% endif %}
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p class="writing-card-date">{{ post.date | date: "%b %-d, %Y" }}</p>
          <p class="writing-card-excerpt">{{ preview | strip | truncatewords: 24 }}</p>
          <a class="writing-card-read" href="{{ post.url | relative_url }}">Read →</a>
        </article>
      {% endunless %}
    {% endfor %}
  </div>
</section>
