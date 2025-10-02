import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Events from "@/components/Events";
import Blog from "@/components/Blog";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Events />
        <Blog />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
