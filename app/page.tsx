
import Hero from "./Hero";
import Categories from "./Categories"
import FeaturedBooks from "./FeaturedBooks";

export const revalidate = 3600;
export default function Home() {
  return (
    <>
      <Hero />
      <Categories/>
      <FeaturedBooks/>
    </>
  );
}