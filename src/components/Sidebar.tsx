import { Linkedin, Github, Twitter, Dribbble } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar-column">
      <div className="sticky top-28 text-center">
        <div className="profile-card">
          <div className="profile-image-shell">
            <img src="/images/avatar.webp" alt="ZenG" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-heading mb-1 text-[2.1rem] font-semibold leading-none text-foreground">ZenG</h3>
          <p className="mb-5 font-mono text-xs uppercase tracking-[3.2px] text-primary">AI Developer</p>
          <a href="mailto:themesflat@gmail.com" className="inline-block text-[1.05rem] font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors">
            themesflat@gmail.com
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Based in San Francisco, CA</p>
          <div className="mt-7 flex justify-center gap-3">
            {[Linkedin, Github, Twitter, Dribbble].map((Icon, i) => (
              <a key={i} href="#" className="social-icon">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
