// Pages
import { HomePage } from "../components/pages/home-page/home.page";
import { AboutPage } from "../components/pages/about-page";

const routes: Record<string, () => HTMLElement> = {
  "/": HomePage,
  "/sobre": AboutPage,
};

export const router = () => {
  const app = document.querySelector("#app")!;
  app.innerHTML = "";

  const path = window.location.pathname;

  const pages = routes[path] || HomePage;

  app.appendChild(pages());
};
