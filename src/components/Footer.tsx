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
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Heart className="text-primary-foreground" size={16} />
              </div>
              <span className="font-bold">Betterment Shymalla</span>
            </a>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Empowering young Kenyans through health, wellness, and entrepreneurship.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-xs uppercase tracking-wider mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-secondary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-xs">© {new Date().getFullYear()} Betterment Shymalla Movement</p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} className="w-8 h-8 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}