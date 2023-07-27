import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Page from "../components/Page";
import Button from "../components/Button";
import Category from "../components/Category";
import CTA from "../components/CTA";
import Favorites from "../components/Favorites";
import Grid from "../components/Grid";
import Hero from "../components/Hero";

import MobileMenu from "../components/MobileMenu";
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";

const components = {
  feature: Feature,
  page: Page,
  button: Button,
  category: Category,
  cta: CTA,
  favorites: Favorites,
  grid: Grid,
  hero: Hero,
};

storyblokInit({
  accessToken: "csqNyrcw5RaiEvxz2GDhmAtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "us",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <MobileMenu />
      <TopNavigation />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp;
