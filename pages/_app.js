import "../styles/globals.css";
import { Fragment } from 'react'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";
import Button from "../components/Button";
import CTA from "../components/CTA";
import Featured from "../components/Featured";
import Grid from "../components/Grid";
import Hero from "../components/Hero";
import OurFavorites from "../components/OurFavorites";
import ShopByCategory from "../components/ShopByCategory";
import GlobalReference from "../components/GlobalReference";
import Global from "../components/Global";

const components = {
  page: Page,
  button: Button,
  cta: CTA,
  featured: Featured,
  grid: Grid,
  hero: Hero,
  our_favorites: OurFavorites,
  shop_by_category: ShopByCategory,
  global_reference: GlobalReference,
  global: Global,
};

storyblokInit({
  accessToken: process.env.ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "us",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp;
