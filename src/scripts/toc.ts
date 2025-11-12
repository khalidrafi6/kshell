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

function checkVisibility(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight,
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

const observer = new IntersectionObserver(
  () => {
    let visible: HTMLElement | null = null;

    for (const heading of headings) {
      const isVisible = checkVisibility(heading);
      const link = tocMap.get(heading);

      if (!isVisible) {
        continue;
      }

      if (link) link.classList.add("active");

      if (!visible) {
        visible = heading;
      }

      break;
    }

      // Previous code before interactive scrolling
      // if (visible) {
      //   for (const key of tocMap.keys()) {
      //     if (key !== visible) {
      //       const link = tocMap.get(key);
      //       if (link) link.classList.remove("active");
      //     }
      //   }
      // }

      // For interactive scrolling
      if (visible) {
          const activeLink = tocMap.get(visible);
          
          for (const key of tocMap.keys()) {
              if (key !== visible) {
                  const link = tocMap.get(key);
                  if (link) link.classList.remove("active");
              }
          }

          // Auto-scroll TOC to show active link
          if (activeLink) {
              const tocCard = activeLink.closest(".toc-card");
              if (tocCard) {
                  const linkOffsetTop = activeLink.offsetTop;
                  const tocScrollTop = tocCard.scrollTop;
                  const tocHeight = tocCard.clientHeight;
                  const linkHeight = activeLink.clientHeight;
                  
                  // Calculate target scroll position to center the link
                  const targetScroll = linkOffsetTop - (tocHeight / 2) + (linkHeight / 2);
                  
                  tocCard.scrollTo({
                      top: targetScroll,
                      behavior: "smooth"
                  });
              }
          }
      }
      // END interactive scrolling


  },
    { threshold: 0, root: null, rootMargin: "0px" },
);

for (const heading of headings) {
  observer.observe(heading);
}
