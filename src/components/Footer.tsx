import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const links = {
    Organization: [
      { label: "About Us", href: "#about" },
      { label: "Programs", href: "#programs" },
      { label: "Impact", href: "#stats" },
      { label: "Stories", href: "#stories" },
    ],
    "Get Involved": [
      { label: "Donate", href: "#donate" },
      { label: "Volunteer", href: "#contact" },
      { label: "Partner", href: "#contact" },
      { label: "Careers", href: "#contact" },
    ],
    Resources: [
      { label: "Annual Reports", href: "#" },
      { label: "Press Kit", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-xl">Betterment Shymalla</span>
            </div>
            <p className="text-background/70 max-w-sm">
              Empowering Kenyan youth through health awareness, mental wellness, 
              and entrepreneurship programs. Led by youth, for youth.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Betterment Shymalla Movement. All rights reserved.
          </p>
          <p className="text-background/60 text-sm italic">
            Always In My Prime
          </p>
        </div>
      </div>
    </footer>
  );
}