document.addEventListener("DOMContentLoaded", () => {
  const ids = new Set();

  const slugify = (str) => {
    let idx = "";
    let slug = str.toLowerCase().replace(/[^a-z0-9]/ig, '-');

    let id = `${slug}${idx ? '-' : ''}${idx}`;

    while (ids.has(id)) {
      idx = idx ? idx + 1 : 1;
      id = `${slug}${idx ? '-' : ''}${idx}`;
    }

    ids.add(id);

    return id;
  };

  const headings = document.querySelectorAll(
    "main h1, main h2, main h3, main h4, main h5, main h6"
  );
  for (const heading of headings) {
    if (!heading.id) {
      heading.id = slugify(heading.innerText);
    }

    heading.innerHTML = `${heading.innerText} <a href="#${heading.id}" aria-hidden="true" tabindex="-1" class="usa-link heading-link--symbol">#</a>`;
  }
});
