import Image from "next/image";
import Hero from "./_components/Hero";
import Grid from "./_components/Grid";
import Card from "./_components/Card";
import FeaturedProduct from "./_components/featured-product";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Grid/>
      <FeaturedProduct/>
    </div>
  );
}
