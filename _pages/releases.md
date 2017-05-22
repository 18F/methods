---
title: Releases
layout: secondary
---

# Releases

{% for release in site.data.releases %}

## Version {{ release.name }}

<p class="site-subheading">{{ release.published_at | date: "%B %d, %Y" }}</p>

{{ release.body | markdownify }}

<hr />
{% endfor %}
