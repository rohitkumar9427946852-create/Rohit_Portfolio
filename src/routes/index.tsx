import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohit Kumar | CSE (AI & ML) Student | Data & AI" },
      { name: "description", content: "Rohit Kumar is a third-year CSE (AI & ML) student exploring data, artificial intelligence, software development and modern technologies." },
      { property: "og:title", content: "Rohit Kumar | CSE (AI & ML) Student | Data & AI" },
      { property: "og:description", content: "Rohit Kumar is a third-year CSE (AI & ML) student exploring data, artificial intelligence, software development and modern technologies." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: PortfolioPage,
});
