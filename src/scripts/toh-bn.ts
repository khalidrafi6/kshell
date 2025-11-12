const tocLinks = document.querySelectorAll<HTMLAnchorElement>(".toc-li a");
const headings = document.querySelectorAll<HTMLElement>(
  "#_top, article h1, article h2, article h3, article h4",
);
const tocMap = new Map<Element, HTMLElement>();

// Map TOC links to their corresponding headings
for (const link of tocLinks) {
  const id = decodeURIComponent(link.href.split("#")[1]);
  const heading = document.getElementById(id);
  if (heading) tocMap.set(heading, link as HTMLElement);
}
