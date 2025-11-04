// Components
import { Logo } from "../../element/logo";
import { Button } from "../../element/button/button";

// Styles
import "../../element/logo/logo.styles.css";
import "../../element/button/button.styles.css";

// Assets
import viteLogo from "/vite.svg";
import typescriptLogo from "../../../assets/typescript.svg";

export const AboutPage = () => {
  const container = document.createElement("div");

  const logosWrapper = document.createElement("div");
  logosWrapper.appendChild(Logo(viteLogo, "Vite logo", "https://vite.dev"));
  logosWrapper.appendChild(
    Logo(
      typescriptLogo,
      "TypeScript logo",
      "https://www.typescriptlang.org/",
      "logo"
    )
  );
  container.appendChild(logosWrapper);

  const title = document.createElement("h1");
  title.textContent = "| Sobre - Vite + TypeScript";
  container.appendChild(title);

  const card = document.createElement("div");
  card.className = "card";

  const counterDisplay = document.createElement("p");
  let count = 0;
  counterDisplay.textContent = `Contador: ${count}`;
  card.appendChild(counterDisplay);

  const handleUpdateCounter = () => {
    if (count < 10) {
      ++count;
      counterDisplay.textContent = `Contador: ${count}`;
    } else {
      counterDisplay.textContent = `CHEGAAA!`;
    }
  };

  const incrementBtn = Button(
    "Clique para incrementar...",
    handleUpdateCounter,
    "cta-button"
  );
  card.appendChild(incrementBtn);

  container.appendChild(card);

  const info = document.createElement("p");
  info.className = "read-the-docs";
  info.textContent = "Click on the Vite and TypeScript logos to learn more";
  container.appendChild(info);

  return container;
};
