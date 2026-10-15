---
layout: default
title: About David Molina
description: >
     David Molina writes about systems thinking, entrepreneurship, leadership, and building enduring organizations.
author: "David Molina"
permalink: /about/
---

<style>
  .about-editorial {
    --about-ink: #181818;
    --about-muted: #666;
    --about-line: #d9d9d9;
    max-width: 1040px;
    margin: 0 auto;
    color: var(--about-ink);
  }

  .about-editorial *,
  .about-editorial *::before,
  .about-editorial *::after {
    box-sizing: border-box;
  }

  .about-editorial a,
  .about-editorial a:visited {
    color: inherit;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }

  .about-editorial a:hover {
    color: #075a9c;
  }

  .about-editorial .eyebrow {
    color: var(--about-muted);
    font: 700 .72rem/1.5 Arial, sans-serif;
    letter-spacing: .11em;
    text-transform: uppercase;
  }

  .about-editorial .about-masthead {
    padding: 1.6rem 0 1.35rem;
    text-align: center;
    border-bottom: 1px solid var(--about-line);
  }

  .about-editorial .site-name {
    margin: .35rem 0 .4rem;
    font: 700 clamp(1.55rem, 3vw, 2.25rem)/1.2 Georgia, 'Times New Roman', serif;
    letter-spacing: -.035em;
  }

  .about-editorial .topics {
    margin: 0;
    color: #555;
    font-size: .88rem;
  }

  .about-editorial .about-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .75rem 1.6rem;
    padding: .95rem 0;
    border-bottom: 1px solid var(--about-line);
    font-size: .9rem;
  }

  .about-editorial .about-nav a {
    text-decoration: none;
  }

  .about-editorial h1,
  .about-editorial h2,
  .about-editorial h3 {
    color: var(--about-ink);
    font-family: Georgia, 'Times New Roman', serif;
  }

  .about-editorial p {
    margin: 0 0 1.1rem;
    line-height: 1.75;
  }

  .about-editorial .about-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(240px, .8fr);
    align-items: center;
    gap: clamp(1.5rem, 5vw, 4rem);
    padding: 3rem 0;
  }

  .about-editorial h1 {
    margin: .6rem 0 1.2rem;
    font-size: clamp(2.8rem, 5.5vw, 4.7rem);
    line-height: 1.08;
    letter-spacing: -.045em;
  }

  .about-editorial .about-deck {
    font: 400 clamp(1.15rem, 2vw, 1.45rem)/1.48 Georgia, 'Times New Roman', serif;
  }

  .about-editorial figure {
    margin: 0;
  }

  .about-editorial img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .about-editorial .about-hero img {
    width: 100%;
    border-radius: 2px;
  }

  .about-editorial figcaption {
    margin-top: .55rem;
    color: var(--about-muted);
    font-size: .78rem;
    line-height: 1.5;
  }

  .about-editorial .about-thesis {
    display: grid;
    grid-template-columns: 170px 1fr;
    gap: 1.5rem;
    padding: 1.65rem 0;
    border-top: 1px solid var(--about-line);
    border-bottom: 1px solid var(--about-line);
  }

  .about-editorial .about-thesis p {
    margin: 0;
    font: 400 clamp(1.2rem, 2.2vw, 1.6rem)/1.5 Georgia, 'Times New Roman', serif;
  }

  .about-editorial .about-section {
    padding: 2.5rem 0;
    border-bottom: 1px solid var(--about-line);
    scroll-margin-top: 2rem;
  }

  .about-editorial .section-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .about-editorial h2 {
    margin: 0;
    font-size: clamp(1.8rem, 3vw, 2.35rem);
    letter-spacing: -.03em;
  }

  .about-editorial h3 {
    margin: 0 0 .75rem;
    font-size: 1.5rem;
    line-height: 1.25;
  }

  .about-editorial .about-story {
    max-width: 760px;
  }

  .about-editorial .about-story p {
    font-size: 1.03rem;
  }

  .about-editorial .about-project {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
    gap: clamp(1.5rem, 4vw, 3rem);
    padding: 1.6rem 0;
    border-top: 1px solid #e8e8e8;
  }

  .about-editorial .about-project:first-of-type {
    border-top: 0;
    padding-top: 0;
  }

  .about-editorial .about-project .eyebrow {
    display: block;
    margin-bottom: .5rem;
  }

  .about-editorial .about-project-body > :last-child {
    margin-bottom: 0;
  }

  .about-editorial .about-media {
    margin: 1.4rem 0;
  }

  .about-editorial .about-media img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
  }

  .about-editorial .video-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.3rem;
    margin: 1.5rem 0;
  }

  .about-editorial .video-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #eee;
  }

  .about-editorial .video-frame iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .about-editorial .video-caption {
    margin-top: .55rem;
    font-size: .85rem;
    line-height: 1.5;
  }

  .about-editorial .about-footer {
    padding: 2.5rem 0;
    text-align: center;
  }

  .about-editorial .about-footer p {
    max-width: 680px;
    margin: 1rem auto;
  }

  @media (max-width: 760px) {
    .about-editorial .about-hero,
    .about-editorial .about-thesis,
    .about-editorial .about-project,
    .about-editorial .video-grid {
      grid-template-columns: 1fr;
    }

    .about-editorial .about-hero {
      padding: 2rem 0;
    }

    .about-editorial .about-hero figure {
      max-width: 380px;
    }

    .about-editorial .about-thesis {
      gap: .65rem;
    }

    .about-editorial .about-project {
      gap: .65rem;
    }

    .about-editorial .about-nav {
      gap: .65rem 1rem;
    }
  }
</style>

<div class="about-editorial">

  <!-- EDITORIAL MASTHEAD -->
  <header class="about-masthead">
    <div class="eyebrow">Author · Entrepreneur · M&amp;A Advisor</div>
    <p class="site-name">DAVID MOLINA</p>
    <p class="topics">Systems · Entrepreneurship · Leadership · Ownership</p>
  </header>

  <nav class="about-nav" aria-label="Explore the website">
    <a href="{{ '/' | relative_url }}">Home</a>
    <a href="{{ '/writing/' | relative_url }}">Writing</a>
    <a href="{{ '/book/' | relative_url }}">The Book</a>
    <a href="{{ '/speaking/' | relative_url }}">Speaking</a>
  </nav>

  <!-- BIOGRAPHICAL INTRODUCTION -->
  <section class="about-hero" aria-labelledby="about-title">
    <div>
      <p class="eyebrow">About · David Molina</p>
      <h1 id="about-title">A life of building, serving, and learning.</h1>
      <p class="about-deck">Hi, I'm David Molina. I write about systems thinking, entrepreneurship, leadership, and building enduring organizations.</p>
      <p>My perspective comes from serving in the Army as both an enlisted soldier and officer, founding a federal government contracting company, building a remote national veterans nonprofit, creating a bilingual job board, advising business owners, and serving two terms as a governor-appointed commissioner.</p>
      <p>It also begins in the fields, harvesting oysters, apples, cucumbers, and berries across western and eastern Washington. Originally from Hood River, Oregon, I was raised in Mount Vernon, Washington, a small farm town north of Seattle.</p>
    </div>

<figure>
  <img
    src="https://davidmolina.s3.us-west-2.amazonaws.com/david_molina_headshot.jpeg"
    alt="David Molina visiting an old Army friend in Louisiana"
    width="640"
    height="800"
    fetchpriority="high"
  >
  <figcaption>David Molina</figcaption>
</figure>

</section>

  <aside class="about-thesis" aria-label="Perspective">
    <span class="eyebrow">A guiding question</span>
    <p>How do we build organizations that endure—and become less dependent on the people who founded them?</p>
  </aside>

  <!-- WRITING -->
  <section class="about-section" id="writing" aria-labelledby="writing-heading">
    <div class="section-heading">
      <h2 id="writing-heading">Writing &amp; Ideas</h2>
      <span class="eyebrow">Since 2009</span>
    </div>

<div class="about-story">
<p>Launched in 2009, <a href="https://www.davidcmolina.com/">davidcmolina.com</a> (previously davidmolina.github.io) is where I write about systems thinking, entrepreneurship, leadership, and building enduring organizations. It is the ideas and authorship platform for my work: a place to ask how leaders think in systems, how organizations institutionalize knowledge, and how founders move from operator to owner to steward.</p>
<p>Previously, my thoughts and insights were spread across Blogspot, Tumblr, Posterous, and Medium. While those were useful publishing platforms, I preferred to code. Now my writing lives under one roof, built with <a href="https://jekyllrb.com/">Jekyll</a>, hosted on GitHub, and available freely.</p>
<p>For shorter updates, find me through <a href="{{ '/connecting/' | relative_url }}">social platforms</a>, or explore my <a href="{{ '/resume/' | relative_url }}">résumé/CV</a>.</p>
</div>

</section>

  <!-- ENTREPRENEURSHIP & ADVISORY -->
  <section class="about-section" id="entrepreneurship" aria-labelledby="entrepreneurship-heading">
    <div class="section-heading">
      <h2 id="entrepreneurship-heading">Entrepreneurship &amp; Advisory</h2>
      <span class="eyebrow">Building and advising</span>
    </div>

    <article class="about-project">
  <div>
    <span class="eyebrow">Advisory · M&amp;A</span>
    <h3>molinas.consulting</h3>
  </div>
  <div class="about-project-body">
    <p><a href="https://www.molinas.consulting/">molinas.consulting</a> started as an experiment pairing with small business contractors. In 2022, I began providing technical assistance to Seattle-area veteran-, women-, and minority-owned contractors on developing estimates, responding to RFPs, and building out their back offices.</p>
    <p>The hands-on pairing approach reflects a simple belief: many of us learn best by doing, not by sitting through presentations. I worked with companies interested in projects involving King County, WSDOT, Sound Transit, and prime contractors.</p>

    <figure class="about-media">
      <img
        src="https://davidmolina.s3.us-west-2.amazonaws.com/david_jose_pairing_tabor.jpeg"
        alt="David Molina working with a client at Tabor 100"
        loading="lazy"
      >
      <figcaption>Working alongside a contractor at Tabor 100.</figcaption>
    </figure>

    <p>I worked one-on-one with contractors as a fractional executive and spoke about government contracting, estimating strategies, and systematizing operations. In late 2025, I began shifting toward productized services and a stronger focus on enterprise value, succession, and sell-side M&amp;A advisory.</p>

    <figure class="about-media">
      <img
        src="https://davidmolina.s3.us-west-2.amazonaws.com/david_molina_tri-cities.jpeg"
        alt="David Molina speaking in the Tri-Cities"
        loading="lazy"
      >
      <figcaption>Speaking in the Tri-Cities.</figcaption>
    </figure>
  </div>
</article>

<article class="about-project">
  <div>
    <span class="eyebrow">Book · Operational framework</span>
    <h3>The Principles of MESLO</h3>
  </div>
  <div class="about-project-body">
    <p>In 2013, I spent three weeks writing a 33,000-word manuscript. That early work developed into <a href="https://principlesofmeslo.com/"><em>The Principles of MESLO</em></a>, a published book about estimating the value of <em>x</em> (bid price), understanding the value of <em>t</em> (time), and operationalizing the back office.</p>
  </div>
</article>

<article class="about-project">
  <div>
    <span class="eyebrow">Federal contracting · Founded 2015</span>
    <h3>Molinas Construction Co.</h3>
  </div>
  <div class="about-project-body">
    <p>In 2015, I founded <a href="https://www.molinas.co/">Molinas Construction Company</a>, a federal contracting firm serving government agencies and commercial clients. What began as a garage-based company evolved from landscaping IDIQs into work spanning general contracting, earthwork, material procurement, equipment procurement, and tenant leasing.</p>
    <p>From 2018 to 2022, I ran the company full-time and prioritized recruiting and retaining veterans, Latinos, immigrants, and young people in the trades. During this period, I volunteered and served on boards including the <a href="https://fororegonstate.org/">Oregon State University Alumni Association</a>, <a href="https://omsi.edu/">Oregon Museum of Science and Industry (OMSI)</a>, and <a href="https://latinobuilt.org/">LatinoBuilt</a>.</p>
    <p>After leading the company through sustained growth, I transitioned away from day-to-day operations to focus on advisory work and longer-term initiatives.</p>
  </div>
</article>

<article class="about-project">
  <div>
    <span class="eyebrow">Technology · Founded 2013</span>
    <h3>BilingualHire</h3>
  </div>
  <div class="about-project-body">
    <p>In 2013, I built a mobile-friendly job platform connecting employers with bilingual Spanish- and English-speaking talent. Employers could sign up, log in, and publish job postings without manual intervention.</p>
    <p>The following year, I built Operation Code, which quickly demanded my full attention. I sunset BilingualHire in 2015 to focus on Operation Code, and its remaining services folded into Molinas Construction Co.</p>
  </div>
</article>

</section>

  <!-- NONPROFIT LEADERSHIP -->
  <section class="about-section" id="operation-code" aria-labelledby="operation-code-heading">
    <div class="section-heading">
      <h2 id="operation-code-heading">Operation Code</h2>
      <span class="eyebrow">Veterans · Technology · Education</span>
    </div>

    <div class="about-story">
  <p>In 2014, after learning enough Ruby on Rails to be dangerous, I launched a website petition urging Congress and the U.S. Department of Veterans Affairs to reduce barriers preventing veterans from using Post-9/11 GI Bill education benefits for coding bootcamp tuition, housing, and related costs.</p>
  <p>Veteran-founded and led, <a href="https://operationcode.org/">Operation Code</a> grew from an open-source project into a nationally recognized 501(c)(3) nonprofit. It built a large-scale veteran-focused software mentorship network and worked with policymakers and educational institutions to expand technical training pathways.</p>
</div>

<div class="video-grid">
  <figure>
    <div class="video-frame">
      <iframe
        src="https://player.vimeo.com/video/124866675"
        title="Operation Code — On a mission to expand the GI Bill"
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <figcaption class="video-caption">
      <a href="https://vimeo.com/124866675">Operation Code — On a mission to expand the GI Bill</a>, by Teresa Mahoney.
    </figcaption>
  </figure>

  <figure>
    <div class="video-frame">
      <iframe
        src="https://player.vimeo.com/video/124794084"
        title="GI Bill should expand to cover code school: Victor Molina's story"
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <figcaption class="video-caption">
      <a href="https://vimeo.com/124794084">GI Bill should expand to cover code school: Victor Molina's story</a>, by Teresa Mahoney.
    </figcaption>
  </figure>
</div>

<div class="about-story">
  <p>Over the following years, more than thirty coding schools across twenty states became GI Bill eligible. Advocacy efforts contributed to the federal VET TEC initiative, which expanded access to technical education for veterans. The organization operated as a distributed, remote-first team across 19 time zones, with directors located throughout the United States.</p>

  <figure class="about-media">
  <div class="video-frame">
    <iframe
      src="https://www.youtube.com/embed/xN7yMoe38xc"
      title="David Molina speaking"
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</figure>

  <p>In 2018, I stepped down as Executive Director to allow the organization to scale under new stewardship.</p>
</div>

</section>

  <!-- MILITARY AND PUBLIC SERVICE -->
  <section class="about-section" id="service" aria-labelledby="service-heading">
    <div class="section-heading">
      <h2 id="service-heading">Military &amp; Public Service</h2>
      <span class="eyebrow">Service and stewardship</span>
    </div>

    <div class="about-story">
  <p>From 2011 to 2013, I served as an Army Captain at the <a href="https://www.dover.af.mil/News/Article/229696/dover-afb-welcomes-jped/">Joint Personal Effects Depot (JPED)</a> at Dover Air Force Base, a mission responsible for the dignified collection and return of personal effects belonging to fallen and wounded service members.</p>
  <p>During a 24-month wartime mobilization in a joint, multi-service environment, I served as Plans, Training &amp; Operations Officer (S-2/3 OIC), with additional responsibilities in public affairs and protocol. I modernized standard operating procedures, co-authored the Center for Army Lessons Learned JPED Handbook, implemented cross-training certifications, launched internal and external digital platforms, and coordinated senior-level visits involving general officers, Pentagon leadership, and Members of Congress.</p>

  <p>During President Barack Obama's visit to Dover in 2011, I served as Army Liaison to the Secretary of the Army and Sergeant Major of the Army.</p>
  <p>Following my first active-duty assignment at Aberdeen Proving Ground, Maryland, I staffed the <a href="https://www.oregonlegislature.gov/committees/hvet">Oregon House Committee on Veterans &amp; Emergency Services</a>. Earlier in my military career, I served as an Aide-de-Camp to an Army general officer. Prior to commissioning, I was an enlisted soldier assigned to the 364th Civil Affairs Brigade.</p>
  <p>In my early twenties, I was appointed by Oregon Governor Ted Kulongoski to the <a href="https://www.oregon.gov/oac/ocha/Pages/index.aspx">Oregon Commission on Hispanic Affairs</a>, serving as Vice Chair and organizing public forums on civil rights, healthcare disparities, and workforce access.</p>
</div>

</section>

  <!-- SPEAKING -->
  <section class="about-section" id="speaking" aria-labelledby="speaking-heading">
    <div class="section-heading">
      <h2 id="speaking-heading">Talks &amp; Workshops</h2>
      <span class="eyebrow">Sharing what I've learned</span>
    </div>

    <div class="about-story">
  <p>For workshops, speaking engagements, technical assistance initiatives, or operational training inquiries, <a href="{{ '/speaking/' | relative_url }}">get in touch through my speaking page</a>.</p>
</div>
</section>

  <footer class="about-footer">
    <span class="eyebrow">Keep exploring</span>
    <p>My writing connects experiences in public service, entrepreneurship, and organizational leadership to the systems that help institutions endure.</p>
    <p>
      <a href="{{ '/writing/' | relative_url }}">Read my writing →</a>
      &nbsp;&nbsp;·&nbsp;&nbsp;
      <a href="{{ '/book/' | relative_url }}">Explore the book →</a>
    </p>
  </footer>

</div>