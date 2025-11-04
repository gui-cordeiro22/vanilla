// Routes
import { router } from "./routes/routes";

// Styles
import "./styles/global-style.css";

router();

window.addEventListener("popstate", router);
