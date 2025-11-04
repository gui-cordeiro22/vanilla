// Styles
import "./styles/global-style.css";

// Assets
import { HomePage } from "./components/pages/home-page/home.page";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = "";
app.appendChild(HomePage());
