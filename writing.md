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

{% assign editorial_posts = site.posts | sort: 'date' | reverse %}
{% assign topics = 'systems|entrepreneurship|leadership|ownership|lifestyle-medicine' | split: '|' %}
<style>
.editorial {
  --ink:#181818;
  --muted:#666;
  --line:#d8d8d8;
  --paper:#fff;
  color:var(--ink);
  max-width:1200px;
  margin:0 auto;
  padding:1rem 1.25rem 4rem;
  font-family:Georgia,'Times New Roman',serif;
}
.editorial * {
  box-sizing:border-box;
}
.editorial a {
  color:inherit;
  text-decoration:none;
}
.editorial a:hover {
  text-decoration:underline;
  text-underline-offset:3px;
}
.editorial-masthead {
  text-align:center;
  padding:1.2rem 0 1.5rem;
  border-bottom:2px solid var(--ink);
}
.editorial-eyebrow {
  font:700 .7rem/1.4 system-ui,sans-serif;
  text-transform:uppercase;
  letter-spacing:.13em;
  color:var(--muted);
}
.editorial-masthead h1 {
  font-size:clamp(2.8rem,6vw,5rem);
  line-height:1;
  margin:.4rem 0 .7rem;
  letter-spacing:-.045em;
}
.editorial-masthead p {
  font-size:1.03rem;
  max-width:690px;
  margin:0 auto;
  line-height:1.55;
}
.editorial-nav {
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:.5rem 1.5rem;
  border-bottom:1px solid var(--line);
  padding:.9rem 0;
  margin-bottom:2rem;
  font:600 .82rem/1.4 system-ui,sans-serif;
}
.editorial-nav a {
  white-space:nowrap;
}
.editorial-section {
  margin:2.5rem 0;
}
.editorial-section-heading {
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:1rem;
  border-bottom:1px solid var(--ink);
  padding-bottom:.5rem;
  margin-bottom:1.3rem;
}
.editorial-section-heading h2 {
  font-size:1.55rem;
  margin:0;
}
.editorial-section-heading span {
  color:var(--muted);
  font: .78rem system-ui,sans-serif;
}
.editorial-hero {
  display:grid;
  grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);
  gap:2rem;
  align-items:center;
}
.editorial-hero.no-image {
  grid-template-columns:1fr;
  max-width:850px;
}
.editorial-hero img, .editorial-feature img {
  width:100%;
  height:auto;
  aspect-ratio:16/10;
  object-fit:cover;
  display:block;
}
.editorial-label {
  display:inline-block;
  color:#8b621c;
  background:#fff2d9;
  padding:.22rem .48rem;
  border-radius:30px;
  font:700 .65rem/1.3 system-ui,sans-serif;
  text-transform:uppercase;
  letter-spacing:.04em;
}
.editorial-hero h2 {
  font-size:clamp(2.3rem,4vw,4rem);
  line-height:1.08;
  letter-spacing:-.035em;
  margin:.7rem 0;
}
.editorial-meta {
  color:var(--muted);
  font:.74rem/1.4 system-ui,sans-serif;
  text-transform:uppercase;
  letter-spacing:.025em;
}
.editorial-excerpt {
  font-size:1.05rem;
  line-height:1.55;
  margin:.8rem 0;
}
.editorial-feature-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:1.5rem;
}
.editorial-feature {
  border-right:1px solid var(--line);
  padding-right:1.5rem;
  min-width:0;
}
.editorial-feature:last-child {
  border-right:0;
  padding-right:0;
}
.editorial-feature h3 {
  font-size:1.6rem;
  line-height:1.2;
  margin:.6rem 0;
}
.editorial-feature p {
  font-size:.95rem;
  line-height:1.5;
}
.editorial-news-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:1.5rem;
}
.editorial-news-item {
  border-top:1px solid var(--line);
  padding-top:1rem;
}
.editorial-news-item h3 {
  font-size:1.35rem;
  line-height:1.22;
  margin:.5rem 0;
}
.editorial-news-item p {
  font-size:.92rem;
  line-height:1.5;
  margin:.6rem 0;
}
.editorial-topics {
  display:flex;
  flex-wrap:wrap;
  gap:.65rem;
}
.editorial-topics a {
  border:1px solid var(--line);
  padding:.6rem .85rem;
  font:600 .85rem system-ui,sans-serif;
}
.editorial-topic-section {
  scroll-margin-top:1.5rem;
  margin:2rem 0;
}
.editorial-topic-section h3 {
  font-size:1.3rem;
  border-bottom:1px solid var(--line);
  padding-bottom:.45rem;
}
.editorial-topic-section ul {
  list-style:none;
  padding:0;
  margin:0;
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:.7rem 1.5rem;
}
.editorial-topic-section li {
  padding-bottom:.7rem;
  border-bottom:1px solid #eee;
}
.editorial-topic-section li a {
  font-weight:700;
  font-size:1.05rem;
}
.editorial-topic-section li small {
  display:block;
  color:var(--muted);
  font: .75rem system-ui,sans-serif;
  margin-top:.25rem;
}
.editorial-archive {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:.7rem 2rem;
}
.editorial-archive-item {
  border-bottom:1px solid var(--line);
  padding:.7rem 0;
}
.editorial-archive-item a {
  display:block;
  font-size:1.07rem;
  font-weight:700;
}
.editorial-archive-item time {
  color:var(--muted);
  font:.75rem system-ui,sans-serif;
}
.editorial-archive-item[hidden] {
  display:none;
}
.editorial-more {
  display:block;
  margin:2rem auto 0;
  padding:.85rem 2.5rem;
  border:0;
  background:#181818;
  color:#fff;
  font:700 .9rem system-ui,sans-serif;
  cursor:pointer;
}
.editorial-more:hover {
  background:#444;
}
.editorial-more[hidden] {
  display:none;
}
@media(max-width:760px) {
  .editorial {
    padding:1rem .85rem 3rem;
  }
  .editorial-hero,.editorial-feature-grid,.editorial-news-grid,.editorial-topic-section ul,.editorial-archive {
    grid-template-columns:1fr;
  }
  .editorial-feature {
    border-right:0;
    border-bottom:1px solid var(--line);
    padding:0 0 1rem;
  }
  .editorial-hero {
    gap:1rem;
  }
  .editorial-nav {
    justify-content:flex-start;
    gap:.65rem 1rem;
  }
}
</style>

<div class="editorial">
  <header class="editorial-masthead">
    <div class="editorial-eyebrow">
      Essays & observations by David Molina
    </div>
    <h1>
      Writing
    </h1>
    <p>
      Ideas on systems, entrepreneurship, leadership, ownership, lifestyle medicine, and building organizations that endure.
    </p>
  </header>
  <nav class="editorial-nav" aria-label="Writing navigation">
    <a href="#latest">
      Latest
    </a>
    <a href="#selected">
      Selected
    </a>
    <a href="#topics">
      Topics
    </a>
    <a href="#archive">
      Archive
    </a>
  </nav>
  {% assign lead = editorial_posts | first %}
  {% if lead %}
    <section class="editorial-section" id="latest" aria-label="Lead story">
      <div class="editorial-hero{% unless lead.image or lead.featured_image %} no-image{% endunless %}">
        <div>
          <span class="editorial-label">
            Latest story
          </span>
          <h2>
            <a href="{{ lead.url | relative_url }}">
              {{ lead.title | escape }}
            </a>
          </h2>
          <p class="editorial-meta">
            {{ lead.date | date: '%d %b %Y' }}· David Molina
          </p>
          <p class="editorial-excerpt">
            {{ lead.description | default: lead.excerpt | strip_html | normalize_whitespace | truncatewords: 44 }}
          </p>
          <a href="{{ lead.url | relative_url }}" aria-label="Read {{ lead.title | escape }}">
            Read the story →
          </a>
        </div>
        {% assign lead_image = lead.image | default: lead.featured_image %}
        {% if lead_image %}
          <a href="{{ lead.url | relative_url }}">
            <img src="{{ lead_image | relative_url }}" alt="{{ lead.image_alt | default: lead.title | escape }}" loading="eager">
          </a>
        {% endif %}
      </div>
    </section>
  {% endif %}
  <section class="editorial-section" id="selected">
    <div class="editorial-section-heading">
      <h2>
        Editor's selections
      </h2>
      <span>
        Recent perspectives
      </span>
    </div>
    <div class="editorial-feature-grid">
      {% for post in editorial_posts offset:1 limit:3 %}
        <article class="editorial-feature">
          {% assign story_image = post.image | default: post.featured_image %}
          {% if story_image %}
            <a href="{{ post.url | relative_url }}">
              <img src="{{ story_image | relative_url }}" alt="{{ post.image_alt | default: post.title | escape }}" loading="lazy">
            </a>
          {% endif %}
          <p class="editorial-meta">
            {{ post.date | date: '%d %b %Y' }}
          </p>
          <h3>
            <a href="{{ post.url | relative_url }}">
              {{ post.title | escape }}
            </a>
          </h3>
          <p>
            {{ post.description | default: post.excerpt | strip_html | normalize_whitespace | truncatewords: 25 }}
          </p>
        </article>
      {% endfor %}
    </div>
  </section>
  <section class="editorial-section">
    <div class="editorial-section-heading">
      <h2>
        More from the journal
      </h2>
      <span>
        Ideas worth exploring
      </span>
    </div>
    <div class="editorial-news-grid">
      {% for post in editorial_posts offset:4 limit:6 %}
        <article class="editorial-news-item">
          <p class="editorial-meta">
            {{ post.date | date: '%d %b %Y' }}
          </p>
          <h3>
            <a href="{{ post.url | relative_url }}">
              {{ post.title | escape }}
            </a>
          </h3>
          <p>
            {{ post.description | default: post.excerpt | strip_html | normalize_whitespace | truncatewords: 20 }}
          </p>
        </article>
      {% endfor %}
    </div>
  </section>
  <section class="editorial-section" id="topics">
    <div class="editorial-section-heading">
      <h2>
        Explore by topic
      </h2>
    </div>
    <nav class="editorial-topics" aria-label="Article topics">
      {% for topic in topics %}
        <a href="#topic-{{ topic }}">
          {{ topic | replace:'-',' ' | capitalize }}
        </a>
      {% endfor %}
    </nav>
    {% for topic in topics %}
      <section class="editorial-topic-section" id="topic-{{ topic }}">
        <h3>
          {{ topic | replace:'-',' ' | capitalize }}
        </h3>
        <ul>
          {% assign topic_count = 0 %}
          {% for post in editorial_posts %}
            {% assign post_topic = post.theme | default: '' %}
            {% assign matches_topic = false %}
            {% if post_topic == topic or post.categories contains topic %}
              {% assign matches_topic = true %}
            {% endif %}
            {% if topic == 'systems' and post_topic == '' %}
              {% if post.categories contains 'business' or post.categories contains 'patterns' %}
                {% assign matches_topic = true %}
              {% endif %}
            {% endif %}
            {% if topic == 'entrepreneurship' and post_topic == '' %}
              {% if post.categories contains 'sales' or post.categories contains 'startups' %}
                {% assign matches_topic = true %}
              {% endif %}
            {% endif %}
            {% if topic == 'leadership' and post_topic == '' %}
              {% if post.categories contains 'planning' %}
                {% assign matches_topic = true %}
              {% endif %}
            {% endif %}
            {% if topic == 'ownership' and post_topic == '' %}
              {% if post.categories contains 'investing' %}
                {% assign matches_topic = true %}
              {% endif %}
            {% endif %}
            {% if matches_topic and topic_count < 6 %}
              <li>
                <a href="{{ post.url | relative_url }}">
                  {{ post.title | escape }}
                </a>
                <small>
                  {{ post.date | date: '%d %b %Y' }}
                </small>
              </li>
              {% assign topic_count = topic_count | plus: 1 %}
            {% endif %}
          {% endfor %}
          {% if topic_count == 0 %}
            <li>
              More writing on this topic is coming soon.
            </li>
          {% endif %}
        </ul>
      </section>
    {% endfor %}
  </section>
  <section class="editorial-section" id="archive">
    <div class="editorial-section-heading">
      <h2>
        All writing
      </h2>
      <span>
        Newest first
      </span>
    </div>
    <div class="editorial-archive" id="editorial-archive-list">
      {% for post in editorial_posts %}
        <article class="editorial-archive-item"{% if forloop.index > 12 %} hidden{% endif %}>
        <a href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
          {{ post.date | date: '%d %b %Y' }}
        </time>
      </article>
    {% endfor %}
  </div>
  {% if editorial_posts.size > 12 %}
    <button type="button" class="editorial-more" id="editorial-more" aria-controls="editorial-archive-list">
      Show more writing
    </button>
  {% endif %}
</section>
</div>
<script>
  (function () {
    var button = document.getElementById('editorial-more');
    var archive = document.getElementById('editorial-archive-list');
    if (!button || !archive) return;

    button.addEventListener('click', function () {
      var hiddenItems = archive.querySelectorAll('.editorial-archive-item[hidden]');
      for (var i = 0; i < Math.min(12, hiddenItems.length); i++) {
        hiddenItems[i].hidden = false;
      }
      button.hidden = archive.querySelectorAll('.editorial-archive-item[hidden]').length === 0;
    });
  }());
</script>
