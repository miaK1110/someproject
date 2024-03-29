import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

// tailwind css file
import "../css/app.css";

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/toppage/${name}.tsx`,
      import.meta.glob("./Pages/**/*.tsx")
    ),
  setup({ el, App, props }) {
    createRoot(document.getElementById("app")!).render(<App {...props} />);
  },
});
