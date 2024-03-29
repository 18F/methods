---
title: About
layout: page
permalink: /about/
---

# About

The 18F Methods are a collection of tools that describe how our teams put human-centered design into practice. We’ve gathered them here and created simplified instructions to help other organizations and federal offices adopt human-centered design into their own projects. These cards are focused on design in the context of digital services, but can be adapted to non-technical design projects as well.

## The basics of human-centered design
Human-centered design, also referred to as "user-centered design," is a methodology that incorporates feedback from the people for whom you are designing throughout the design process. The goal of human-centered design is to end up with a solution that is tailored to meet people's needs, with little wasted effort and reduced risk. To achieve this goal, design teams at 18F talk with and observe real users to understand their needs, context, and challenges, come up with design concepts that might address these challenges, and then test them with real users. Find more resources on human-centered design in government in 18F's [User Experience Design Guide](https://ux-guide.18f.gov/) or at [digital.gov](https://digital.gov/topics/design/), including this overview of [the basics of human-centered design in government](https://www.youtube.com/watch?v=DGDCd2ELpok) from the Lab@OPM.

## Using the 18F Methods
The 18F Methods are broken up into the four broad design phases your team is likely to go through during a project. The four phases are [Discover]({{site.baseurl}}/discover), [Decide]({{site.baseurl}}/decide), [Make]({{site.baseurl}}/make), [Validate]({{site.baseurl}}/validate). We provide cards that walk you through the steps of each phase and cards that deal with the [fundamentals]({{site.baseurl}}/fundamentals). While some cards refer to other methods, you may use them independently. You do not need to use all the cards in a section or complete certain tasks before moving on to others. Take whatever cards are most useful to your team and incorporate more tools as you’re ready.

We’ve included additional guidance for using these methods in government research, specifically around the [Paperwork Reduction Act (PRA)](https://www.opm.gov/about-us/open-government/digital-government-strategy/fitara/paperwork-reduction-act-guide.pdf). We’re only able to include brief guidance on the PRA, and federal workers should check with their agency counsel for additional guidance. You should also read the cards in the fundamentals section for more background on conducting design research as a government employee.

## Go behind the scenes
As with all of 18F’s products, the 18F Methods are completely open source. You are free to copy, share, or reuse them [as you wish](https://github.com/18F/methods/blob/staging/LICENSE.md). We also welcome input from the public or our government colleagues, whether it’s correcting a typo or suggesting a new method to include. You can see our [guidelines for contributing on GitHub](https://github.com/18F/methods/blob/staging/CONTRIBUTING.md). To share your feedback about the Methods site, click the **Provide feedback** button that you can find at the bottom of each page or open an issue or pull request in [our GitHub repository](https://github.com/18F/methods).

## Release notes

{% for release in site.data.releases %}
### {{ release.name }}
<p class="site-subheading">{{ release.published_at | date: "%B %d, %Y" }}</p>
{{ release.body | markdownify }}
{% endfor %}
