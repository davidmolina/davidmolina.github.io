---
layout: default
title: Speaking
seo_title: David Molina | Speaker on Government Contracting, Estimating & Leadership
description: >
  David Molina is an author, entrepreneur, M&A advisor, and speaker on modern estimating, government contracting, leadership, entrepreneurship, and building organizations that endure.
author: "David Molina"
permalink: /speaking/
redirect_from:
  - /speakers/
---

<style>
  .speaking-editorial {
    --ink: #202020;
    --muted: #6a6a6a;
    --line: #d9d9d9;
    max-width: 1040px;
    margin: 0 auto;
    color: var(--ink);
  }

  .speaking-editorial *,
  .speaking-editorial *::before,
  .speaking-editorial *::after {
    box-sizing: border-box;
  }

  .speaking-editorial a {
    color: inherit;
    text-underline-offset: 3px;
  }

  .speaking-editorial a:hover {
    color: #075a9c;
  }

  .speaking-editorial h1,
  .speaking-editorial h2,
  .speaking-editorial h3 {
    font-family: Georgia, 'Times New Roman', serif;
    color: #181818;
  }

  .speaking-editorial p,
  .speaking-editorial li {
    line-height: 1.7;
  }

  .speaking-editorial .eyebrow {
    font: 700 .72rem/1.5 Arial, sans-serif;
    letter-spacing: .11em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .speaking-editorial .masthead {
    text-align: center;
    border-bottom: 1px solid var(--line);
    padding: 1.6rem 0 1.35rem;
  }

  .speaking-editorial .masthead .site-name {
    font: 700 clamp(1.55rem, 3vw, 2.25rem)/1.2 Georgia, serif;
    letter-spacing: -.035em;
    margin: .35rem 0 .4rem;
  }

  .speaking-editorial .masthead .topics {
    margin: 0;
    font-size: .88rem;
    color: #555;
  }

  .speaking-editorial .page-nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: .75rem 1.6rem;
    padding: .95rem 0;
    border-bottom: 1px solid var(--line);
    font-size: .9rem;
  }

  .speaking-editorial .page-nav a {
    text-decoration: none;
  }

  .speaking-editorial .hero {
    padding: 2.5rem 0 2.3rem;
    border-bottom: 1px solid var(--line);
  }

  .speaking-editorial .hero-image {
    display: block;
    width: 100%;
    height: auto;
    max-height: 580px;
    object-fit: contain;
  }

  .speaking-editorial .hero figure {
    margin: 0 0 2rem;
  }

  .speaking-editorial figcaption {
    color: var(--muted);
    font-size: .78rem;
    margin-top: .55rem;
  }

  .speaking-editorial .hero-copy {
    max-width: 810px;
  }

  .speaking-editorial h1 {
    font-size: clamp(2.65rem, 5.6vw, 4.9rem);
    line-height: 1.08;
    letter-spacing: -.045em;
    margin: .5rem 0 1.1rem;
  }

  .speaking-editorial .hero-deck {
    font: 400 clamp(1.15rem, 2vw, 1.5rem)/1.5 Georgia, serif;
  }

  .speaking-editorial .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin-top: 1.4rem;
  }

  .speaking-editorial .actions a {
    font-weight: 700;
  }

  .speaking-editorial .section {
    padding: 2.4rem 0;
    border-bottom: 1px solid var(--line);
  }

  .speaking-editorial .section-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.4rem;
  }

  .speaking-editorial h2 {
    font-size: clamp(1.7rem, 3vw, 2.2rem);
    letter-spacing: -.025em;
    margin: 0;
  }

  .speaking-editorial h3 {
    font-size: clamp(1.45rem, 2.6vw, 2rem);
    line-height: 1.22;
    margin: .45rem 0 .5rem;
  }

  .speaking-editorial h4 {
    font-size: 1rem;
    margin: 0 0 1rem;
    color: #555;
  }

  .speaking-editorial .talk {
    border-top: 2px solid var(--ink);
    padding-top: 1.1rem;
  }

  .speaking-editorial .talk p {
    margin: 0 0 1rem;
  }

  .speaking-editorial .talk-meta {
    font-size: .91rem;
    color: #555;
  }

  .speaking-editorial .talk-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  .speaking-editorial .two-col {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  .speaking-editorial .inquiry-intro {
    max-width: 720px;
  }

  .speaking-editorial .inquiry-form {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.1rem 1.4rem;
    margin-top: 1.5rem;
  }

  .speaking-editorial .inquiry-form label {
    display: grid;
    gap: .35rem;
    font-size: .87rem;
    font-weight: 700;
  }

  .speaking-editorial .inquiry-form input,
  .speaking-editorial .inquiry-form select,
  .speaking-editorial .inquiry-form textarea {
    display: block;
    width: 100%;
    min-width: 0;
    border: 1px solid #bcbcbc;
    border-radius: 0;
    background: #fff;
    color: #222;
    font: 400 .95rem/1.4 Arial, sans-serif;
    padding: .75rem;
  }

  .speaking-editorial .inquiry-form textarea {
    min-height: 135px;
    resize: vertical;
  }

  .speaking-editorial .full-width {
    grid-column: 1 / -1;
  }

  .speaking-editorial .form-note {
    font-size: .86rem;
    color: var(--muted);
    margin: 0;
  }

  .speaking-editorial .inquiry-form button {
    padding: .9rem 1.4rem;
    border: 0;
    border-radius: 0;
    background: var(--ink);
    color: #fff;
    font: 700 .9rem Arial, sans-serif;
    cursor: pointer;
  }

  .speaking-editorial .inquiry-form button:hover {
    background: #444;
  }

  @media (max-width: 760px) {
    .speaking-editorial .talk-grid,
    .speaking-editorial .two-col,
    .speaking-editorial .inquiry-form {
      grid-template-columns: 1fr;
    }

    .speaking-editorial .section-heading {
      display: block;
    }

    .speaking-editorial .page-nav {
      gap: .7rem 1rem;
    }

    .speaking-editorial .hero {
      padding-top: 1.5rem;
    }
  }
</style>
<main class="speaking-editorial">
  <header class="masthead">
    <div class="eyebrow">Author · Entrepreneur · M&amp;A Advisor</div>
    <p class="site-name">DAVID MOLINA</p>
    <p class="topics">Systems · Entrepreneurship · Leadership · Ownership</p>
  </header>

  <nav class="page-nav" aria-label="Explore the website">
    <a href="{{ '/' | relative_url }}">Home</a>
    <a href="{{ '/writing/' | relative_url }}">Writing</a>
    <a href="{{ '/about/' | relative_url }}">About</a>
    <a href="{{ '/book/' | relative_url }}">The Book</a>
    <a href="#talks">Talks</a>
    <a href="#inquiry">Inquiries</a>
  </nav>

  <section class="hero" aria-labelledby="speaking-heading">
    <figure>
      <img
        class="hero-image"
        src="https://davidmolina.s3.us-west-2.amazonaws.com/david_molina_tri-cities.jpeg"
        alt="David Molina speaking to workshop attendees in Tri-Cities, Washington"
        fetchpriority="high"
      >
      <figcaption>David Molina speaking in Tri-Cities, Washington.</figcaption>
    </figure>

    <div class="hero-copy">
      <p class="eyebrow">David Molina · Author &amp; Speaker</p>
      <h1 id="speaking-heading">Building organizations that endure.</h1>
      <p class="hero-deck">Author · Entrepreneur · M&amp;A Advisor · Speaker</p>
      <p>
        David Molina speaks on modern estimating, government contracting,
        leadership, entrepreneurship, ownership, and building organizations
        capable of enduring beyond their founders.
      </p>
      <div class="actions">
        <a href="#talks">Explore Talks →</a>
        <a href="#inquiry">Invite David to Speak →</a>
      </div>
    </div>
  </section>

  <section class="section" id="talks" aria-labelledby="featured-talk-heading">
    <div class="section-heading">
      <h2 id="featured-talk-heading">Featured Speaking Experience</h2>
      <span class="eyebrow">Signature talk</span>
    </div>
    <article class="talk">
      <p class="eyebrow">Modern Estimating &amp; Government Contracting</p>
      <h3>Know the Opportunity. Know Your Number. Make the Decision.</h3>
      <p>Government contracting creates opportunity, but opportunity alone does not create profitable businesses.</p>
      <p>
        David Molina takes contractors inside the decisions that happen before a bid
        is submitted: understanding the solicitation, deciding whether to pursue it,
        building the estimate, knowing the company's true costs, pricing for risk
        and profit, and developing the operational systems necessary to perform.
      </p>
      <p>
        Drawing from <em>The Principles of MESLO</em>, federal contracting experience,
        and work with small-business technical assistance programs, this session
        connects modern estimating, AI-assisted solicitation analysis, go/no-go
        decision-making, and operational readiness into one practical system.
      </p>
      <p class="talk-meta">
        <strong>Best for:</strong> APEX Accelerators · procurement technical-assistance
        programs · ports · transit agencies · DOT programs · SBA/resource partners ·
        contractor associations · construction conferences · colleges and workforce programs
      </p>
    </article>
  </section>

  <section class="section" aria-labelledby="additional-talks-heading">
    <div class="section-heading">
      <h2 id="additional-talks-heading">Additional Talks</h2>
      <span class="eyebrow">Leadership · Workforce · Ownership</span>
    </div>
    <div class="talk-grid">
      <article class="talk">
        <p class="eyebrow">Leadership · Entrepreneurship · Ownership</p>
        <h3>From the Fields to the Front</h3>
        <h4>Leadership, Ownership &amp; Building What Endures</h4>
        <p>
          Leadership is not a title inherited at the top of an organization.
          It is a responsibility learned through service, work, family,
          adversity, and eventually ownership.
        </p>
        <p class="talk-meta"><strong>Best for:</strong> leadership programs · Hispanic/Latino chambers · colleges · entrepreneurship conferences · professional associations</p>
      </article>
      <article class="talk">
        <p class="eyebrow">Veterans · Technology · Workforce</p>
        <h3>America's Untapped Technical Talent</h3>
        <h4>Veterans, Technology &amp; the Workforce Pipeline</h4>
        <p>How do institutions stop overlooking capable people simply because the pathway into an industry was not designed for them?</p>
        <p class="talk-meta"><strong>Best for:</strong> government workforce programs · veteran programs · higher education · technology conferences · employers</p>
      </article>
    </div>
  </section>

  <section class="section" aria-labelledby="formats-heading">
    <div class="section-heading">
      <h2 id="formats-heading">Engagement Formats</h2>
    </div>
    <div class="two-col">
      <div>
        <ul>
          <li>Keynotes and featured talks</li>
          <li>Workshops and technical-assistance sessions</li>
          <li>Panel conversations and fireside chats</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Executive sessions for owners, operators, and program leaders</li>
          <li>Custom sessions for government contracting, estimating, MESLO, systems, ownership, and workforce development</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section" aria-labelledby="bio-heading">
    <div class="section-heading">
      <h2 id="bio-heading">Short Bio</h2>
    </div>
    <p>
      David Molina is an author, entrepreneur, M&amp;A advisor, and former U.S.
      Army Captain who speaks about the systems behind durable organizations.
      He is the author of <em>The Principles of MESLO: The Art &amp; Science of an Estimate</em>
      and founder of the MESLO framework. His experience spans military leadership,
      government contracting, entrepreneurship, technology, nonprofit leadership,
      and business transactions. His talks connect practical operating experience
      with a central question: how do we build organizations that become less
      dependent on their founders and more valuable over time?
    </p>
  </section>

  <section class="section" aria-labelledby="experience-heading">
    <div class="section-heading">
      <h2 id="experience-heading">Featured Experience</h2>
    </div>
    <div class="two-col">
      <ul>
        <li>GitHub Universe</li>
        <li>CodeConf LA</li>
        <li>Bunker Labs</li>
        <li>Tech Inclusion Seattle</li>
      </ul>
      <ul>
        <li>APEX Estimating Essentials</li>
        <li>Tabor100</li>
        <li>Migrant Youth Conference</li>
      </ul>
    </div>
  </section>

  <section class="section" id="inquiry" aria-labelledby="inquiry-heading">
    <div class="section-heading">
      <h2 id="inquiry-heading">Invite David to Speak</h2>
      <span class="eyebrow">Speaking &amp; workshop inquiries</span>
    </div>
    <p class="inquiry-intro">
      For speaking engagements, workshops, and planner inquiries, use the fields
      below to draft an email with the details needed to evaluate fit, format,
      and timing. Your email application will open for review and sending.
    </p>
    <form class="inquiry-form" id="speaking-inquiry-form" action="mailto:david@molinas.co" method="post" enctype="text/plain">
      <label>
        Company / Organization
        <input type="text" name="Company / Organization">
      </label>
      <label>
        Point of Contact
        <input type="text" name="Point of Contact">
      </label>
      <label>
        Phone
        <input type="tel" name="Phone">
      </label>
      <label>
        Event Date
        <input type="date" name="Event Date">
      </label>
      <label>
        Event Location
        <input type="text" name="Event Location" placeholder="Venue, city, state, or virtual">
      </label>
      <label>
        Expected Attendance
        <select name="Expected Attendance">
          <option>Under 100</option>
          <option>100-250</option>
          <option>250-500</option>
          <option>500-1500</option>
          <option>1500-2500</option>
          <option>2500+</option>
        </select>
      </label>
      <label>
        Books for Attendees
        <select name="Books for Attendees">
          <option>No books needed</option>
          <option>Interested - quantity TBD</option>
          <option>10-24 copies</option>
          <option>25-49 copies</option>
          <option>50-99 copies</option>
          <option>100-249 copies</option>
          <option>250+ copies</option>
        </select>
      </label>
      <label>
        Book Arrangement
        <select name="Book Arrangement">
          <option>Organization purchases copies for attendees</option>
          <option>Interested in on-site book sales</option>
          <option>Interested in signed copies</option>
          <option>Not sure - please advise</option>
        </select>
      </label>
      <label>
        Engagement Format
        <select name="Engagement Format">
          <option>Keynote</option>
          <option>Workshop</option>
          <option>Panel</option>
          <option>Executive session</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        Topic of Interest
        <select name="Topic of Interest">
          <option>Government Contracting &amp; Estimating</option>
          <option>Leadership &amp; Entrepreneurship</option>
          <option>Veterans &amp; Technology</option>
          <option>Building Organizations That Endure</option>
          <option>Custom</option>
        </select>
      </label>
      <label>
        Speaking / Program Budget
        <select name="Speaking / Program Budget">
          <option>Under $2,500</option>
          <option>$2,500-$5,000</option>
          <option>$5,000-$10,000</option>
          <option>$10,000-$25,000</option>
          <option>$25,000+</option>
          <option>Government / institutional rate - TBD</option>
        </select>
      </label>
      <label>
        Travel &amp; Lodging
        <select name="Travel and Lodging">
          <option>Organization covers travel and lodging</option>
          <option>Organization covers travel only</option>
          <option>Organization covers lodging only</option>
          <option>Travel/lodging must be included in speaker fee</option>
          <option>Local / no overnight travel expected</option>
          <option>Not sure / let&#x27;s discuss</option>
        </select>
      </label>
      <p class="form-note full-width">Book purchases, travel, and other event expenses may be quoted separately.</p>
      <label class="full-width">
        Notes
        <textarea name="Notes"></textarea>
      </label>
      <div class="full-width">
        <button type="submit">Draft Speaking Inquiry →</button>
        <p class="form-note">This opens your email application. Please send the drafted email to complete your inquiry.</p>
      </div>
    </form>
  </section>
</main>

<script>
  (function () {
    var form = document.getElementById('speaking-inquiry-form');

    if (!form) {
      return;
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var data = new FormData(form);
      var company = data.get('Company / Organization') || 'Organization';
      var location = data.get('Event Location') || 'Event Location';
      var attendance = data.get('Expected Attendance') || 'Expected Attendance';
      var topic = data.get('Topic of Interest') || 'Topic of Interest';
      var subject = 'Speaking: ' + company + ' at ' + location + ' for ' + attendance + ' on ' + topic;
      var lines = [];

      data.forEach(function (value, key) {
        lines.push(key + ': ' + value);
      });

      window.location.href = 'mailto:david@molinas.co?subject=' +
        encodeURIComponent(subject) + '&body=' +
        encodeURIComponent(lines.join('\n'));
    });
  }());
</script>
