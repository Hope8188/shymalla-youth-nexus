import { Heart, Instagram, Twitter, Facebook, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const links = {
    Organization: [
      { label: "About Us", href: "#about" },
      { label: "Our Programs", href: "#programs" },
      { label: "Success Stories", href: "#stories" },
      { label: "Contact", href: "#contact" },
    ],
    "Get Involved": [
      { label: "Donate", href: "#donate" },
      { label: "Volunteer", href: "#contact" },
      { label: "Partner With Us", href: "#contact" },
      { label: "Careers", href: "#contact" },
    ],
    Resources: [
      { label: "Annual Reports", href: "#" },
      { label: "Press Kit", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-wide py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <Heart className="text-primary-foreground" size={22} />
              </div>
              <span className="text-2xl font-bold text-background">Betterment Shymalla</span>
            </a>
            <p className="text-background/60 leading-relaxed max-w-sm">
              A youth-led movement empowering young Kenyans through health, wellness, 
              and entrepreneurship programs.
            </p>
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {Object.entries(links).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-bold text-background mb-6 text-sm uppercase tracking-wider">{category}</h3>
                  <ul className="space-y-4">
                    {items.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-background/60 hover:text-background transition-colors flex items-center gap-1 group">
                          {link.label}
                          <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">© {new Date().getFullYear()} Betterment Shymalla Movement. All rights reserved.</p>
          <p className="text-background/50 text-sm flex items-center gap-2">Made with <Heart size={14} className="text-accent" /> in Kenya</p>
        </div>
      </div>
    </footer>
  );
}