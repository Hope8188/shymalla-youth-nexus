import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import SuccessStories from "@/components/SuccessStories";
import VolunteerForm from "@/components/VolunteerForm";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <SuccessStories />
        <VolunteerForm />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;