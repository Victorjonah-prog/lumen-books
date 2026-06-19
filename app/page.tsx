import Image from "next/image";
import Hero from "./Hero";
import Categories from "./Categories"
import FeaturedBooks from "./FeaturedBooks";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories/>
      <FeaturedBooks/>
    </>
  );
}