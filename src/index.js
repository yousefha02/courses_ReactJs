import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import {BrowserRouter} from 'react-router-dom'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ["ar", "en"],
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "localStorage", "htmlTag", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

  //Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CacheProvider value={cacheRtl}>
    <BrowserRouter>
      <Suspense fallback={<h1></h1>}>
          <App />
      </Suspense>
    </BrowserRouter>
  </CacheProvider>
);
