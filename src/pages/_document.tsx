import portfolio from "@/data/portfolio.json";
import { THEME_ATTRIBUTE, THEME_STORAGE_KEY } from "@/entities/theme/Theme";
import { Html, Head, Main, NextScript } from "next/document";

const themeInitializationScript = `
  (function () {
    var storageKey = ${JSON.stringify(THEME_STORAGE_KEY)};
    var themeAttribute = ${JSON.stringify(THEME_ATTRIBUTE)};
    var darkThemeQuery = "(prefers-color-scheme: dark)";
    var storedTheme = null;

    try {
      storedTheme = window.localStorage.getItem(storageKey);
    } catch (_) {}

    var theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : window.matchMedia && window.matchMedia(darkThemeQuery).matches
      ? "dark"
      : "light";

    document.documentElement.setAttribute(themeAttribute, theme);
  })();
`;

export default function Document() {
  return (
    <Html lang={portfolio.metadata.language}>
      <Head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitializationScript }}
        />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content={portfolio.metadata.keywords.join(", ")}
        ></meta>
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
