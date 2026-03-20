import { useState } from "react";

const navItems = ["Demos", "About", "Resume", "Services", "Portfolio", "Pricing", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("About");

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <div className="navbar-shell">
        <div className="flex items-center gap-3">
          <div className="nav-avatar">
            <img src="/images/avatar.webp" alt="ZenG" className="w-11 h-11 rounded-full object-cover" />
          </div>
          <div>
            <div className="font-heading font-semibold text-foreground text-sm">ZenG</div>
            <div className="text-[10px] uppercase tracking-[2px] text-primary font-mono">AI Developer</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`nav-link ${active === item ? "active text-primary" : ""}`}
            >
              {item}
            </button>
          ))}
        </nav>
        <button onClick={() => scrollTo("Contact")} className="btn-primary nav-cta">
          Hire Me
        </button>
      </div>
    </header>
  );
};

export default Navbar;
