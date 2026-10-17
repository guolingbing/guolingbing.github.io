---
permalink: /
title: ""
excerpt: "Lingbing Guo, Assistant Professor at Nanjing University. Research on knowledge-driven AI, large language models, intelligent agents, knowledge graphs, and multimodal reasoning."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<section id="biography" class="home-section biography" aria-labelledby="biography-title">
  <span id="about-me" class="legacy-anchor" aria-hidden="true"></span>
  <h2 id="biography-title">Biography</h2>
  <p>I am an Assistant Professor at the <a href="https://is.nju.edu.cn/">School of Intelligence Science and Technology</a>, <a href="https://www.nju.edu.cn/">Nanjing University</a>. My research focuses on knowledge-driven AI, particularly <strong>large language models and intelligent agents</strong>, combining knowledge graphs and multimodal learning to support reliable reasoning and decision-making.</p>
  <p>I received my Ph.D. from Zhejiang University in 2025, advised by Prof. <a href="https://person.zju.edu.cn/huajun">Huajun Chen</a>, and my master’s degree from Nanjing University in 2019, advised by Prof. <a href="https://ws.nju.edu.cn/~whu/">Wei Hu</a>. Before joining Nanjing University, I was an Associate Researcher at Tianjin University.</p>
</section>

<section id="research" class="home-section" aria-labelledby="research-title">
  <h2 id="research-title">Research Interests</h2>
  <p>My current work spans three closely connected directions:</p>
  <ul class="research-list">
    <li><h3>Knowledge-Driven LLMs &amp; Agents</h3>Using dynamic ontologies to organize and revise knowledge; learning from interaction and feedback to build reusable agent memory and reasoning skills.</li>
    <li><h3>Knowledge-Guided Reasoning &amp; Multi-Agent Collaboration</h3>Using explicit knowledge of tasks, capabilities, and dependencies to support reasoning, planning, and coordination.</li>
    <li><h3>Multimodal Learning &amp; Knowledge Graphs</h3>Learning and reasoning across visual, textual, and relational information, with interests in structural visual understanding, entity alignment, and graph completion.</li>
  </ul>
</section>

<section id="news" class="home-section" aria-labelledby="news-title">
  <h2 id="news-title">News</h2>
  {% assign pinned_news = site.data.news | where: "pinned", true %}
  {% assign recent_news = site.data.news | where_exp: "item", "item.pinned != true" %}
  {% assign news_items = pinned_news | concat: recent_news %}
  <ul class="news-list">
    {% for item in news_items %}
    <li{% if item.pinned %} class="news-pinned"{% endif %}{% if item.anchor %} id="{{ item.anchor | escape }}"{% endif %}{% if item.lang %} lang="{{ item.lang | escape }}"{% endif %}><span class="news-date">{% if item.pinned %}置顶{% else %}{{ item.date }}{% endif %}</span><div>{{ item.text | markdownify }}</div></li>
    {% endfor %}
  </ul>
</section>

<section id="publications" class="home-section" aria-labelledby="publications-title">
  <span id="-publications" class="legacy-anchor" aria-hidden="true"></span>
  <div class="section-heading">
    <h2 id="publications-title">Publications</h2>
    <div class="bibliography-links"><a href="{{ site.author.googlescholar }}">Google Scholar</a><span aria-hidden="true"> / </span><a href="{{ site.author.dblp }}">DBLP</a></div>
  </div>
  <p class="section-note">Selected work, followed by all published and accepted papers by year.</p>
  {% assign selected_papers = site.data.publications | where: "selected", true %}
  {% assign publication_years = site.data.publications | group_by: "year" | sort: "name" | reverse %}
  <div class="publication-toolbar">
    <nav class="year-navigation" aria-label="Publication groups">
      <a href="#selected-publications">Selected</a>
      {% for year in publication_years %}<a href="#publications-{{ year.name }}">{{ year.name }}</a>{% endfor %}
    </nav>
    <button class="text-button" id="toggle-publications" type="button" hidden>Expand all years</button>
  </div>
  <details class="publication-year" id="selected-publications" open>
    <summary><span class="year-label">Selected</span><span class="paper-count">{{ selected_papers.size }} papers</span><span class="disclosure-icon" aria-hidden="true"></span></summary>
    <ol class="publication-list">
      {% for paper in selected_papers %}{% include publication.html paper=paper %}{% endfor %}
    </ol>
  </details>
  <div id="publication-years">
    {% for year in publication_years %}
    <details class="publication-year" id="publications-{{ year.name }}">
      <summary><span class="year-label">{{ year.name }}</span><span class="paper-count">{{ year.items.size }} papers</span><span class="disclosure-icon" aria-hidden="true"></span></summary>
      <ol class="publication-list">
        {% for paper in year.items %}{% include publication.html paper=paper %}{% endfor %}
      </ol>
    </details>
    {% endfor %}
  </div>
</section>

<section id="preprints" class="home-section" aria-labelledby="preprints-title">
  <h2 id="preprints-title">Preprints</h2>
  <p class="section-note">Recent work on arXiv, listed separately from published and accepted papers.</p>
  <details class="publication-year preprints">
    <summary><span class="year-label">2026</span><span class="paper-count">{{ site.data.preprints.size }} preprints</span><span class="disclosure-icon" aria-hidden="true"></span></summary>
    <ol class="publication-list">
      {% for paper in site.data.preprints %}{% include publication.html paper=paper %}{% endfor %}
    </ol>
  </details>
</section>

<section id="awards" class="home-section" aria-labelledby="awards-title">
  <h2 id="awards-title">Awards</h2>
  <dl class="detail-list">
    {% for award in site.data.awards %}
    <div><dt>{{ award.year }}</dt><dd>{{ award.title | escape }}</dd></div>
    {% endfor %}
  </dl>
</section>

<section id="service" class="home-section" aria-labelledby="service-title">
  <h2 id="service-title">Professional Service</h2>
  <dl class="detail-list">
    <div><dt>Area Chair</dt><dd>ACL ARR, AAAI, ICLR.</dd></div>
    <div><dt>Reviewer</dt><dd>NeurIPS, ICLR, ICML, ACL ARR, AAAI, IJCAI, SIGIR, ACM MM, ECML, ISWC, COLING, TKDE, KBS, among others.</dd></div>
  </dl>
</section>

<section id="talks" class="home-section" aria-labelledby="talks-title">
  <h2 id="talks-title">Talks</h2>
  <dl class="detail-list">
    <div><dt>2025</dt><dd><a href="https://ccf.org.cn/cncc2025/schedule_d_4222">Graph Agents: Paradigms, Architectures, and Practices</a><span class="detail-note">CNCC Tutorial</span></dd></div>
  </dl>
</section>

<footer class="homepage-footer">
  <div class="footer-identity">
    <span>Lingbing Guo · Nanjing University</span>
    <a class="visitor-counter" href="https://info.flagcounter.com/r4RW"><img src="https://s05.flagcounter.com/mini/r4RW/bg_FFFFFF/txt_000000/border_CCCCCC/flags_0/" alt="Flag Counter visitor statistics"></a>
  </div>
  <a href="#biography">Back to top ↑</a>
</footer>
