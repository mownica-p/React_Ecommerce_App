import Category from "../components/category/Category";
import HeroSection from "../components/heroSection/HeroSection";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <Category />
    </Layout>
  );
}

export default HomePage;
