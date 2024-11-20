import Category from "../components/category/Category";
import HeroSection from "../components/heroSection/HeroSection";
import HomePageProductCard from "../components/homePageProductCard/HomePageProductCard";
import Layout from "../components/Layout";
import Testimonial from "../components/testimonial/Testimonial";
import Track from "../components/track/Track";
import { useContext } from "react";
import myContext from "../context/myContext";
function HomePage() {
  const context = useContext(myContext);
  const name = context;
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
      {name}
    </Layout>
  );
}

export default HomePage;
