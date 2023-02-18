---
---

// ^ that up there is frontmatter tags so that Jekyll will process this file and
// replace {{ site.baseurl }} correctly. Without the frontmatter tags, Jekyll
// copies the file unedited.

const addHeadingLinks = () => {
  const ids = new Set();

  const slugify = (str) => {
    let idx = "";
    let slug = str.toLowerCase().replace(/[^a-z0-9]/gi, "-");

    let id = `${slug}${idx ? "-" : ""}${idx}`;

    while (ids.has(id)) {
      idx = idx ? idx + 1 : 1;
      id = `${slug}${idx ? "-" : ""}${idx}`;
    }

    ids.add(id);

    return id;
  };

  const headings = document.querySelectorAll(
    "main h2, main h3, main h4, main h5, main h6"
  );
  for (const heading of headings) {
    if (!heading.id) {
      heading.id = slugify(heading.innerText);
    }

    heading.innerHTML = `${heading.innerText} <span aria-hidden="true" class="heading-permalink"><a href="#${heading.id}" aria-label="Permanent link to ${heading.innerText}" class="usa-link heading-link--symbol"><svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
    <use xlink:href="#svg-link"></use>
    </svg></a></span>`;
  }
};

const markExternalLinks = () => {
  const externalLinkIcon = document.createElement("img");
  externalLinkIcon.setAttribute(
    "src",
    `{{ site.baseurl }}/assets/uswds/img/launch.svg`
  );
  externalLinkIcon.setAttribute("alt", "(external link)");
  externalLinkIcon.setAttribute("style", "width: 1rem;");

  Array.from(document.querySelectorAll("main a[href]"))
    .filter((a) => {
      const href = a.getAttribute("href");
      return (
        !href.startsWith(window.location.origin) &&
        !/^[/#]/.test(a.getAttribute("href"))
      );
    })
    .forEach((a) => a.appendChild(externalLinkIcon.cloneNode()));
};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    addHeadingLinks();
    markExternalLinks();
  },
  false
);
