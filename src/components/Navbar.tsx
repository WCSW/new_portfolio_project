import { useState } from "react";

const navItems = ["About", "Resume", "Services", "Portfolio", "Pricing", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("About");

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/avatar.webp" alt="ZenG" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <div className="font-heading font-semibold text-foreground text-sm">ZenG</div>
            <div className="text-[10px] uppercase tracking-[2px] text-primary font-mono">AI Developer</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`nav-link ${active === item ? "active text-foreground" : ""}`}
            >
              {item}
            </button>
          ))}
        </nav>
        <button
          onClick={() => scrollTo("Contact")}
          className="btn-primary text-sm py-2 px-6"
        >
          Hire Me
        </button>
      </div>
    </header>
  );
};

export default Navbar;
