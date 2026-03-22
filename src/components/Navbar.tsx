import { useEffect, useState } from "react";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = ["About", "Resume", "Portfolio", "Skills", "Certifications", "Recommendations", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("About");
  const { resolvedTheme, setTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  useEffect(() => {
    const sections = navItems
      .map((item) => {
        const id = item.toLowerCase();
        const element = document.getElementById(id);
        return element ? { item, element } : null;
      })
      .filter((section): section is { item: string; element: HTMLElement } => section !== null);

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const offset = 160;
      const scrollPosition = window.scrollY + offset;

      const currentSection =
        [...sections]
          .reverse()
          .find(({ element }) => element.offsetTop <= scrollPosition) ?? sections[0];

      setActive((previous) => (previous === currentSection.item ? previous : currentSection.item));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="navbar-shell">
        <div className="flex items-center gap-3">
          <div className="nav-avatar">
            <img src="/images/avatar.webp" alt="ZenG" className="h-12 w-12 rounded-full object-cover" />
          </div>
          <div>
            <div className="font-heading text-[1.7rem] font-semibold leading-none text-foreground">ZenG</div>
            <div className="font-mono text-[10px] uppercase tracking-[2.8px] text-primary">AI Developer</div>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
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
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            onClick={() => setTheme(isLight ? "dark" : "light")}
            className="theme-toggle"
          >
            {isLight ? <Moon size={18} /> : <SunMedium size={18} />}
          </button>
          <button onClick={() => scrollTo("Contact")} className="btn-primary nav-cta">
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
