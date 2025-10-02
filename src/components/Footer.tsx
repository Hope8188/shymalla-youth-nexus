import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    "Quick Links": [
      { label: "About Us", href: "#about" },
      { label: "Programs", href: "#programs" },
      { label: "Events", href: "#events" },
      { label: "Blog", href: "#blog" },
    ],
    "Get Involved": [
      { label: "Donate", href: "#donate" },
      { label: "Volunteer", href: "#contact" },
      { label: "Partner", href: "#contact" },
      { label: "Careers", href: "#contact" },
    ],
    "Resources": [
      { label: "Annual Reports", href: "#" },
      { label: "Impact Stories", href: "#blog" },
      { label: "Press Kit", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
    { icon: Twitter, label: "Twitter/X", href: "#", color: "hover:text-blue-400" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-600" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-hero"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-extrabold text-lg text-foreground">Betterment Shymalla</div>
                <div className="text-xs text-muted-foreground">Youth-Led Movement</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering Kenyan youth through health awareness, mental wellness, and entrepreneurship programs.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Email: bettermentshymalla@gmail.com</p>
              <p>Phone: +254 743 481 715 / +254 721 725 958</p>
              <p className="italic font-semibold text-primary">Always In My Prime</p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center ${social.color} transition-colors`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-foreground mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Betterment Shymalla Movement. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
