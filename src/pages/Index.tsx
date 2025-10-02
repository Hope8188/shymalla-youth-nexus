import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Programs from "@/components/Programs";
import SuccessStories from "@/components/SuccessStories";
import Events from "@/components/Events";
import Blog from "@/components/Blog";
import MediaFeatured from "@/components/MediaFeatured";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NewsletterBar from "@/components/NewsletterBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Partners />
        <Programs />
        <SuccessStories />
        <Events />
        <Blog />
        <MediaFeatured />
        <Donate />
        <Contact />
      </main>
      <Footer />
      <NewsletterBar />
    </div>
  );
};

export default Index;
