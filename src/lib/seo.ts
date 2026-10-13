export const siteOrigin = "https://blitzelement.com";
export const absoluteUrl = (path: string) => new URL(path, siteOrigin).href;

export function pageSeo(title: string, description: string, path: string) {
  const fullTitle = `${title} | Blitz Element`;
  const url = absoluteUrl(path);
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

